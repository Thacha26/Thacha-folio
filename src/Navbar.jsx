import { useEffect, useState } from 'react'
import './Navbar.css'
import gatitoImg from './assets/cat-solid-full.svg'

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'light' || attr === 'dark') return attr
  }
  return 'dark'
}

function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="navbar-brand">
          Frida Thais
          <span className="navbar-cat">
            <img src={gatitoImg} alt="Icono de gatito" className="navbar-cat-icon" />
          </span>
        </span>

        <nav className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#proyects">Projects</a>
            </li>
            <li>
              <a href="#social">Connect</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? '☀️' : '☾'}
        </button>
      </div>
    </header>
  )
}

export default Navbar
