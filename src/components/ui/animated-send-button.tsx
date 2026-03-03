'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedSendButtonProps {
    isSubmitting: boolean;
    isSuccess: boolean;
    disabled?: boolean;
    className?: string;
}

export const AnimatedSendButton: React.FC<AnimatedSendButtonProps> = ({
    isSubmitting,
    isSuccess,
    disabled,
    className,
}) => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    useEffect(() => {
        if (isSubmitting) {
            setStatus('sending');
        } else if (isSuccess) {
            setStatus('success');
            const timer = setTimeout(() => setStatus('idle'), 4000);
            return () => clearTimeout(timer);
        } else {
            setStatus('idle');
        }
    }, [isSubmitting, isSuccess]);

    const buttonVariants: any = {
        idle: {
            width: '100%',
            backgroundColor: 'hsl(var(--primary))',
            borderRadius: 'calc(var(--radius) * 1)',
        },
        sending: {
            width: '48px',
            backgroundColor: 'hsl(var(--primary))',
            borderRadius: '24px',
            transition: { duration: 0.4, ease: "easeInOut" }
        },
        success: {
            width: '200px',
            backgroundColor: '#ffffff', // Success white
            borderRadius: 'calc(var(--radius) * 1)',
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    const textVariants = {
        idle: { opacity: 1, x: 0 },
        sending: { opacity: 0, x: -20 },
        success: { opacity: 1, x: 0 }
    };

    const planeVariants: any = {
        idle: { opacity: 1, x: 0, y: 0, rotate: 0 },
        sending: {
            opacity: [1, 1, 0],
            x: [0, 100],
            y: [0, -100],
            rotate: [-45, -45],
            transition: { duration: 0.8, ease: "easeIn" }
        }
    };

    const checkVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
    };

    return (
        <div className={cn("flex justify-center w-full min-h-[48px]", className)}>
            <motion.button
                type="submit"
                disabled={disabled || status !== 'idle'}
                variants={buttonVariants}
                initial="idle"
                animate={status}
                className={cn(
                    "relative h-12 flex items-center justify-center overflow-hidden font-medium shadow-lg transition-all",
                    status === 'idle' ? "text-white shadow-primary/20 hover:shadow-primary/30" : status === 'success' ? "text-primary shadow-none" : "text-white shadow-none"
                )}
            >
                <AnimatePresence mode="wait">
                    {status === 'idle' && (
                        <motion.div
                            key="idle-content"
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <span>SEND MESSAGE</span>
                            <Send className="h-4 w-4" />
                        </motion.div>
                    )}

                    {status === 'sending' && (
                        <motion.div
                            key="sending-content"
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                variants={planeVariants}
                                animate="sending"
                                className="text-white"
                            >
                                <Send className="h-6 w-6 -rotate-45" />
                            </motion.div>
                        </motion.div>
                    )}

                    {status === 'success' && (
                        <motion.div
                            key="success-content"
                            className="flex items-center space-x-2 text-primary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            <Check className="h-5 w-5" />
                            <span>MESSAGE SENT</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};
