import Overlay from 'components/Overlay'

const Test = () => {
    return (
        <>
            <Overlay
                content={{
                    heading: ['02', 'Testing database'],
                    subheading: 'Planetscale is a test',
                    desc: 'Inspiration and ideas Fundamentals Finding models Preparing them for the web Displaying and changing models Animation fundamentals Effects and making things look good Performance and time to load',
                }}
                prev={'/'}
                next={'/test'}
            />
        </>
    )
}

export default Test
