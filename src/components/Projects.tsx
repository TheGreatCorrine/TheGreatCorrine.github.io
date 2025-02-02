// temporarily remove react to pass build
// import React from 'react'

import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    }
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.1,
      staggerDirection: 1,
    }
  }
}

const cardVariants: Variants = {
  hidden: (index: number) => ({ 
    opacity: 0,
    scale: 0.6,
    x: 0,
    y: 30,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: index * 0.1
    }
  }),
  show: (index: number) => ({
    opacity: 1,
    scale: 1,
    x: index === 0 ? '-15%' : index === 2 ? '15%' : '0%',
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      opacity: { 
        duration: 0.4,
        ease: "easeOut" 
      },
      scale: { 
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      },
      x: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.1
      }
    }
  })
}

const ProjectCard = ({ title, description, index }: { title: string, description: string, index: number }) => (
  <div className="w-full md:w-[calc(45%-1rem)] lg:w-[calc(30%-1rem)] flex justify-center">
    <motion.div
      custom={index}
      variants={cardVariants}
      className="w-full p-6 rounded-xl backdrop-blur-md
               bg-white/20 dark:bg-gray-800/30 
               border border-gray-200/20 dark:border-gray-700/30
               shadow-lg hover:shadow-xl transition-all
               hover:scale-105 cursor-pointer
               origin-center"
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  </div>
)

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "这是项目1的描述，后续可以替换为实际内容"
    },
    {
      title: "Project 2",
      description: "这是项目2的描述，后续可以替换为实际内容"
    },
    {
      title: "Project 3",
      description: "这是项目3的描述，后续可以替换为实际内容"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-8 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          Projects
        </h2>
        
        <motion.div 
          className="flex flex-wrap gap-6 justify-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ 
            margin: "-100px",
            amount: 0.4
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 