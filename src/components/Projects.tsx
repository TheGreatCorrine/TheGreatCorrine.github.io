import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-8">
          Projects
        </h2>
        {/* 项目内容 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 项目卡片将在这里 */}
        </div>
      </div>
    </section>
  )
}

export default Projects 