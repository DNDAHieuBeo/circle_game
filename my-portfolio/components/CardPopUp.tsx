'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CardPopUpProps } from '@/type';

const CardPopUp = ({ project, onClose }: CardPopUpProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-xl max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto scroll-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-3 right-3 text-gray-600 text-xl font-bold cursor-pointer"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                    <h2 className="text-xl text-black font-bold mb-4">{project.title}</h2>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-lg mb-4 object-cover w-full h-[600px]"
                    />
                    <div className="max-h-[400px] overflow-y-auto">
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CardPopUp;
