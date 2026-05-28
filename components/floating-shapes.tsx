'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useMemo } from 'react'
import * as THREE from 'three'

function RotatingTorus() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.3
      mesh.current.rotation.y = clock.getElapsedTime() * 0.5
      mesh.current.position.z = Math.sin(clock.getElapsedTime() * 0.4) * 2
    }
  })

  return (
    <mesh ref={mesh} position={[3, -2, -8]}>
      <torusGeometry args={[1.5, 0.4, 16, 100]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.4}
        wireframe={true}
      />
    </mesh>
  )
}

function FloatingBox() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005
      mesh.current.rotation.y += 0.008
      mesh.current.position.y += Math.sin(clock.getElapsedTime() * 0.6) * 0.005
    }
  })

  return (
    <mesh ref={mesh} position={[-3, 2, -12]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  )
}

function Particles() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.children.forEach((child: any, index: number) => {
        child.position.x += Math.sin(clock.getElapsedTime() * 0.2 + index) * 0.005
        child.position.y += Math.cos(clock.getElapsedTime() * 0.3 + index) * 0.005
      })
    }
  })

  const particles = useMemo(() => {
    const items = []
    for (let i = 0; i < 12; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
        ] as [number, number, number],
      })
    }
    return items
  }, [])

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={0.2}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshPhongMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.2}
            opacity={0.3}
            transparent={true}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#3b82f6" />
      <RotatingTorus />
      <FloatingBox />
      <Particles />
    </>
  )
}

export function FloatingShapes() {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        <FloatingScene />
      </Suspense>
    </Canvas>
  )
}
