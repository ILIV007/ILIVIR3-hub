import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

interface MouseState {
  x: number
  y: number
  mouseWorld: THREE.Vector3
  parallax: { x: number; y: number }
}

export function useMouseParallax(): MouseState {
  const mouseRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef({ x: 0, y: 0 })
  const [state, setState] = useState<MouseState>({
    x: 0,
    y: 0,
    mouseWorld: new THREE.Vector3(),
    parallax: { x: 0, y: 0 },
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    let rafId: number
    const animate = () => {
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.05
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.05

      const parallaxX = smoothRef.current.x * 3
      const parallaxY = smoothRef.current.y * 3

      const worldX = smoothRef.current.x * 5
      const worldY = smoothRef.current.y * 5

      setState({
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        mouseWorld: new THREE.Vector3(worldX, worldY, 0),
        parallax: { x: parallaxX, y: parallaxY },
      })

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return state
}
