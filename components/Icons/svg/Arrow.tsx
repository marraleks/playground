interface ArrowProps {
    color: string
    direction: 'left' | 'right' | 'up' | 'down'
}

function Icon({ color, direction }: ArrowProps) {
    return (
        <svg
            style={{
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
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            fill="none"
            viewBox="0 0 37 37"
        >
            <path
                fill={color}
                d="M26.377 18.522c-3.208-2.486-1.957 1.206-5.757 7.378l-1.58 2.66v-3.4c0-3.149-.151-17.438 2.757-18.822v-.185h-6.594v.185C18.13 7.703 17.96 21.993 17.96 25.16v3.408L16.38 25.9c-3.8-6.172-2.55-9.864-5.757-7.378L7.548 20.72l.104.152c3.03-.74 5.709 3.085 7.84 5.664l2.782 4.019.226.329.226-.33 2.782-4.018c2.131-2.59 4.81-6.412 7.84-5.664l.104-.152-3.075-2.198z"
            ></path>
        </svg>
    )
}

export default Icon
