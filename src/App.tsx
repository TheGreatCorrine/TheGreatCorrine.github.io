import React from 'react'
import { useState } from 'react'
import Background from './components/Background'
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="absolute inset-0">
        <Background />
      </div>
      <div className="relative z-10">
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="container mx-auto px-4">
          <Hero />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App 