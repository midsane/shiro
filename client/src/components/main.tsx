import { useRecoilValue } from "recoil"
import { sidebarOpenAtom } from "../atoms/atoms"
import {ExternalLink} from "lucide-react"

export const Main = () => {
    const sidebarOpen = useRecoilValue(sidebarOpenAtom);
    return(<div className={`h-full bg-zinc-900 ${sidebarOpen ? "w-[80vw]": "w-screen"} `}>
        <div className=" h-1/2 relative overflow-hidden rounded bg-black">
            <img 
            className="w-full opacity-50"
            src="https://i.pinimg.com/736x/c4/6d/09/c46d09dcbfd86ce160651ef5e877a7fc.jpg" />
            <div className="w-[70%] rounded-3xl flex justify-between translate-x-1/2 right-1/2 p-10 h-min-10 bg-black absolute bottom-2 border border-stone-700 " >
                <div className="w-1/3 flex " >
                    <div className="border-r-2 flex flex-col px-10  gap-2 border-stone-600">
                        <p>xp</p>
                        <p>121</p>
                    </div>
                    <div className="border-r-2 flex flex-col px-10 gap-2 border-stone-600">
                        <p>rose</p>
                        <p>23</p>
                    </div>
                 
                </div>
                <div className="w-1/3 flex " >
                    <div className="border-r-2 flex flex-col px-10  gap-2 border-stone-600">
                        <p>country:</p>
                        <p>india</p>
                    </div>
                    <div className="border-r-2 justify-center flex flex-col px-10 gap-2 border-stone-600">
                        <p>socials</p>
                        <ExternalLink size={20} />
                    </div>

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
            <div className="h-1/2 bg-black w-1/4 rounded-xl border border-stone-700" ></div>
            <div className="h-1/2 bg-black w-1/4 rounded-xl border border-stone-700" ></div>
            <div className="h-1/2 bg-black w-1/4 rounded-xl border border-stone-700" ></div>
        </div>
    </div>)
}