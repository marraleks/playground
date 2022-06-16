import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { shaderMaterial, useAspect } from '@react-three/drei'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import vertex from './shaders/vertex.vert'
import fragment from './shaders/fragment.frag'
import { lerp } from 'three/src/math/MathUtils'

function Startup() {
    // Zoom camera out on start-up, once all assets have been loaded
    useFrame(({ camera }) => {
        camera.zoom = lerp(camera.zoom, 0.8, 0.05)
        camera.updateProjectionMatrix()
    })
    return null
}

const Wave = () => {
    const [hover, setHover] = useState(false)
    const ref = useRef<any>(null)

    const [image] = useLoader(THREE.TextureLoader, ['/bilde1.jpg'])

    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))

    const scale = useAspect(
        1400, // Pixel-width
        788, // Pixel-height
        1 // Optional scaling factor
    )

    return (
        <mesh
            scale={scale}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <planeBufferGeometry args={[0.5, 0.5, 20, 20]} />
            {/* @ts-ignore */}
            <waveShaderMaterial
                side={THREE.DoubleSide}
                uColor={'hotpink'}
                ref={ref}
                uTexture={image}
                uHover={hover}
                toneMapped={false}
            />
        </mesh>
    )
}

const ShaderImage = () => {
    const WaveShaderMaterial = shaderMaterial(
        {
            uTime: 0,
            uColor: new THREE.Color(0.0, 0.0, 0.0),
            uTexture: new THREE.Texture(),
            uHover: false,
        },
        vertex,
        fragment
    )

    extend({ WaveShaderMaterial })

    return (
        <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
            <Suspense fallback={null}>
                <Wave />
                <Startup />
            </Suspense>
        </Canvas>
    )
}

export default ShaderImage
