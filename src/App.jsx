import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center" className="hero-container">
        <div className="hero-info">
          <h1>Hola, soy Frida</h1>
          <p className="subtitle">Estudiante de Ciencias de la Computación | UNAM</p>
          <p className="description">
            Actualmente pasando a 5to semestre. Me apasiona el desarrollo backend, 
            los sistemas eficientes y la integración práctica de Inteligencia Artificial. 
            Enfocada en construir soluciones reales y ganar experiencia en la industria.
          </p>
        </div>

        
        <div className="hero-avatar-container">
          <div className="avatar-circle">
            
            <img src={Thacha-folio/Fotos/perfil-portafolio.jpeg} alt="Mi foto de perfil" className="avatar-img" />
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Búscame en mis redes o escríbeme por correo</p>
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
                  <use href="/icons.svg#social-icon"></use>
                </svg>
                Instagram
              </a>
            </li>

            <li>
              <a href="mailto:espinosathais50@gmail.com">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Correo
              </a>
            </li>
         
            <li>
              <a href='https://www.linkedin.com/in/frida-thais-espinosa-romero?utm_source=share_via&utm_content=profile&utm_medium=member_android' target="_blank" rel="noopener noreferrer"> 
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
               linkedin
              </a>
            </li>
          </ul>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
