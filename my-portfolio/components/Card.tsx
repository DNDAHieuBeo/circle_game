'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CardProps } from '@/type';

const Card = ({ project, setSelectedProject }: CardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedProject(project)}
        >
            <div className="relative overflow-hidden rounded-xl shadow-md">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={700}
                    className="object-cover w-full h-64"
                />
                <h3 className="absolute bottom-0 left-0 bg-black bg-opacity-100 text-white p-2 w-full">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

export default Card;
