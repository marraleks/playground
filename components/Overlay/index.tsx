import { Container, TopLeft, BottomLeft, BottomRight, Darkmode } from './styles'
import { Arrow } from 'components/Icons'
import { useTheme } from 'next-themes'

export default function Overlay() {
    const { theme, setTheme } = useTheme()

    return (
        <Container>
            <TopLeft>
                <h1>
                    01
                    <br />
                    Wave Shader
                </h1>
                <p>React Three Fiber & Shaders</p>
            </TopLeft>
            <BottomLeft>
                <Arrow color="black" direction="left" />
                <Arrow color="black" direction="right" />
            </BottomLeft>
            <BottomRight>
                Inspiration and ideas
                <br />
                Fundamentals
                <br />
                Finding models
                <br />
                Preparing them for the web
                <br />
                Displaying and changing models
                <br />
                Animation fundamentals
                <br />
                Effects and making things look good
                <br />
                Performance and time to load
                <br />
            </BottomRight>
            <Darkmode
                onClick={() => {
                    console.log('test')

                    theme == 'light'
                        ? setTheme('dark')
                        : theme == 'dark' && setTheme('light')
                }}
            />
        </Container>
    )
}
