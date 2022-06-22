import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styled, { keyframes } from 'styled-components'
import { useTheme } from 'next-themes'

const dotElasticBefore = keyframes`
   0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1, 1.5);
    }
    50% {
        transform: scale(1, 0.67);
    }
    75% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 1);
    }
`

const dotElastic = keyframes`
      0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1, 1.5);
    }
    75% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 1);
    }
`

const dotElasticAfter = keyframes`
   0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1, 0.67);
    }
    75% {
        transform: scale(1, 1.5);
    }
    100% {
        transform: scale(1, 1);
    }
`

const Loader = styled.div<{ theme: string }>`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    background: white;

    h1 {
        font-size: 4rem;
        color: black;
    }

    .dots {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: black;
        animation: ${dotElastic} 1s infinite linear;
        margin-top: 2rem;

        &:after,
        &:before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 0;
        }

        &:after {
            left: -15px;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: black;
            animation: ${dotElasticBefore} 1s infinite linear;
        }
        &:before {
            left: 15px;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: black;
            animation: ${dotElasticAfter} 1s infinite linear;
        }
    }
`

const Home: NextPage = () => {
    const WaveImage = dynamic(() => import('../components/waveImage'), {
        ssr: false,
        loading: () => (
            <Loader>
                <h1>Loading</h1>
                <div className="dots" />
            </Loader>
        ),
    })

    return <WaveImage />
}

export default Home
