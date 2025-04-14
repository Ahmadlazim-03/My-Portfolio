"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px] z-10" />

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 -left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -70, 70, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full bg-chart-1/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-3/4 left-1/3 w-80 h-80 rounded-full bg-chart-2/20 blur-3xl"
      />
    </div>
  )
}

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Get computed styles to match theme colors
    const computedStyle = getComputedStyle(document.documentElement)
    const primaryColor = computedStyle.getPropertyValue("--primary").trim()
    const chartColor1 = computedStyle.getPropertyValue("--chart-1").trim()
    const chartColor2 = computedStyle.getPropertyValue("--chart-2").trim()
    const chartColor4 = computedStyle.getPropertyValue("--chart-4").trim()

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25

        // Use colors that match the theme
        const colors = [
          `oklch(0.488 0.243 264.376 / 0.5)`, // Primary
          `oklch(0.488 0.243 264.376 / 0.3)`, // Primary lighter
          `oklch(0.646 0.222 41.116 / 0.3)`, // Chart 1
          `oklch(0.6 0.118 184.704 / 0.2)`, // Chart 2
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (canvas && (this.x > canvas.width || this.x < 0)) {
          this.speedX = -this.speedX
        }

        if (canvas && (this.y > canvas.height || this.y < 0)) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines if they're close enough
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `oklch(0.488 0.243 264.376 / ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20" />
}

export default function AnimatedBackground() {
  return (
    <>
      <AnimatedGradient />
      <FloatingParticles />
    </>
  )
}
