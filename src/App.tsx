import { useState, useEffect } from 'react'
import Welcome from './components/Welcome'
import Background from './components/Background'
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  
  useEffect(() => {
    // 开发时可以注释掉这段代码来始终显示欢迎页面
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowWelcome(false);
    }
  }, []);

  const handleExplore = () => {
    setShowWelcome(false);
    localStorage.setItem('hasVisited', 'true');
  };

  // 开发时可以添加一个重置按钮
  const handleReset = () => {
    localStorage.removeItem('hasVisited');
    setShowWelcome(true);
  };

  if (showWelcome) {
    return <Welcome onExplore={handleExplore} />;
  }

  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="absolute inset-0">
        <Background />
      </div>
      <div className="relative z-10">
        <Navbar />
        {/* 开发时可以显示重置按钮 */}
        <button 
          onClick={handleReset}
          className="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-md z-50"
        >
          Reset Welcome
        </button>
        <main className="container mx-auto px-4">
          <Hero />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App; 