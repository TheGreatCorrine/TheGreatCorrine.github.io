import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Welcome = ({ onExplore }: { onExplore: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHoveringCard(true);
    const handleMouseLeave = () => setIsHoveringCard(false);

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const glowStyles = {
    background: isHoveringCard
      ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(147, 197, 253, 0.15), 
          rgba(196, 181, 253, 0.15) 20%,
          transparent 50%)`
      : '',
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center 
                    bg-gradient-to-br from-blue-50 to-pink-50 
                    dark:from-gray-950 dark:via-cyan-950/10 dark:to-blue-950/20">
      {/* 外发光容器 */}
      <div className="w-[90%] max-w-4xl relative group">
        {/* 外发光效果 */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                       dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500
                       rounded-2xl opacity-30 group-hover:opacity-50 blur-lg
                       transition-all duration-500
                       animate-tilt"></div>
        
        {/* 流光边框 */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
                       dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400
                       rounded-2xl opacity-30 group-hover:opacity-50
                       animate-border-flow"></div>

        {/* 七彩线条浮光效果 */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-conic from-cyan-500 via-blue-500 to-indigo-500 
                           animate-spin-slow [transform-origin:50%_50%]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent 
                           dark:from-transparent dark:via-white/5 dark:to-transparent"></div>
          </div>
        </div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[500px] rounded-2xl overflow-hidden flex shadow-2xl
                     backdrop-blur-sm bg-gradient-to-br from-white/5 via-white/10 to-white/5
                     dark:from-gray-950/50 dark:via-cyan-950/30 dark:to-blue-950/50
                     border border-white/20 dark:border-cyan-300/10"
        >
          {/* 流光效果层 */}
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-300
                       pointer-events-none opacity-0 group-hover:opacity-100
                       mix-blend-soft-light dark:mix-blend-overlay"
            style={glowStyles}
          />
          
          {/* 边框流光效果 */}
          <div
            className="absolute inset-0 rounded-2xl border border-white/20 dark:border-cyan-300/10
                       transition-opacity duration-300 pointer-events-none
                       opacity-0 group-hover:opacity-100"
            style={{
              background: isHoveringCard
                ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    rgba(255,255,255,0.4), 
                    rgba(255,255,255,0.2) 20%,
                    transparent 50%)`
                : '',
            }}
          />

          {/* 左侧部分 */}
          <div className="w-1/2 relative bg-gradient-to-br 
                          from-blue-200/80 via-pink-200/70 to-purple-200/80
                          dark:from-gray-900/40 dark:via-cyan-900/20 dark:to-blue-900/30 
                          dark:backdrop-blur-md
                          p-8 flex flex-col items-center justify-center">
            {/* 头像容器 */}
            <div className="w-32 h-32 rounded-full 
                           bg-gradient-to-br from-white/90 to-white/70 
                           dark:from-gray-800/50 dark:to-gray-900/50
                           shadow-lg mb-6 overflow-hidden flex items-center justify-center
                           backdrop-blur-sm">
              <img 
                src="/IMG_8856.JPG"
                alt="Corrine" 
                className="w-full h-full object-cover"
                style={{
                  transform: 'scale(1.1)',
                  transformOrigin: 'center',
                  objectFit: 'cover',
                  objectPosition: '50% 45%'
                }}
              />
            </div>
            
            <h2 className="text-2xl font-semibold 
                           text-gray-800 dark:text-white/90 mb-2
                           [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)]">
              Corrine
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onExplore}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="mt-8 px-8 py-3 
                         bg-gradient-to-r from-indigo-400/70 via-purple-400/70 to-blue-400/70
                         dark:from-cyan-500/40 dark:via-blue-500/40 dark:to-indigo-500/40
                         text-white rounded-full
                         font-medium shadow-lg transition-all duration-300
                         hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500
                         dark:hover:from-cyan-400 dark:hover:via-blue-400 dark:hover:to-indigo-400
                         hover:shadow-xl backdrop-blur-sm"
            >
              Start Exploring
            </motion.button>
          </div>

          {/* 右侧部分 */}
          <div className="w-1/2 bg-gradient-to-br 
                          from-white/70 via-white/80 to-white/70
                          dark:from-gray-950/30 dark:via-cyan-950/20 dark:to-blue-950/30 
                          p-8 flex flex-col items-center justify-center backdrop-blur-md">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold 
                         bg-gradient-to-r from-gray-800 to-gray-600
                         dark:from-cyan-200 dark:to-blue-200
                         bg-clip-text text-transparent
                         [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]
                         text-center"
            >
              Welcome to My World
            </motion.h1>
            
            {/* 这里放置 sticker */}
            <div className="mt-6">
              {/* 添加您的 sticker 图片 */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome; 