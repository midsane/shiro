import {ExternalLink, Flag, ArrowBigUp} from "lucide-react"

export const Main = () => {
   
    return(<div className={`h-full bg-zinc-900 w-screen `}>
        <div className=" h-1/2 relative overflow-hidden rounded bg-black">
            <img 
            className="w-full opacity-50"
            src="https://i.pinimg.com/736x/c4/6d/09/c46d09dcbfd86ce160651ef5e877a7fc.jpg" />
            <div className="w-[70%] rounded-3xl flex justify-between translate-x-1/2 right-1/2 p-10 h-min-10 bg-black absolute bottom-0 border border-stone-700 " >
                <div className="w-1/3 flex " >
                    <ProfileInfo Svg={<ProgressBar value={4} max={10} />} text1="xp" text2="121"  />
                    <ProfileInfo Svg={<ArrowBigUp />}  text1="rose" text2="23" />
                 
                </div>
                <div className="w-1/3 flex " >
                  
                    <ProfileInfo Svg={<Flag/>} text1="country" text2="india" />
                    <ProfileInfo Svg={<ExternalLink size={20} />} text1="socils" text2="insta" />

                </div>

                
                <div className="fixed flex flex-col gap-2 top-[-35px] right-1/2 translate-x-1/2 rounded-3xl w-20 h-28 ">

                    <div className="w-full h-[70%] bg-blue-200 rounded-3xl" >
                        <img src="https://i.pinimg.com/736x/83/4f/e6/834fe637588ed7ccca41c0ebd659e855.jpg" 
                        className="object-cover rounded-3xl"
                        />
                    </div>

                    <p className="text-center" >username</p>
                </div>
              
            </div>
        </div>

        <div className=" h-1/2 flex justify-around items-center">
            <div className="w-[70%] rounded-3xl flex justify-between p-10 h-min-10 bg-black border border-stone-700 h-[90%] items-center " >
               
                <div className="h-[80%] bg-black w-[32%] rounded-xl border border-stone-700" ></div>
                <div className="h-[80%] bg-black w-[32%] rounded-xl border border-stone-700" ></div>
                <div className="h-[80%] bg-black w-[32%] rounded-xl border border-stone-700" ></div>
            </div>
           
        </div>
    </div>)
}



import React from 'react';

interface ProgressBarProps {
    value: number;
    max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
    const percentage = (value / max) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-3xl h-2 border border-gray-300 overflow-hidden">
            <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;


const ProfileInfo = ({Svg, text1, text2 }: { Svg: React.ReactNode, text1: String, text2: String }) => {
    return (<div className="border-r-2 justify-between flex flex-col px-10 gap-2 border-stone-600">
        {Svg}
        <p>{text1}</p>
        <p>{text2}</p>
    </div>)
}