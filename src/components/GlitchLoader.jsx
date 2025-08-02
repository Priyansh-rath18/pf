import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlitchLoader = ({ isVisible, onComplete }) => {
  const [glitchText, setGlitchText] = useState('LOADING...');
  
  const glitchTexts = [
    'LOADING...',
    'L04D1NG...',
    'L0@D!NG...',
    'L0AD1N9...',
    'INITIALIZING...',
    'IN1T1@L1Z1NG...',
    'CONNECTING...',
    'C0NN3CT1NG...',
    'LOADING...'
  ];

  useEffect(() => {
    if (!isVisible) return;
    
    const glitchInterval = setInterval(() => {
      setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    }, 150);

    const completeTimer = setTimeout(() => {
      clearInterval(glitchInterval);
      onComplete();
    }, 1500);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(completeTimer);
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-background"></div>
          </div>

          {/* Glitch overlay bars */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 20%, rgba(255, 0, 255, 0.1) 70%, transparent 100%)',
                'linear-gradient(90deg, transparent 10%, rgba(0, 255, 0, 0.1) 30%, transparent 80%)'
              ]
            }}
            transition={{ 
              duration: 0.3, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />

          {/* Random glitch bars */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-60"
              style={{ 
                top: `${Math.random() * 100}%`,
                height: `${Math.random() * 3 + 1}px`
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 0.5 + 0.3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Main glitch text */}
            <motion.div
              className="relative mb-8"
              animate={{
                scale: [1, 1.05, 1],
                rotateX: [0, 180, 360]
              }}
              transition={{ 
                duration: 0.6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-6xl lg:text-8xl font-bold glitch-text">
                <span className="glitch-text-main bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  {glitchText}
                </span>
              </h1>
              
              {/* Glitch text duplicates for effect */}
              <h1 className="absolute top-0 left-0 text-6xl lg:text-8xl font-bold text-red-500 opacity-70 glitch-layer-1">
                {glitchText}
              </h1>
              <h1 className="absolute top-0 left-0 text-6xl lg:text-8xl font-bold text-cyan-500 opacity-70 glitch-layer-2">
                {glitchText}
              </h1>
            </motion.div>

            {/* Animated progress bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* Binary rain effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-green-500 font-mono text-xs"
                  style={{ 
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 8 + 8}px`
                  }}
                  animate={{
                    y: ['0vh', '100vh'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.div>
              ))}
            </div>

            {/* Scanning lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  'linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.1) 2%, transparent 4%)',
                  'linear-gradient(0deg, transparent 96%, rgba(0, 255, 255, 0.1) 98%, transparent 100%)'
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <style jsx>{`
            .grid-background {
              background-image: 
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
              background-size: 20px 20px;
              width: 100%;
              height: 100%;
              animation: gridMove 4s linear infinite;
            }
            
            @keyframes gridMove {
              0% { transform: translate(0, 0); }
              100% { transform: translate(20px, 20px); }
            }
            
            .glitch-text-main {
              animation: glitch-main 0.3s infinite;
            }
            
            .glitch-layer-1 {
              animation: glitch-1 0.3s infinite;
              clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            }
            
            .glitch-layer-2 {
              animation: glitch-2 0.3s infinite;
              clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            }
            
            @keyframes glitch-main {
              0%, 14%, 15%, 49%, 50%, 99%, 100% {
                transform: translate(0);
              }
              15%, 49% {
                transform: translate(-2px, 1px);
              }
              50%, 99% {
                transform: translate(1px, -1px);
              }
            }
            
            @keyframes glitch-1 {
              0%, 14%, 15%, 49%, 50%, 99%, 100% {
                transform: translate(0);
              }
              15%, 49% {
                transform: translate(2px, -1px);
              }
              50%, 99% {
                transform: translate(-1px, 1px);
              }
            }
            
            @keyframes glitch-2 {
              0%, 14%, 15%, 49%, 50%, 99%, 100% {
                transform: translate(0);
              }
              15%, 49% {
                transform: translate(-1px, 1px);
              }
              50%, 99% {
                transform: translate(2px, -1px);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlitchLoader;