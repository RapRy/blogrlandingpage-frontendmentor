import React from 'react'
import styled from 'styled-components'

import imgBg from '../images/bg-pattern-intro.svg'
import logo from '../images/logo.svg'

import Navigation from './Navigation/Navigation'
import Landingpage from './LandingPage/LandingPage'


const Wrapper = styled.section`
    padding:20px 20px;
    background:linear-gradient(to top, ${({gradient}) => gradient.lightRed }, ${({gradient}) => gradient.veryLightRed });
    border-radius:0 0 0 80px;
    position:relative;
`

const PatternBg = styled.section`
    position:absolute;
    top:0;
    right:0;
    overflow:hidden;
    z-index:1;
    width:100%;
    height:100%;
    border-radius:0 0 0 80px;

    & > img{
        max-width:300%;
        position:relative;
        bottom:20%;
        right:30%;

        @media all and (min-width:500px){
            max-width:200%;
        }

        @media all and (min-width:700px){
            max-width:150%;
            bottom:50%;
            right:10%;
        }

        @media all and (min-width:1192px){
            max-width:150%;
            bottom:90%;
            right:10%;
        }

        @media all and (min-width:1440px){
            max-width:150%;
            bottom:120%;
            right:10%;
        }
    }
`

const Container = styled.section`
    position:relative;
    z-index:3;
    display:grid;
    grid-template-columns:auto 1fr;
    gap:20px;
    align-items:center;
    max-width:1440px;
    margin:0 auto;

    @media all and (min-width:820px){
        gap:30px;
    }
`

const Header = () => {
    const theme = {
        gradientBg:{
            veryLightRed:"hsl(13, 100%, 72%)",
            lightRed:"hsl(353, 100%, 62%)"
        },
        // color:{
        //     lightRed:"hsl(356, 100%, 66%)",
        //     veryLightRed:"hsl(355, 100%, 74%)",
        //     veryDarkBlue:"hsl(208, 49%, 24%)",
            
        // },
        overpass:{
            family:"'Overpass', sans-serif",
            weight:[300, 600]
        },
        ubuntu:{
            family:"'Ubuntu', sans-serif",
            weight:[400, 500, 700]
        }
    }

    return (
        <Wrapper gradient={theme.gradientBg}>
            <PatternBg>
                <img src={imgBg} alt=""/>
            </PatternBg>
            <Container>
                <img src={logo} alt=""/>
                <Navigation />
            </Container>
            <Landingpage />
        </Wrapper>
    )
}

export default Header
