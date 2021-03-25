import React from 'react'
import styled from 'styled-components'

const Button = ({data}) => {
    const { text, bgStyle, borderStyle, colorStyle, fontStyle, marginStyle, width, display, fontWeight } = data

    const ButtonLink = styled.a`
        display:${({display}) => display};
        width:${({width}) => width};
        font-size:1.1rem;
        padding:18px 10px;
        border-radius:50px;
        color:${({colorStyle}) => colorStyle};
        background:${({bgStyle}) => bgStyle};
        border:${({borderStyle}) => borderStyle};
        font-family:${({fontFamily}) => fontFamily};
        font-weight:${({fontWeight}) => fontWeight};
        margin:${({marginStyle}) => marginStyle};
        cursor:pointer;
        text-align:center;
    `

    return (
        <ButtonLink href="#"
            bgStyle={bgStyle}
            borderStyle={borderStyle}
            colorStyle={colorStyle}
            fontFamily={fontStyle}
            marginStyle={marginStyle}
            width={width}
            display={display}
            fontWeight={fontWeight}
        >
            {text}
        </ButtonLink>
    )
}

export default Button