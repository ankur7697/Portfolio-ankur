'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useRef, useMemo } from 'react'
import * as THREE from 'three'

function FloatingOrb({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y += Math.sin(clock.getElapsedTime() * 0.5) * 0.002
      mesh.current.rotation.x += 0.001
      mesh.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[0.5, 4]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.8}
        wireframe={true}
      />
    </mesh>
  )
}

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.1
      mesh.current.rotation.y = clock.getElapsedTime() * 0.15
      mesh.current.position.z = Math.sin(clock.getElapsedTime() * 0.5) * 1
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, -5]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        color="#1a3a52"
        emissive="#00d9ff"
        emissiveIntensity={0.6}
        shininess={100}
      />
    </mesh>
  )
}

function CloudParticles() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.children.forEach((child: any, index: number) => {
        child.position.x += Math.sin(clock.getElapsedTime() * 0.3 + index) * 0.01
        child.position.y += Math.cos(clock.getElapsedTime() * 0.2 + index) * 0.01
        child.rotation.z += 0.001
      })
    }
  })

  const particles = useMemo(() => {
    const items = []
    for (let i = 0; i < 8; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
      })
    }
    return items
  }, [])

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={Math.random() * 0.5 + 0.3}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshPhongMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.3}
            opacity={0.4}
            transparent={true}
            wireframe={true}
          />
        </mesh>
      ))}
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, 0, 5]} intensity={0.6} />
    </>
  )
}

function Scene() {
  const { camera } = useThree()

  return (
    <>
      <Lights />
      <FloatingOrb position={[-3, 2, -8]} />
      <FloatingOrb position={[3, -2, -6]} />
      <FloatingOrb position={[0, 0, -10]} />
      <AnimatedSphere />
      <CloudParticles />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [5, 2, 8], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* Content Overlay */}
      <div className="relative z-10 text-center space-y-6 px-6 max-w-2xl">
        <div className="inline-block">
          <span className="text-accent text-sm font-mono tracking-wider">$ full-stack engineer</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance">
          <span className="text-accent">Build</span> Amazing Products
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full-stack developer crafting beautiful frontends, powerful backends, and scalable cloud infrastructure. Let&apos;s create something extraordinary.
        </p>

        <div className="flex justify-center gap-4 pt-8">
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors">
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-accent font-mono">3+</p>
            <p className="text-sm text-muted-foreground">Years</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-accent font-mono">100+</p>
            <p className="text-sm text-muted-foreground">APIs</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-accent font-mono">10+</p>
            <p className="text-sm text-muted-foreground">Tech Stack</p>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability - much lighter to show 3D */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/5 to-background/20 z-0"></div>
    </div>
  )
}
