// temporarily remove react to pass build
// import React from 'react'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-4">Under Construction</h2>
        <p className="text-gray-600 dark:text-gray-300">This section is currently being built. Please check back later!</p>
      </motion.div>
    </section>
  )
}

export default Contact 