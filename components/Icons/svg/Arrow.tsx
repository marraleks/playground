interface ArrowProps {
    color: string
    direction: 'left' | 'right' | 'up' | 'down'
    size: number
    disabled?: boolean
}

function Icon({ color, direction, size, disabled }: ArrowProps) {
    return (
        <svg
            style={{
                width: size,
                height: size,
                transform: `rotate(${
                    direction === 'left'
                        ? '90'
                        : direction === 'right'
                        ? '-90'
                        : direction === 'up'
                        ? '180'
                        : '0'
                }deg)`,
            }}
            fill="none"
            viewBox="0 0 23 27"
        >
            <path
                fill={!disabled ? color : '#ccc'}
                d="M19.377 13.522c-3.208-2.486-1.957 1.206-5.757 7.378l-1.58 2.66v-3.4c0-3.149-.151-17.438 2.757-18.822v-.185H8.203v.185C11.13 2.703 10.96 16.993 10.96 20.16v3.408L9.38 20.9c-3.8-6.172-2.55-9.864-5.757-7.378L.548 15.72l.104.152c3.03-.74 5.709 3.085 7.84 5.664l2.782 4.019.226.329.226-.33 2.782-4.018c2.131-2.59 4.81-6.412 7.84-5.664l.104-.152-3.075-2.198z"
            ></path>
        </svg>
    )
}

export default Icon
