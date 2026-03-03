'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const BackgroundTexture: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Sync with MouseFollowingBackground spring settings
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

    // Create a dynamic mask string for CSS
    const maskImage = useTransform(
        [smoothX, smoothY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, black 0%, transparent 100%)`
    );

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.15] dark:opacity-[0.25]"
            style={{
                WebkitMaskImage: maskImage,
                maskImage: maskImage,
            }}
        >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id="geometric-pattern"
                        width="100"
                        height="173.2"
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 100 173.2"
                    >
                        <path
                            d="M50 0 L100 28.867 L100 86.603 L50 115.47 L0 86.603 L0 28.867 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                        <path
                            d="M50 57.735 L100 86.603 L100 144.338 L50 173.205 L0 144.338 L0 86.603 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                        <path
                            d="M0 28.867 L50 57.735 L100 28.867 M0 86.603 L50 57.735 L100 86.603 M50 0 L50 57.735 L50 115.47 M0 144.338 L50 173.205 L100 144.338"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
            </svg>
        </motion.div>
    );
};
