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
                gap: '1.3rem',
            }}
        >
            <h1 style={{ fontSize: '4rem' }}>Loading</h1>
            <div className="col-3">
                <div className="snippet" data-title=".dot-elastic">
                    <div className="stage">
                        <div className="dot-elastic"></div>
                    </div>
                </div>
            </div>
        </div>
    ),
})

const Home: NextPage = () => {
    return <WaveImage />
}

export default Home
