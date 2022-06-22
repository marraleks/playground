import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { shaderMaterial, useAspect, Html } from '@react-three/drei'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import vertex from './shaders/vertex.vert'
import fragment from './shaders/fragment.frag'
import { lerp } from 'three/src/math/MathUtils'
import Overlay from '../Overlay'
import { FadeIn } from 'components/Overlay/styles'

function Startup() {
    // Zoom camera out on start-up, once all assets have been loaded
    useFrame(({ camera }) => {
        camera.zoom = lerp(camera.zoom, 0.5, 0.05)
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
        768, // Pixel-height
        1 // Optional scaling factor
    )

    return (
        <mesh
            scale={scale}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <planeBufferGeometry args={[0.8, 0.8, 20, 20]} />
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

const WaveImage = () => {
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
        <>
            <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
                <Wave />
                <Startup />
            </Canvas>
            <Overlay
                content={{
                    heading: ['01', 'Wave Shader'],
                    subheading: 'React Three Fiber & Shaders',
                    desc: 'Inspiration and ideas Fundamentals Finding models Preparing them for the web Displaying and changing models Animation fundamentals Effects and making things look good Performance and time to load',
                }}
                next={'/test'}
            />
            <FadeIn />
        </>
    )
}

export default WaveImage
