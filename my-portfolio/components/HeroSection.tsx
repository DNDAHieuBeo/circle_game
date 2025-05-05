// components/HeroSection.tsx
"use client";
import {motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import {TypingEffect} from "@/components/Effect/typing-effect";
import {EyeCatchingButton} from "@/components/Effect/eye-catching";
import {FaFacebookF, FaLinkedin, FaGithub} from "react-icons/fa";


const ShuffleHero = () => {
    return (
        <section
            className=" py-20  grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:px-16 mx-auto overflow-hidden h-screen relative">
            <div className=''>
                <h2 className="text-2xl md:text-4xl font-semibold text-black">
                    Hi, I am
                </h2>
                <TypingEffect text={"Le Tri Hieu"}/>

                <p className="text-base md:text-lg text-slate-800 my-4 md:my-6">
                    Front-end Developer
                </p>
                <motion.div className='flex flex-row md:gap-8'
                            initial={{rotateY: 90, opacity: 0, transformOrigin: "left"}}
                            animate={{rotateY: 0, opacity: 1}}
                            exit={{rotateY: -90, opacity: 0}}
                            transition={{duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5}}>
                    <EyeCatchingButton className="hello"><FaFacebookF/></EyeCatchingButton>
                    <EyeCatchingButton className="hello"><FaLinkedin/></EyeCatchingButton>
                    <EyeCatchingButton className="hello"><FaGithub/></EyeCatchingButton>
                </motion.div>


            </div>
            <div>
                <motion.div
                    initial={{rotateY: 90, opacity: 0, transformOrigin: "right"}}
                    animate={{rotateY: 0, opacity: 1}}
                    exit={{rotateY: -90, opacity: 0}}
                    transition={{duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5}}
                    className="absolute top-0 right-0 h-screen md:w-3/5 bg-black "
                    style={{
                        clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)"

                    }}
                >
                    Hello
                </motion.div>
            </div>


        </section>
    );
};


export default ShuffleHero;