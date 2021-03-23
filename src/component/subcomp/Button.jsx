import React from 'react'
import styled from 'styled-components'

const Button = ({data}) => {
    const { text, bgStyle, borderStyle, colorStyle, fontStyle, marginStyle, width } = data

    const ButtonLink = styled.a`
        display:inline-block;
        width:${({width}) => width};
        font-size:1.1rem;
        padding:18px 10px;
        border-radius:50px;
        color:${({colorStyle}) => colorStyle};
        background-color:${({bgStyle}) => bgStyle};
        border:${({borderStyle}) => borderStyle};
        font-family:${({fontFamily}) => fontFamily};
        font-weight:${({fontWeight}) => fontWeight};
        margin-right:${({marginStyle}) => marginStyle};
        cursor:pointer;
    `

    return (
        <ButtonLink href="#"
            bgStyle={bgStyle}
            borderStyle={borderStyle}
            colorStyle={colorStyle}
            fontFamily={fontStyle.family}
            fontWeight={fontStyle.weight[1]}
            marginStyle={marginStyle}
            width={width}
        >
            {text}
        </ButtonLink>
    )
}

export default Button