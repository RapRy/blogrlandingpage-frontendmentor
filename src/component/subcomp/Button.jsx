import React from 'react'
import styled from 'styled-components'

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
    transition:all 300ms;

    &:focus,
    &:hover{
        background:${({colorHover}) => colorHover};
        color:${({colorHoverText}) => colorHoverText};
    }

    &:active{
        background:${({colorHover}) => colorHover};
        color:${({colorHoverText}) => colorHoverText};
    }
`

const Button = ({data}) => {
    const { text, bgStyle, borderStyle, colorStyle, fontStyle, marginStyle, width, display, fontWeight, colorHover, colorHoverText } = data

    return (
        <ButtonLink href="#"
            bgStyle={bgStyle}
            borderStyle={borderStyle}
            colorStyle={colorStyle}
            colorHover={colorHover}
            colorHoverText={colorHoverText}
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