// temporarily remove react to pass build
// import React from 'react'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [secondaryText, setSecondaryText] = useState('');
  const [index, setIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isSecondaryComplete, setIsSecondaryComplete] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  
  const fullText = "Hey! Welcome to my world!\nI am Corrine, a full-stack student developer!";
  const secondFullText = "I'm passionate about web development, and my favorite tech stack includes React, TypeScript, and Node.js.";
  
  // 第一段文本的打字效果 - 速度提高
  useEffect(() => {
    if (index < fullText.length) {
      const typingTimer = setTimeout(() => {
        const nextChar = fullText[index];
        setDisplayText(prev => prev + nextChar);
        setIndex(index + 1);
      }, 50); // 从100ms降至50ms，提高打字速度
      
      return () => clearTimeout(typingTimer);
    } else {
      setIsComplete(true);
      
      // 打字完成1秒后显示第二段内容
      const timer = setTimeout(() => {
        setShowSecondary(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);
  
  // 第二段文本的打字效果 - 也适当加快
  useEffect(() => {
    if (!showSecondary) return;
    
    if (secondaryIndex < secondFullText.length) {
      const typingTimer = setTimeout(() => {
        const nextChar = secondFullText[secondaryIndex];
        setSecondaryText(prev => prev + nextChar);
        setSecondaryIndex(secondaryIndex + 1);
      }, 30); // 从50ms降至30ms，进一步提高速度
      
      return () => clearTimeout(typingTimer);
    } else {
      setIsSecondaryComplete(true);
    }
  }, [secondaryIndex, secondFullText, showSecondary]);
  
  return (
    <section id="about" className="min-h-screen py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 单一文本框包含所有内容 */}
        <motion.div 
          className="relative p-8 rounded-xl 
                     bg-gradient-to-br from-white/80 to-white/60
                     dark:from-gray-900/60 dark:to-gray-900/30
                     shadow-xl backdrop-blur-sm
                     border border-white/30 dark:border-cyan-500/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-lg md:text-xl lg:text-2xl leading-relaxed relative">
            {/* 第一段文本 */}
            <div className="whitespace-pre-line text-transparent bg-clip-text 
                         bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600
                         dark:from-cyan-200 dark:to-blue-200
                         [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)] inline">
              {displayText}
              {/* 打字光标效果 */}
              {!isComplete && (
                <motion.span 
                  className="inline-block w-[2px] h-[1.2em] bg-blue-500 dark:bg-cyan-300 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              )}
            </div>
            
            {/* 第二段文本 - 滚动出现 */}
            <AnimatePresence>
              {showSecondary && (
                <motion.div 
                  className="mt-6 whitespace-pre-line text-transparent bg-clip-text 
                           bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600
                           dark:from-cyan-200 dark:to-blue-200
                           [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {secondaryText}
                  {/* 第二段的打字光标效果 */}
                  {showSecondary && !isSecondaryComplete && (
                    <motion.span 
                      className="inline-block w-[2px] h-[1.2em] bg-blue-500 dark:bg-cyan-300 align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero