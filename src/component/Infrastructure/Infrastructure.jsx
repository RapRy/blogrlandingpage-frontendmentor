import React from 'react'
import styled from 'styled-components'

import illustrationPhones from '../../images/illustration-phones.svg'
import bgPatternCircles from '../../images/bg-pattern-circles.svg'

const InfrasWrap = styled.div`
    position:relative;

    &:after{
        z-index:1;
        position:absolute;
        top:30%;
        left:0;
        content:"";
        width:100%;
        height:100%;
        display:block;
        background:#000;
        border-radius:0 80px 0 80px
    }
`

const InfrasContainer = styled.div`
    position:relative;

    &:after{
        z-index:2;
        position:absolute;
        top:30%;
        left:0;
        content:"";
        width:100%;
        height:100%;
        display:block;
        background:url(${({bgPatternCircles}) => bgPatternCircles}) no-repeat 50% 140%;
        background-size:180%;
        border-radius:0 80px 0 80px
    }

    div{
        position:relative;
        z-index:3;
    }
`

const InfrasArticleHeading = styled.h1`

`

const InfrasArticleDescription = styled.p`
    
`

const Infrastructure = () => {
    return (
        <InfrasWrap>
            <InfrasContainer bgPatternCircles={bgPatternCircles}>
                <div>
                    <img src={illustrationPhones} alt="illustration"/>
                </div>
                <div>
                    <InfrasArticleHeading>State of the Art Infrasture</InfrasArticleHeading>
                    <InfrasArticleDescription>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</InfrasArticleDescription>
                </div>
            </InfrasContainer>
        </InfrasWrap>
    )
}

export default Infrastructure
