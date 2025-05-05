'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

export function GradualSpacing({ text = 'Gradual Spacing' }: { text: string }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="flex justify-center">
            <AnimatePresence>
                {text.split('').map((char, i) => (
                    <motion.p
                        ref={ref}
                        key={i}
                        initial={{ opacity: 0, x: -18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        exit="hidden"
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="text-xl text-center sm:text-xl font-bold md:text-3xl md:leading-[4rem] text-black"
                    >
                        {char === ' ' ? <span>&nbsp;</span> : char}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
}

