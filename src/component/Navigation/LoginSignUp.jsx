import React from 'react'
import styled from 'styled-components'

import { Button } from '../subcomp/'

const Wrap = styled.div`
    margin-top:30px;
    border-top:1px solid #f1f1f1;
    padding:20px 0 0;
    text-align:center;

    @media all and (min-width:850px){
        justify-self:end;
        border-top:none;
        margin-top:0;
        tex-align:right;
        padding:0;
    }
`

const LoginSignUp = ({theme, mediaQuer}) => {
    const btnData = [
        {
            text:"Login", 
            borderStyle:"none", 
            bgStyle:"transparent", 
            colorStyle:mediaQuer === 0 ? theme.colors.veryDarkBlue : theme.colors.white, 
            colorHover:"transparent",
            colorHoverText:theme.colors.veryDarkBlue,
            marginStyle:mediaQuer === 0 ? "0 auto 10px" : "0", 
            fontStyle:theme.ubuntu.family, 
            width:mediaQuer === 0 ? "160px" : "100px", 
            display:mediaQuer === 0 ? "block" : "inline-block",
            fontWeight:theme.ubuntu.weight[1]
        },
        {
            text:"Sign Up", 
            borderStyle:"none", 
            bgStyle:`linear-gradient(to right, ${theme.gradientBg.veryLightRed}, ${theme.gradientBg.lightRed})`, 
            colorStyle:theme.colors.white, 
            colorHover:theme.colors.veryLightRed,
            colorHoverText:theme.colors.white,
            marginStyle:mediaQuer === 0 ? "0 auto" : "0", 
            fontStyle:theme.ubuntu.family, 
            width:"160px", 
            display:mediaQuer === 0 ? "block" : "inline-block",
            fontWeight:theme.ubuntu.weight[1]
        }
    ]

    return (
        <Wrap ubuntu={theme.ubuntu} color={theme.colors}>
            {btnData.map((data, i) => <Button key={i} data={data} btnId={i} />)}
        </Wrap>
    )
}

export default LoginSignUp
