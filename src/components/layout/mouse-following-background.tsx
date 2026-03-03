'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MouseFollowingBackground: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Faster spring for more "vibrant" responsiveness
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Primary Large Soft Glow */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full opacity-[0.2] dark:opacity-[0.25]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Secondary Vibrant Center Glow */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-[0.25] dark:opacity-[0.35]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* Tertiary Tiny Sharp Accent */}
            <motion.div
                className="absolute w-[150px] h-[150px] rounded-full opacity-[0.3] dark:opacity-[0.4]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 50%)',
                    filter: 'blur(20px)',
                }}
            />
        </div>
    );
};
