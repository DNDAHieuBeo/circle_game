'use client'
import React from 'react'
import Transition from "@/components/Effect/Transition";
import Section from "@/components/Section";
import {motion} from "framer-motion";
import {arr} from '@/dummy'
import {GradualSpacing} from "@/components/Effect/gradual-spacing-text";

const Page = () => {
    return (
        <Transition >
            <section className="py-20 md:px-36  bg-slate-200 h-screen w-full overflow-hidden overflow-y-scroll scroll-hidden flex flex-col">
                <section className="py-14 px-4 text-center">

                    <GradualSpacing text={'Hi, I\'m Le Tri Hieu'}/>
                    <motion.p
                        className="max-w-2xl mx-auto text-lg text-zinc-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        A passionate Frontend Developer & UI enthusiast who loves blending code with creativity.
                    </motion.p>
                </section>
                <div className="flex flex-col ">
                    {arr?.map((item, index) => (
                        <Section
                            key={index}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            reverse={item.reverse}
                        />
                    ))}
                </div>

            </section>
        </Transition>

    )
}
export default Page
