import React, { type ReactNode } from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import ThemeToggle from '../ui/ThemeToggle'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'

interface NavLinkProps {
  href: string
  children: ReactNode
}

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white dark:bg-dark-surface dark:backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-dark-text dark:glow-text">
              Corrine
            </a>
          </div>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#about">About me</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#blogs">Blogs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="https://github.com/TheGreatCorrine"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-primary-light dark:text-dark-text dark:hover:text-dark-primary transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white"
            >
              {/* 汉堡菜单图标 */}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
            <MobileNavLink href="#about">About me</MobileNavLink>
            <MobileNavLink href="#projects">Projects</MobileNavLink>
            <MobileNavLink href="#blogs">Blogs</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

// 导航链接组件
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    to={href.replace('#', '')}
    spy={true}
    smooth={true}
    offset={-70}
    duration={800}
    className="cursor-pointer px-3 py-2 rounded-md text-gray-700 
    dark:text-dark-text dark:hover:text-dark-primary 
    dark:hover:glow-text transition-all"
  >
    {children}
  </Link>
)

// 移动端导航链接组件
const MobileNavLink = ({ href, children }: NavLinkProps) => (
  <Link
    to={href.replace('#', '')}
    spy={true}
    smooth={true}
    offset={-70}
    duration={800}
    className="block cursor-pointer px-3 py-2 rounded-md text-gray-700 
    dark:text-gray-200 hover:text-primary-light 
    dark:hover:text-primary-dark transition-colors"
  >
    {children}
  </Link>
)

export default Navbar 