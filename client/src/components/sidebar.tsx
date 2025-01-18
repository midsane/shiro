import { useState } from "react"
import {AnimatePresence, motion} from "framer-motion"
export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);  
    return(<>


        <div className={`flex fixed top-0 left-0 p-8 z-10 w-[${sidebarOpen? "250px": "5px"}] justify-end`}>
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
                    className="flex flex-col gap-4 fixed top-0 left-[-20px] bg-black text-slate-300 p-8 rounded-3xl h-screen w-[250px]">

                    <div className="flex flex-col gap-4 mt-20">
                        <p>inventory</p>
                        <p>market</p>
                        <p>settings</p>
                        <p>log out</p>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </>
    )
}

