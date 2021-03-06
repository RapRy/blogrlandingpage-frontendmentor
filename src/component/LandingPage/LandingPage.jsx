import React from 'react'
import styled from 'styled-components'

import { Button } from '../subcomp'

const Wrapper = styled.div`
    margin:150px 0;
    text-align:center;
    position:relative;
    z-index:2;

    h1{
        font-family:${({overpass}) => overpass.family};
        font-weight:${({overpass}) => overpass.weight[1]};
        font-size:2.6rem;
        color:${({textColor}) => textColor.white};
        margin-bottom:30px;

        @media all and (min-width:968px){
            font-size:3.2rem;
        }
    }

    p{
        font-family:${({overpass}) => overpass.family};
        font-weight:${({overpass}) => overpass.weight[0]};
        font-size:1.3rem;
        color:${({textColor}) => textColor.white};
        margin-bottom:50px;

        @media all and (min-width:968px){
            font-size:1.4rem;
        }
    }
`

const LandingPage = () => {
    const theme = {
        overpass:{
            family:"'Overpass', sans-serif",
            weight:[300, 600]
        },
        ubuntu:{
            family:"'Ubuntu', sans-serif",
            weight:[400, 500, 700]
        },
        colors:{
            lightRed:"hsl(356, 100%, 66%)",
            white:"hsl(0, 0%, 100%)",
            veryLightRed:"hsl(355, 100%, 74%)"
        }
    }

    const btnData = [
        {
            text:"Start for Free",
            borderStyle:"none", 
            bgStyle:theme.colors.white, 
            colorStyle:theme.colors.lightRed, 
            colorHover:theme.colors.veryLightRed,
            colorHoverText:theme.colors.white,
            marginStyle:"0 10px 0 0", 
            fontStyle:theme.ubuntu.family, 
            width:"160px", 
            display:"inline-block",
            fontWeight:theme.ubuntu.weight[1]
        },
        {
            text:"Learn More", 
            borderStyle:`1px solid ${theme.colors.white}`, 
            bgStyle:"transparent", 
            colorStyle:theme.colors.white, 
            colorHover:theme.colors.white,
            colorHoverText:theme.colors.lightRed,
            marginStyle:"0", 
            fontStyle:theme.ubuntu.family,  
            width:"160px", 
            display:"inline-block",
            fontWeight:theme.ubuntu.weight[1]
        }
    ]

    return (
        <Wrapper overpass={theme.overpass} textColor={theme.colors}>
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div>
                {btnData.map((data, i) => <Button key={i} data={data} />)}
            </div>
        </Wrapper>
    )
}

export default LandingPage
