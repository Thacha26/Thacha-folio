import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import './ConstellationsBg.css'

const options = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 90,
      density: { enable: true, area: 900 },
    },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.3, max: 0.9 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: { value: { min: 1, max: 2.5 } },
    links: {
      enable: true,
      distance: 140,
      color: '#ffffff',
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.35,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: { enable: true },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.5 } },
    },
  },
}

function ConstellationsBg() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles id="constellations-bg" className="constellations-bg" options={options} />
    </ParticlesProvider>
  )
}

export default ConstellationsBg
