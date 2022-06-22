import { Container, TopLeft, BottomLeft, BottomRight, Darkmode } from './styles'
import { Arrow } from 'components/Icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface OverlayProps {
    prev?: string
    next?: string
    content: { heading: string[]; subheading: string; desc: string }
}

export default function Overlay({ prev, next, content }: OverlayProps) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Container>
            <TopLeft>
                <h1>
                    {content.heading[0]}
                    <br />
                    {content.heading[1]}
                </h1>
                <p>{content.subheading}</p>
            </TopLeft>
            <BottomLeft>
                {prev ? (
                    <Link href={prev}>
                        <a>
                            <Arrow color="black" direction="left" size={45} />
                        </a>
                    </Link>
                ) : (
                    <Arrow disabled color="black" direction="left" size={45} />
                )}
                {next ? (
                    <Link href={next}>
                        <a>
                            <Arrow color="black" direction="right" size={45} />
                        </a>
                    </Link>
                ) : (
                    <Arrow disabled color="black" direction="right" size={45} />
                )}
            </BottomLeft>
            <BottomRight>{content.desc}</BottomRight>
            <Darkmode
                onClick={() => {
                    theme == 'light'
                        ? setTheme('dark')
                        : theme == 'dark' && setTheme('light')
                }}
            />
        </Container>
    )
}
