import React from 'react'
import styled from 'styled-components'

import illustrationPhones from '../../images/illustration-phones.svg'
import bgPatternCircles from '../../images/bg-pattern-circles.svg'

const InfrasWrap = styled.div`
    position:relative;
    text-align:center;

    @media all and (min-width:968px){
        padding:70px 0px;
    }

    @media all and (min-width:1044px){
        margin-top:190px;
    }

    @media all and (min-width:1090px){
        margin-top:250px;
    }

    @media all and (min-width:1180px){
        margin-top:320px;
    }

    @media all and (min-width:1280px){
        padding:110px 0px;
    }

    &:after{
        z-index:1;
        position:absolute;
        top:30%;
        left:0;
        content:"";
        width:100%;
        height:80%;
        display:block;
        background:${({bg}) => bg};
        border-radius:0 80px 0 80px;

        @media all and (min-width:968px){
            top:0%;
            height:100%;
        }
    }
`

const InfrasContainer = styled.div`
    max-width:1440px;
    margin:0 auto;

    @media all and (min-width:968px){
        display:grid;
        grid-template-columns:max(600px) 1fr;
        gap:20px;
    }

    &:after{
        z-index:2;
        position:absolute;
        top:30%;
        left:0;
        content:"";
        width:100%;
        height:80%;
        display:block;
        background:url(${({bgPatternCircles}) => bgPatternCircles}) no-repeat;
        background-position:50% 160%;
        background-size:180%;
        border-radius:0 80px 0 80px;

        @media all and (min-width:968px){
            top:0;
            background-size:80%;
            background-position:-100% 90%;
            height:100%;
        }

        @media all and (min-width:1274px){
            background-position:-70% 80%;
        }
    }

    div{
        position:relative;
        z-index:3;

        img{
            @media all and (min-width:968px){
                position:absolute;
                top:-220px;
                right:0;
                max-width:100%;
            }


        }
    }
`

const InfrasArticleHeading = styled.h1`
    font-size:2.5rem;
    color:${({color}) => color};
    font-family:${({font}) => font.family};
    font-weight:${({font}) => font.weight[1]};
    margin-bottom:20px;
    text-align:center;
    padding:0 20px;

    @media all and (min-width:968px){
        font-size:2rem;
        text-align:left;
    }
`

const InfrasArticleDescription = styled.p`
    font-size:1rem;
    line-height:1.8;
    font-family:${({font}) => font.family};
    font-weight:${({font}) => font.weight[0]};
    color:${({color}) => color};
    text-align:center;
    padding:0 20px;

    @media all and (min-width:968px){
        text-align:left;
    }

    @media all and (min-width:1044px){
        margin-right:100px;
    }
`

const Infrastructure = () => {
    const theme = {
        gradientBg:{
            veryLightRed:"hsl(13, 100%, 72%)",
            lightRed:"hsl(353, 100%, 62%)"
        },
        boxShadow:"0px 0px 10px hsl(208, 49%, 24%, .2)",
        colors:{
            lightRed:"hsl(356, 100%, 66%)",
            veryLightRed:"hsl(355, 100%, 74%)",
            veryDarkBlue:"hsl(237, 17%, 21%)",
            veryDarkDesaturatedBlue: "hsl(237, 20%, 50%)",
            grayishBlue:"hsl(240, 2%, 79%)",
            bgColor:"hsl(0, 0%, 100%)",
            white:"hsl(0, 0%, 100%)"
        },
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
        <InfrasWrap bg={theme.colors.veryDarkBlue}>
            <InfrasContainer bgPatternCircles={bgPatternCircles}>
                <div>
                    <img src={illustrationPhones} alt="illustration"/>
                </div>
                <div>
                    <InfrasArticleHeading font={theme.overpass} color={theme.colors.white}>State of the Art Infrasture</InfrasArticleHeading>
                    <InfrasArticleDescription font={theme.overpass} color={theme.colors.white}>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</InfrasArticleDescription>
                </div>
            </InfrasContainer>
        </InfrasWrap>
    )
}

export default Infrastructure
