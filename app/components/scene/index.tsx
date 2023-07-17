/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scene from './scene'

const SceneRoot = () => {
  const [antialias, setAntialias] = useState(true)

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAntialias(false)
    }
  }, [])

  return (
    <div className='absolute h-screen w-screen overflow-hidden'>
      <Canvas
        dpr={[1, 1]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: true,
          logarithmicDepthBuffer: true,
        }}
        linear={true}
        shadows
      >
        <Scene />
      </Canvas>
      <Loader />
    </div>
  )
}

export default SceneRoot
