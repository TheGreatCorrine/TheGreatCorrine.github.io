// temporarily remove react to pass build
// import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
// import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ui/ThemeToggle'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-white/90 hover:text-white cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 