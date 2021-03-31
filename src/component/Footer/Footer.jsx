import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.svg'

const FooterWrap = styled.div`
    background:${({bg}) => bg};
    border-radius:0 80px 0 80px;
`

const FooterContainer = styled.div`
    padding:60px 20px 10px;
    text-align:center;
`

const FooterMenu = styled.div`
    margin-top:50px;
`

const Main = styled.div`
    font-family:${({font}) => font.family};
    font-size:1.3rem;
    font-weight:${({font}) => font.weight[1]};
    color:${({color}) => color};
    margin-bottom:30px;
`

const Sub = styled.ul`
    margin-bottom:50px;

    li{
        font-family:${({font}) => font.family};
        font-size:1.1rem;
        font-weight:${({font}) => font.weight[0]};
        color:${({color}) => color};
        margin-bottom:20px;

        &:last-child{
            margin-bottom:0;
        }
    }
`

const Footer = () => {
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
            white:"hsl(0, 0%, 100%)",
            veryDarkBlackBlue:"hsl(240, 10%, 16%)"
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
    
    const menuData = [
        {
            main:"Product", sub:[
                {linkName:"Overview"},
                {linkName:"Pricing"},
                {linkName:"Marketplace"},
                {linkName:"Features"},
                {linkName:"Integrations"}
            ]
        },
        {
            main:"Company", sub:[
                {linkName:"About"},
                {linkName:"Team"},
                {linkName:"Blog"},
                {linkName:"Careers"}
            ]
        },
        {
            main:"Connect", sub:[
                {linkName:"Contact"},
                {linkName:"Newsletter"},
                {linkName:"LinkedIn"}
            ]
        }
    ]

    return (
        <div>
            <FooterWrap bg={theme.colors.veryDarkBlackBlue}>
                <FooterContainer>
                    <img src={logo} alt=""/>
                    <FooterMenu>
                        {
                            menuData.map(({main, sub}, iMain) => {
                                return (
                                    <div key={iMain}>
                                        <Main font={theme.ubuntu} color={theme.colors.white}>
                                            <span>{main}</span>
                                        </Main>
                                        <Sub font={theme.ubuntu} color={theme.colors.grayishBlue}>
                                            {
                                                sub.map(({linkName}, iSub) => <li key={iSub}>{linkName}</li>)
                                            }
                                        </Sub>
                                    </div>
                                )
                            })
                        }
                    </FooterMenu>
                </FooterContainer>
            </FooterWrap>
        </div>
    )
}

export default Footer
