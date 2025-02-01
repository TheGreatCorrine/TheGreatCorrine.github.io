import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // 检查系统主题偏好
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(darkModePreference.matches)

    // 从 localStorage 恢复用户的主题选择
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <FiMoon className="w-5 h-5 text-yellow-500" />
        ) : (
          <FiSun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle 