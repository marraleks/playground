import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const WaveImage = dynamic(() => import('../components/waveImage'), {
    ssr: false,
    loading: () => (
        <div
            style={{
                height: '100vh',
                width: ' 100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1 style={{ fontSize: '4rem' }}>Loading...</h1>
        </div>
    ),
})

const Home: NextPage = () => {
    return <WaveImage />
}

export default Home
