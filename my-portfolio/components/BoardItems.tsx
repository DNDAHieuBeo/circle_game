import React from 'react'
import {motion} from "framer-motion";
import {skills} from "@/dummy";
import Image from "next/image";

const BoardItems = () => {
    return (
        <div className="flex items-center w-full max-w-6xl bg-black p-8 rounded-2xl flex-col md:flex-row">
            {/* Vertical "Skills" label */}
            <div className="p-6 ">
                <p className="text-white text-2xl font-semibold md:rotate-270" >
                    Skills
                </p>
            </div>

            {/* Skills Grid */}
            <motion.div  initial={{ rotateY: 90, opacity: 0 }}
                         animate={{ rotateY: 0, opacity: 1 }}
                         exit={{ rotateY: -90, opacity: 0 }}
                         transition={{ duration: 1.5, ease: [0.5, 1, 0.36, 1],delay: 0.5 }}
                         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full origin-right">
                {skills.map((skill, index) => (
                    <motion.div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
                        <div className='flex items-center justify-center h-14'><Image src={skill.image} alt={skill.name} width={50} height={50} /></div>
                        <p className="mt-4 font-semibold text-sm">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
export default BoardItems
