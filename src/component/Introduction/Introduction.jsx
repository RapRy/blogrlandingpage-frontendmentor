import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import illustrationEditorMobile from '../../images/illustration-editor-mobile.svg'
import illustrationEditorDesktop from '../../images/illustration-editor-desktop.svg'

import { Article } from '../subcomp'


const IntroWrapper = styled.div`
    margin:100px auto;
    max-width:1440px;
    padding:0 20px;
    position:relative;

    @media all and (min-width:968px){
        margin:150px auto;
    }

    h1{
        text-align:center;
        font-size:2rem;
        font-family:${({font}) => font.family};
        font-weight:${({font}) => font.weight[1]};
        color:${({color}) => color.veryDarkBlue};
    }
`

const SecondaryWrapper = styled.div`
    margin-top:40px;
    text-align:center;

    @media all and (min-width:968px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        gap:40px;
        margin-top:60px;

        img{
            grid-column:2 / 3;
            position:absolute;
            top:-100px;
            right:-210px;
            max-width:70%;
        }

        div{
            grid-coumn:1 / 2;
            grid-row:1;
            margin-left:30px;
        }
    }

    img{
        margin-bottom:40px;

        @media all and (min-width:1220px){
            max-width:62%;
        }

        @media all and (min-width:1370px){
            max-width:55%;
        }
    }
`

const Introduction = () => {
    const articles = [
        {heading:"Introducing an extensible editor", description:"Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provie wasy ways to add functionality or change the looks of a blog."},
        {heading:"Robust content management", description:"Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control."}
    ]

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

    const [mediaQuer, setMediaQuer] = useState(0)

    useEffect(() => {
        if(window.matchMedia('(min-width:968px)').matches){
            setMediaQuer(968)
        }

        window.addEventListener('resize', () => {
            if(window.matchMedia('(min-width:968px)').matches){
                setMediaQuer(968)
            }else{
                setMediaQuer(0)
            }
        })
    }, [mediaQuer])

    return (
        <div>
            <IntroWrapper font={theme.overpass} color={theme.colors}>
                <h1>Designed for the future</h1>
                <SecondaryWrapper>
                    <img src={mediaQuer === 0 ? illustrationEditorMobile : illustrationEditorDesktop} alt="illustration"/>
                    <div>
                        {
                            articles.map(({heading, description}, i) => <Article key={i} heading={heading} description={description} />)
                        }
                    </div>
                </SecondaryWrapper>
            </IntroWrapper>
        </div>
    )
}

export default Introduction
