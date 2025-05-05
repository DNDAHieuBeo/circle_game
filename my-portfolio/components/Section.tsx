'use client';
import {motion} from 'framer-motion';
import React from 'react';
import Image from 'next/image';


const Section = ({title, description, imageUrl, reverse = false}: SectionProps) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-8 py-8`}>
            <motion.div initial={{rotateY: 90, opacity: 0, transformOrigin:'right'}}
                        animate={{rotateY: 0, opacity: 1}}
                        exit={{rotateY: -90, opacity: 0}}
                        transition={{duration: 2, ease: [0.5, 1, 0.36, 1], delay:0.5}} className="md:w-1/2 relative h-[200px] md:h-[400px] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-2xl"
                />
            </motion.div>

            <motion.div
                initial={{rotateY: 90, opacity: 0, transformOrigin:'left'}}
                animate={{rotateY: 0, opacity: 1}}
                exit={{rotateY: -90, opacity: 0}}
                transition={{duration: 2, ease: [0.5, 1, 0.36, 1], delay:0.3}}
                className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold text-black mt-3">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>

            </motion.div>
        </div>
    );
};

export default Section;
