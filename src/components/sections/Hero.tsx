'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8">
              <Image
                src="https://avatars.githubusercontent.com/u/114350976?v=4"
                alt="Lynn Kathomi"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-2xl border-4 border-purple-500/20"
                priority
              />
              <motion.div
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 opacity-50 blur-md"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.6, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Lynn Kathomi
                </span>
              </h1>
              
              <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <p className="text-lg md:text-2xl text-purple-200 font-medium">
                  Software Developer
                </p>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl px-4 md:px-0">
                  {/* Show shorter text on mobile */}
                  <span className="block md:hidden">
                    IT student at Zetech University, passionate about web development, programming, and innovation.
                  </span>
                  {/* Show full text on desktop */}
                  <span className="hidden md:block">
                    Motivated IT student at Zetech University (Class of 2025), passionate about leveraging academic knowledge 
                    to solve real-world problems. Expertise in web development, programming, and database management, 
                    with a strong focus on continuous learning and innovation.
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 md:gap-6 py-2 md:py-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4 md:gap-6"
                >
                  <div className="flex flex-col items-center">
                    <FaCode className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mb-1 md:mb-2" />
                    <span className="text-xs md:text-sm text-gray-400">Web Dev</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaLaptopCode className="w-5 h-5 md:w-6 md:h-6 text-pink-400 mb-1 md:mb-2" />
                    <span className="text-xs md:text-sm text-gray-400">Programming</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaServer className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mb-1 md:mb-2" />
                    <span className="text-xs md:text-sm text-gray-400">Databases</span>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                <motion.a
                  href="#contact"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full 
                    hover:opacity-90 transition-opacity font-medium w-full md:w-auto text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 md:px-8 py-2.5 md:py-3 border border-purple-500/20 rounded-full 
                    hover:bg-purple-500/10 transition-colors font-medium w-full md:w-auto text-sm md:text-base
                    backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 md:pt-6">
                <motion.a
                  href="https://github.com/lynnkathomi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs opacity-0 group-hover:opacity-100 absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/lynn-kathomi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs opacity-0 group-hover:opacity-100 absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <a href="#about" className="inline-flex flex-col items-center text-sm text-purple-200 hover:text-purple-300 transition-colors">
            <span className="mb-2 font-medium">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 