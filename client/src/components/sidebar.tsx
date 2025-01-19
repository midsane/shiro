import {AnimatePresence, motion} from "framer-motion"
import { useRecoilState } from "recoil";
import { sidebarOpenAtom } from "../atoms/atoms";
export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenAtom);  
    return(<>


        <div className={`flex fixed top-0 left-0 p-8 z-20 ${sidebarOpen && "w-[20vw]"} justify-end`}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSidebarOpen(prev => !prev)}
                className="flex flex-col gap-2 cursor-pointer active:scale-95 ">
                <div className={`h-1 ${sidebarOpen ? "bg-red-400  rotate-[45deg] translate-y-1 w-10" : "w-6 bg-blue-300  "}  ` } ></div>
                <div className={`w-6 h-1  ${sidebarOpen ? "opacity-0 bg-red-400" : "bg-blue-300 "}`} ></div>
                <div className={`h-1 ${sidebarOpen ? "rotate-[-45deg] bg-red-400  translate-y-[-25px] w-7" : "w-4 bg-blue-300 "}`} ></div>
            </motion.div>
        </div>
        <AnimatePresence>
            {sidebarOpen &&
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col gap-4 z-10 fixed top-0 left-0 bg-black text-slate-300 rounded-r-3xl h-screen w-[21vw]`}>

                    <div className="flex flex-col gap-4 mt-20 p-10">
                        <p className="cursor-pointer hover:text-blue-300" >inventory</p>
                        <p className="cursor-pointer hover:text-blue-300" >market</p>
                        <p className="cursor-pointer hover:text-blue-300" >settings</p>
                        <p className="cursor-pointer hover:text-blue-300" >log out</p>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </>
    )
}

