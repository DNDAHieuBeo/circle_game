'use client';
import React, {useState} from 'react';
import Transition from '@/components/Effect/Transition';
import Card from '@/components/Card';
import {motion} from 'framer-motion';
import {cardItems} from '@/dummy';
import CardPopUp from "@/components/CardPopUp";
import {GradualSpacing} from "@/components/Effect/gradual-spacing-text";

const Page = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <Transition>
                <section className="w-full md:pt-20 py-20 md:px-36 bg-slate-200 min-h-screen flex flex-col">
                    <div className="w-full text-center py-14">
                        <GradualSpacing text={'Here is my experiences'}/>
                        <motion.p
                            className="max-w-2xl mx-auto text-lg text-zinc-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            A passionate Frontend Developer & UI enthusiast who loves blending code with creativity.
                        </motion.p>
                    </div>

                    <motion.div initial={{rotateY: 90, opacity: 0, transformOrigin: "top"}}
                                animate={{rotateY: 0, opacity: 1}}
                                exit={{rotateY: -90, opacity: 0}}
                                transition={{duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5}}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cardItems.map((project, index) => (
                            <Card
                                key={index}
                                project={project}
                                setSelectedProject={setSelectedProject}
                            />
                        ))}
                    </motion.div>


                </section>
            </Transition>
            <CardPopUp project={selectedProject} onClose={() => setSelectedProject(null)}/>
        </>
    );
};

export default Page;
