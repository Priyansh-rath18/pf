import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TonyStarkAvatar = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Auto blink every 3-5 seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (!isClicked) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 200);
      }
    }, Math.random() * 2000 + 3000);

    return () => clearInterval(blinkInterval);
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
    setIsBlinking(true);
    
    setTimeout(() => {
      setIsBlinking(false);
      setIsClicked(false);
    }, 500);
  };

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Glowing aura effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: 'blur(20px)',
        }}
      />

      {/* Main avatar container */}
      <motion.div
        className="relative w-64 h-64 cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isClicked ? {
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-blue-600/30 blur-xl" />
        
        {/* Main head shape */}
        <div className="relative w-full h-full bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 rounded-full border-4 border-blue-400/50 shadow-2xl overflow-hidden">
          
          {/* Hair */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-16">
            <div className="w-full h-full bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700 rounded-t-full" />
            <div className="absolute top-4 left-4 w-6 h-8 bg-amber-700 rounded-full transform rotate-12" />
            <div className="absolute top-2 right-6 w-4 h-10 bg-amber-800 rounded-full transform -rotate-12" />
          </div>

          {/* Facial hair */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-900 rounded-full" />
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-amber-900 rounded-full" />

          {/* Eyes */}
          <div className="absolute top-20 left-16 flex space-x-8">
            {/* Left Eye */}
            <div className="relative">
              <div className="w-8 h-6 bg-white rounded-full border border-gray-300">
                <AnimatePresence>
                  {!isBlinking && (
                    <motion.div
                      className="absolute top-1 left-2 w-4 h-4 bg-blue-600 rounded-full"
                      initial={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="absolute top-1 left-1 w-2 h-2 bg-blue-800 rounded-full" />
                      <div className="absolute top-0 right-1 w-1 h-1 bg-white rounded-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Eyebrow */}
              <div className="absolute -top-3 -left-1 w-10 h-2 bg-amber-800 rounded-full transform -rotate-12" />
            </div>

            {/* Right Eye */}
            <div className="relative">
              <div className="w-8 h-6 bg-white rounded-full border border-gray-300">
                <AnimatePresence>
                  {!isBlinking && (
                    <motion.div
                      className="absolute top-1 left-2 w-4 h-4 bg-blue-600 rounded-full"
                      initial={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <div className="absolute top-1 left-1 w-2 h-2 bg-blue-800 rounded-full" />
                      <div className="absolute top-0 right-1 w-1 h-1 bg-white rounded-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Eyebrow */}
              <div className="absolute -top-3 -right-1 w-10 h-2 bg-amber-800 rounded-full transform rotate-12" />
            </div>
          </div>

          {/* Nose */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-6 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-amber-300 rounded-full" />
          </div>

          {/* Mouth */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="w-8 h-3 bg-red-400 rounded-full"
              animate={isClicked ? {
                scaleX: [1, 1.2, 1],
                scaleY: [1, 0.8, 1]
              } : {}}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute top-0 left-2 w-4 h-1 bg-red-300 rounded-full" />
          </div>

          {/* Tech elements - glowing circuit patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-8 right-8 w-1 h-8 bg-blue-400 rounded-full animate-pulse" />
            <div className="absolute top-12 right-6 w-8 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-20 left-6 w-1 h-6 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-8 w-6 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          {/* Arc reactor glow effect on chest area */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full"
            animate={{
              boxShadow: [
                '0 0 10px #3B82F6',
                '0 0 20px #3B82F6',
                '0 0 10px #3B82F6'
              ],
              backgroundColor: [
                'rgba(59, 130, 246, 0.3)',
                'rgba(59, 130, 246, 0.6)',
                'rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-2 rounded-full bg-blue-400 opacity-80" />
            <div className="absolute inset-3 rounded-full bg-white opacity-60" />
          </motion.div>
        </div>

        {/* Interactive sparkles on click */}
        <AnimatePresence>
          {isClicked && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  initial={{
                    opacity: 1,
                    x: 128,
                    y: 128,
                    scale: 0
                  }}
                  animate={{
                    opacity: 0,
                    x: 128 + (Math.random() - 0.5) * 200,
                    y: 128 + (Math.random() - 0.5) * 200,
                    scale: 1
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating tech elements around avatar */}
      <motion.div
        className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        animate={{
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-16 left-2 w-2 h-2 bg-blue-300 rounded-full opacity-60"
        animate={{
          x: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default TonyStarkAvatar;