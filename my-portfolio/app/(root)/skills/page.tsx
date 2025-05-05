'use client';
import React from 'react';

import Transition from "@/components/Effect/Transition";

import {motion} from "framer-motion";
import {GradualSpacing} from "@/components/Effect/gradual-spacing-text";
import BoardItems from "@/components/BoardItems";

const Skills = () => {
    return (
        <Transition>
            <section className="bg-slate-200 min-h-screen flex flex-col items-center md:p-20 p-4">

                <div className="w-full text-center py-14">
                    <GradualSpacing text={'What can I do?'}/>
                    <motion.p
                        className="max-w-2xl mx-auto text-lg text-zinc-700"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 0.6}}
                    >
                        A passionate Frontend Developer & UI enthusiast who loves blending code with creativity.
                    </motion.p>
                </div>
                <BoardItems/>
            </section>
        </Transition>
    );
};

export default Skills;
