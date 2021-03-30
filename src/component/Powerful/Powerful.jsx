import React from 'react'
import styled from 'styled-components'

import illustrationLaptopMobile from '../../images/illustration-laptop-mobile.svg'

import { Article } from '../subcomp'

const PowerfulWrap = styled.div`
    margin:120px 0 100px;
    padding:0 20px;
`

const Powerful = () => {
    const articles = [
        {heading:"Free, open, simple", description:"Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."},
        {heading:"Powerful tooling", description:"Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."}
    ]

    return (
        <div>
            <PowerfulWrap>
                <img src={illustrationLaptopMobile} alt="illustration"/>
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
