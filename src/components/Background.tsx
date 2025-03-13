import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Meteor = () => {
  const controls = useAnimation()
  const meteors = useRef(Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 60}%`,
    duration: Math.random() * 3 + 1,
    delay: Math.random() * 5
  })))

  useEffect(() => {
    controls.start((i) => ({
      opacity: [0, 1, 0],
      left: `${parseInt(meteors.current[i].left) + 40}%`,
      top: `${parseInt(meteors.current[i].top) + 60}%`,
      transition: {
        duration: meteors.current[i].duration,
        repeat: Infinity,
        delay: meteors.current[i].delay,
        ease: "linear"
      }
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {meteors.current.map((meteor, i) => (
        <motion.div
          key={meteor.id}
          custom={i}
          animate={controls}
          initial={{
            opacity: 0,
            top: meteor.top,
            left: meteor.left,
            rotate: '45deg'
          }}
          className="absolute h-0.5 w-20 bg-gradient-to-l from-white via-white to-transparent"
        />
      ))}
    </div>
  )
}

const StarField = () => {
  // 生成更多星星，包括一些大的星星
  const smallStars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }))

  const bigStars = Array.from({ length: 15 }, (_, i) => ({
    id: i + 80,
    size: Math.random() * 3 + 2.5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2
  }))

  const stars = [...smallStars, ...bigStars]

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <div key={star.id} className="absolute" style={{ left: star.left, top: star.top }}>
          {/* 最内层亮点 */}
          <motion.div
            className="absolute rounded-full bg-white/80"
            style={{
              width: star.size * 0.5,
              height: star.size * 0.5,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(0.5px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay
            }}
          />
          
          {/* 内层光晕 */}
          <motion.div
            className="absolute rounded-full bg-white/70"
            style={{
              width: star.size,
              height: star.size,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(0.8px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay
            }}
          />
          
          {/* 外层光晕 保持不变 */}
          <motion.div
            className="absolute rounded-full bg-white/20"
            style={{
              width: star.size * 2,
              height: star.size * 2,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay
            }}
          />
        </div>
      ))}
    </div>
  )
}

// 跟随鼠标星轨
const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <motion.div
        className="fixed bg-gradient-to-r from-white via-blue-300 to-purple-400 rounded-full"
        style={{
          width: 15,
          height: 15,
          left: mousePosition.x,
          top: mousePosition.y,
          filter: 'blur(2px)',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(148, 163, 184, 0.6)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

const Background = () => {
  const controls = useAnimation()
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    // 监听主题变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'))
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    controls.start({
      background: isDark ? [
        // 深色模式渐变 - 调整为与Welcome卡片相匹配的颜色
        'linear-gradient(to bottom right, rgba(3, 7, 18, 0.8), rgba(8, 47, 73, 0.7), rgba(17, 24, 39, 0.8))',
        'linear-gradient(to bottom right, rgba(8, 47, 73, 0.8), rgba(12, 74, 110, 0.7), rgba(3, 7, 18, 0.8))',
        'linear-gradient(to bottom right, rgba(12, 74, 110, 0.7), rgba(8, 47, 73, 0.8), rgba(17, 24, 39, 0.8))',
        'linear-gradient(to bottom right, rgba(3, 7, 18, 0.8), rgba(8, 47, 73, 0.7), rgba(17, 24, 39, 0.8))',
      ] : [
        // 亮色模式渐变保持不变
        'linear-gradient(to bottom right, rgba(255, 240, 245, 0.9), rgba(230, 230, 250, 0.9), rgba(176, 196, 222, 0.9))',
        'linear-gradient(to bottom right, rgba(230, 230, 250, 0.9), rgba(176, 196, 222, 0.9), rgba(173, 216, 230, 0.9))',
        'linear-gradient(to bottom right, rgba(176, 196, 222, 0.9), rgba(173, 216, 230, 0.9), rgba(230, 230, 250, 0.9))',
        'linear-gradient(to bottom right, rgba(255, 240, 245, 0.9), rgba(230, 230, 250, 0.9), rgba(176, 196, 222, 0.9))',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    })
  }, [isDark])

  return (
    <div className="fixed inset-0 min-h-screen w-full overflow-hidden">
      {/* 动态渐变背景 - 更新深色模式颜色 */}
      <motion.div 
        animate={controls}
        className="fixed inset-0 bg-gradient-to-br from-pink-100/90 via-purple-100/90 to-blue-100/90 
                   dark:from-gray-950/80 dark:via-cyan-950/30 dark:to-blue-950/50"
      />
      
      {/* 保留原有的所有动效 */}
      <StarField />
      <Meteor />
      <MouseTrail />
      
      {/* 静态光晕 - 调整颜色 */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 dark:bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* 网格效果 */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30" />
    </div>
  )
}

export default Background 