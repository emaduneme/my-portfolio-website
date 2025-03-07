'use client'

import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 shadow-md"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5 text-primary" title="Switch to light mode" />
      ) : (
        <FaMoon className="w-5 h-5 text-primary" title="Switch to dark mode" />
      )}
    </button>
  )
} 