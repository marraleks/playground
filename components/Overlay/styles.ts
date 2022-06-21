import styled, { keyframes } from 'styled-components'

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

export const FadeIn = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: white;
    animation: ${fade} 2s normal forwards ease-in-out;
`

export const Container = styled.div`
    font-size: 16px;
    & h1 {
        padding: 0;
        margin: 0 0 0.05em 0;
        font-size: min(7vw, 14em);
        color: black;
    }
`

export const TopLeft = styled.div`
    position: absolute;
    top: 4vw;
    left: 4vw;
`

export const BottomLeft = styled.div`
    position: absolute;
    bottom: 4vw;
    left: 4vw;
    width: 30ch;
    max-width: 40%;
`

export const BottomRight = styled.div`
    position: absolute;
    bottom: 4vw;
    right: 4vw;
    width: 35ch;
    max-width: 40%;
    text-align: right;
`

export const Darkmode = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 4vw;
    right: 4vw;
    background: black;
    width: 50px;
    height: 50px;
`

export const LeftMiddle = styled.div`
    position: absolute;
    bottom: 50%;
    right: 4vw;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: -0.01em;
    font-size: 12px;
    transform: rotate(90deg) translate3d(50%, 0, 0);
    transform-origin: 100% 50%;
`
