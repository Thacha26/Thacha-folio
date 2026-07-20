import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import perfilImg from './assets/foto-perfil.png'
import Navbar from './Navbar'
import ConstellationsBg from './components/ConstellationsBg'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConstellationsBg />

      <div className="page-content">
      <Navbar />

      <section className="hero-container">
        <div className="profile-container">
          <div className="avatar-container">
            <img src={perfilImg} alt="Mi foto de perfil" className="avatar-img" />
          </div>
          
          <div className="profile-info">
            <h1>Frida Thais Espinosa Romero</h1>
            <p className="headline">Estudiante de Ciencias de la Computación en la UNAM</p>
            <p className="description">
             Tengo 20 años y una gata gorda que me pega
            </p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <Projects />

      <div className="ticks"></div>

        <section id="social">
          <div id="docs">
            <h2>Miau</h2>
            <p>Miau miau miau!</p>
          </div>

          <ul>
            <li>
              <a href="https://github.com/Thacha26" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/thacha_1is/" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#instagram-icon"></use>
                </svg>
                Instagram
              </a>
            </li>

            <li>
              <a href="mailto:espinosathais50@gmail.com">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#gmail-icon"></use>
                </svg>
                Correo
              </a>
            </li>

            <li>
              <a href='https://www.linkedin.com/in/frida-thais-espinosa-romero?utm_source=share_via&utm_content=profile&utm_medium=member_android' target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                linkedin
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App
