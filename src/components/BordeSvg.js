import React from 'react'
const BordeSvg = () => (
    <svg>
        <filter id='wavy'>
            <feTurbulence 
                x='0'
                y='0'
                baseFrequency='0.02'
                numOctaves='5'
                seed='2'
            >
                <animate
                    attributeName='baseFrequency'
                    dur='60s'
                    values='0.02;0.05;0.02'
                    repeatCount='indefinite'
                />
            </feTurbulence>
            <feDisplacementMap
                in='SourceGraphic'
                scale='30'/>
        </filter>
    </svg>
)
export default BordeSvg