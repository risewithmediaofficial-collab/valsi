import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useRef, useMemo } from "react"
import { useScroll } from "framer-motion"

function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  const ref = useRef(0)

  useFrame(() => {
    ref.current = scrollYProgress.get()
  })

  return ref
}

function Seed({ progress }) {
  const ref = useRef()

  useFrame(() => {
    const p = progress.current
    const scale = 1 + p * 1.5
    ref.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.25, 64, 64]} />
      <meshStandardMaterial
        color="#D6B46B"
        emissive="#D6B46B"
        emissiveIntensity={1}
      />
    </mesh>
  )
}

function Network({ progress }) {
  const nodes = useMemo(() => {
    return Array.from({ length: 60 }, () => [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
    ])
  }, [])

  const lines = nodes.map((node, index) => [
    node,
    nodes[(index + 1) % nodes.length],
  ])

  const group = useRef()

  useFrame(() => {
    const p = progress.current
    group.current.scale.setScalar(p * 2)
    group.current.rotation.y += 0.001
  })

  return (
    <group ref={group}>
      {nodes.map((pos, index) => (
        <mesh key={index} position={pos}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial
            color="#D6B46B"
            emissive="#D6B46B"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}

      {lines.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="#D6B46B"
          opacity={0.2}
          transparent
        />
      ))}
    </group>
  )
}

function Scene() {
  const progress = useScrollProgress()
  const light = useRef()

  useFrame(() => {
    const p = progress.current
    light.current.intensity = 0.5 + p * 1.5
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight ref={light} position={[2, 2, 2]} />

      <Float speed={1} rotationIntensity={0.2}>
        <Seed progress={progress} />
      </Float>

      <Network progress={progress} />

      <EffectComposer>
        <Bloom intensity={0.5} />
      </EffectComposer>
    </>
  )
}

export default function HeroScroll3D() {
  return (
    <div className="hero-scroll">
      <div className="hero-sticky">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
        </Canvas>

        <div className="hero-content">
          <h1>Grow Intelligence. Sustain Life.</h1>
          <p>Where knowledge meets nature</p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  )
}
