import { useEffect, useRef } from 'react'
import './ConstellationsBg.css'

const PARTICLE_COUNT = 90
const MAX_LINK_DISTANCE = 140
const MAX_GRAB_DISTANCE = 160
const PARTICLE_SPEED = 0.25

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * PARTICLE_SPEED,
    vy: (Math.random() - 0.5) * PARTICLE_SPEED,
    radius: Math.random() * 1.5 + 1,
    phase: Math.random() * Math.PI * 2,
  }))
}

function ConstellationsBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: null, y: null }
    let particles = []
    let width = 0
    let height = 0
    let frameId

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = createParticles(width, height)
    }

    function onPointerMove(event) {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    function onPointerLeave() {
      mouse.x = null
      mouse.y = null
    }

    function step(time) {
      ctx.clearRect(0, 0, width, height)

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        const flicker = 0.5 + 0.4 * Math.sin(time / 900 + particle.phase)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flicker.toFixed(2)})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < MAX_LINK_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${(0.25 * (1 - dist / MAX_LINK_DISTANCE)).toFixed(2)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        if (mouse.x !== null) {
          const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y)
          if (dist < MAX_GRAB_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${(0.5 * (1 - dist / MAX_GRAB_DISTANCE)).toFixed(2)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      frameId = requestAnimationFrame(step)
    }

    resize()
    frameId = requestAnimationFrame(step)

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellations-bg" aria-hidden="true" />
}

export default ConstellationsBg
