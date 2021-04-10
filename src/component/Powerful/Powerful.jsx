import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import illustrationLaptopMobile from '../../images/illustration-laptop-mobile.svg'
import illustrationLaptopDesktop from '../../images/illustration-laptop-desktop.svg'

import { Article } from '../subcomp'

const PowerfulWrap = styled.div`
    margin:120px auto 100px;
    padding:0 20px;
    text-align:center;
    max-width:1440px;
    position:relative;

    @media all and (min-width:968px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        gap:40px;
        margin:150px auto;
    }

    @media all and (min-width:1010px){
        margin:150px auto 200px;
    }

    @media all and (min-width:1060px){
        margin:150px auto 250px;
    }

    @media all and (min-width:1131px){
        margin:190px auto 300px;
    }

    @media all and (min-width:1300px){
        margin:190px auto 350px;
    }

    @media all and (min-width:1392px){
        margin:200px auto 370px;
    }


    img{
        @media all and (min-width:968px){
            position:absolute;
            top:-100px;
            left:-190px;
            max-width:70%;
        }

        @media all and (min-width:1220px){
            max-width:62%;
            left:-150px;
        }
    }

    div{
        @media all and (min-width:968px){
            grid-column:2 / 3;
            margin-top:6%;
            margin-right:30px;
        }
    }
`

const Powerful = () => {
    const articles = [
        {heading:"Free, open, simple", description:"Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."},
        {heading:"Powerful tooling", description:"Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."}
    ]

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
            <PowerfulWrap>
                <img src={mediaQuer === 0 ? illustrationLaptopMobile : illustrationLaptopDesktop} alt="illustration"/>
                <div>
                    {
                        articles.map(({heading, description}, i) => <Article key={i} heading={heading} description={description} />)
                    }
                </div>
            </PowerfulWrap>
        </div>
    )
}

export default Powerful
