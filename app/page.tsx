'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('00:00:00')
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const formattedHours = hours % 12 || 12
      setCurrentTime(`${formattedHours}:${minutes}:${seconds} ${ampm}`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Welcome Section */}
        <div className="bg-card rounded-lg p-4 col-span-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Hi, I'm <span className="text-primary">Emmanuel Maduneme</span></h1>
          <p className="text-base text-gray-300">A Ph.D student in Media Psychology and UX Researcher from Eugene, Oregon</p>
        </div>
        
        {/* Resume Section */}
        <div className="bg-card rounded-lg p-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">Resume</h2>
          <a 
            href="https://drive.google.com/file/d/1AAW90y5jh3jaUHhOF0Ykyba4v2dY43c1/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            View Resume
          </a>
        </div>
        
        {/* About Me Section */}
        <div className="bg-card rounded-lg p-4 col-span-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <h2 className="text-xl font-bold mb-3">About me</h2>
          <p className="mb-3 text-sm">I have expertise in mixed-methods research. Currently pursuing a Ph.D. in Journalism and Communication while working as a Snap AR Scholar. And I like talking to people!!</p>
          
          <h3 className="text-lg mb-2">Skills</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Experimental Designs</li>
            <li>Surveys</li>
            <li>Interviews</li>
            <li>Usability Testing</li>
            <li>Inferential Statistics</li>
            <li>General Linear Models</li>
          </ul>
        </div>

        {/* Side Section Container */}
        <div className="flex flex-col justify-start space-y-4">
          {/* Current Time Section */}
          <div className="bg-card rounded-lg p-3 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <h2 className="text-sm font-medium mb-1">Current Time</h2>
            <p className="text-xl font-bold">{currentTime}</p>
          </div>
          
          {/* Connect Section */}
          <div className="bg-card rounded-lg p-3 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <h2 className="text-base font-bold mb-2">Let's Connect</h2>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.linkedin.com/in/emmanuel-maduneme" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125">
                <FaLinkedin />
              </a>
              <a href="mailto:culatemerald@gmail.com" className="text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      
        {/* Featured Projects Section */}
        <div className="col-span-3">
          <h2 className="text-2xl font-bold mb-3">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <Link href="/projects/project1" className="block">
              <div className="bg-card rounded-lg p-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg h-full">
                <h3 className="text-lg font-bold mb-2">Usability Testing for AR Experiences</h3>
                <p className="text-primary">View Project &rarr;</p>
              </div>
            </Link>
            
            {/* Project 2 */}
            <Link href="/projects/project2" className="block">
              <div className="bg-card rounded-lg p-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg h-full">
                <h3 className="text-lg font-bold mb-2">Experimental A/B Test for Solutions Journalism Approaches</h3>
                <p className="text-primary">View Project &rarr;</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 