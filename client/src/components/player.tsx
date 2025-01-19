import { useEffect, useState } from "react";
import { img1downArr, img1LeftArr, img1rightArr, img1upArr } from "../data/data";
import { createPortal } from "react-dom";

const STEPS = 10;
const charaHeight = 90
const charaWidth = 80

export const PlayerCharacter = () => {
    const [direction, setDirection] = useState(1) //1->left, 2->right, 3->up 4->down
    const [leftFrame, setLeftFrame] = useState(0);
    const [rightFrame, setRightFrame] = useState(0);
    const [upFrame, setUpFrame] = useState(0);
    const [downFrame, setDownFrame] = useState(0);
    const [top, setTop] = useState(30);
    const [left, setLeft] = useState(30);
    const [lastPressTime, setLastPressTime] = useState(new Date().getTime())
    const [imgSrc, setImageSrc] = useState(img1LeftArr[leftFrame]);

    const changeFrame = (arr: string[], currentFrame: number) => {
        const len = arr.length;
        const newFrame = (currentFrame + 1) % len
        return newFrame;
    }

    const checkCollision = (newVal: number, axis: string) => {
        let newTop = top;
        let newLeft = left;
        if(axis == "y") newTop = newVal;
        else newLeft = newVal

        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;

        if (newTop < 0 || newTop + charaHeight > screenHeight) return false;
        if (newLeft < 0 || newLeft + charaWidth > screenWidth) return false;
        return true
    }

    useEffect(() => {

        const controlMovement = (e: any) => {
            const currentTime = new Date().getTime()
            let moveflag: boolean = false;
   
            switch(e.key){
                case "ArrowDown":
                    if(direction !== 4)moveflag = true;
                    else if(downFrame === 0 ) moveflag = true;
                    break;
                case "ArrowUp":
                    if (direction !== 3) moveflag = true;
                    else if(upFrame === 0 ) moveflag = true;
                    break;
                case "ArrowLeft":
                    if (direction !== 1) moveflag = true;
                    else if(leftFrame === 0 ) moveflag = true;
                    break;
                case "ArrowRight":
                    if (direction !== 2) moveflag = true;
                    else if(rightFrame === 0 ) moveflag = true;
                    break;
            } 
            if(!moveflag && currentTime - lastPressTime <= 100 ) return;
            setLastPressTime(currentTime)
            switch (e.key) {
                case "ArrowDown":
                    if (checkCollision(top + STEPS, "y")) {
                        setTop((prevTop) => prevTop + STEPS); 
                    }
                    if (direction !== 4) {
                        setDownFrame(0);
                        setDirection(4);
                    } else {
                        setDownFrame((prevFrame) => changeFrame(img1downArr, prevFrame));
                    }
                    break;
                case "ArrowUp":
                    if (checkCollision(top - STEPS, "y")) {
                        setTop((prevTop) => prevTop - STEPS); 
                    }
                    if (direction !== 3) {
                        setUpFrame(0);
                        setDirection(3);
                    } else {
                        setUpFrame((prevFrame) => changeFrame(img1upArr, prevFrame));
                    }
                    break;
                case "ArrowRight":
                    if (checkCollision(left + STEPS, "x")) {
                        setLeft((prevLeft) => prevLeft + STEPS); 
                    }
                    if (direction !== 2) {
                        setRightFrame(0);
                        setDirection(2);
                    } else {
                        setRightFrame((prevFrame) => changeFrame(img1rightArr, prevFrame));
                    }
                    break;
                case "ArrowLeft":
                    if (checkCollision(left - STEPS, "x")) {
                        setLeft((prevLeft) => prevLeft - STEPS);
                    }
                    if (direction !== 1) {
                        setLeftFrame(0);
                        setDirection(1);
                    } else {
                        setLeftFrame((prevFrame) => changeFrame(img1LeftArr, prevFrame));
                    }
                    break;
            }
        };


        window.addEventListener('keydown', controlMovement);

        return () => window.removeEventListener('keydown', controlMovement)

    }, [top, left,direction, upFrame, downFrame,leftFrame, rightFrame ])

    useEffect(() => {
        let newImgSrc ="" ;
        switch(direction){
            case 1:
                newImgSrc = img1LeftArr[leftFrame];
                break;
            case 2:
                newImgSrc = img1rightArr[rightFrame];
                break;
            case 3:
                newImgSrc = img1upArr[upFrame];
                break;
            case 4:
                newImgSrc = img1downArr[downFrame];
        }
        setImageSrc(newImgSrc)

    }, [direction, leftFrame, rightFrame, upFrame, downFrame, top, left])

    return createPortal(
        <div
            style={{
                position: "fixed",
                top: `${top}px`,
                left: `${left}px`,
                width: `${charaWidth}px`,
                height: `${charaHeight}px`,
            }}
        >
            <img style={{ width: `${charaWidth}px`, height: `${charaHeight}px` }} src={imgSrc} />
        </div>,
        document.body)

}