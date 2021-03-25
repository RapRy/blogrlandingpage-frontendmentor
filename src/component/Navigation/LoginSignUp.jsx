import React from 'react'
import styled from 'styled-components'

import { Button } from '../subcomp/'

const LoginSignUp = ({theme}) => {
    const btnData = [
        {
            text:"Login", 
            borderStyle:"none", 
            bgStyle:"transparent", 
            colorStyle:theme.colors.veryDarkBlue, 
            marginStyle:"0 auto 10px", 
            fontStyle:theme.ubuntu.family, 
            width:"160px", 
            display:"block",
            fontWeight:theme.ubuntu.weight[1]
        },
        {
            text:"Sign Up", 
            borderStyle:"none", 
            bgStyle:`linear-gradient(to right, ${theme.gradientBg.veryLightRed}, ${theme.gradientBg.lightRed})`, 
            colorStyle:theme.colors.white, 
            marginStyle:"0 auto", 
            fontStyle:theme.ubuntu.family, 
            width:"160px", 
            display:"block",
            fontWeight:theme.ubuntu.weight[1]
        }
    ]

    const Wrap = styled.div`
        margin-top:30px;
        border-top:1px solid #f1f1f1;
        padding:20px 0 0;
        text-align:center;
    `

    return (
        <Wrap ubuntu={theme.ubuntu} color={theme.colors}>
            {btnData.map((data, i) => <Button key={i} data={data} />)}
        </Wrap>
    )
}

export default LoginSignUp
