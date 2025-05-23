// temporarily remove react to pass build
// import React from 'react'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      text: 'corrine.xiang@outlook.com',
      link: 'mailto:corrine.xiang@outlook.com',
      delay: 0.2
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      text: 'TheGreatCorrine',
      link: 'https://github.com/TheGreatCorrine',
      delay: 0.4
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 flex flex-col items-center justify-between">
      <div className="container mx-auto px-4 max-w-4xl flex-1 flex items-center justify-center">
        <div className="space-y-4 w-full">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target={contact.link.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: contact.delay,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="p-6 rounded-xl 
                           bg-gradient-to-br from-white/80 to-white/60
                           dark:from-gray-900/60 dark:to-gray-900/30
                           shadow-xl backdrop-blur-sm
                           border border-white/30 dark:border-cyan-500/10
                           hover:shadow-2xl transition-all duration-300
                           flex items-center space-x-4">
                <div className="text-blue-600 dark:text-cyan-400">
                  {contact.icon}
                </div>
                <span className="text-gray-800 dark:text-gray-200 text-lg">
                  {contact.text}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div 
        className="w-full mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-4">Under Construction</h2>
        <p className="text-gray-600 dark:text-gray-300">This section is currently being built. Please check back later!</p>
      </motion.div>
    </section>
  )
}

export default Contact 