import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.svg'

const FooterWrap = styled.div`
    background:${({bg}) => bg};
    border-radius:0 80px 0 80px;
`

const FooterContainer = styled.div`

`

const FooterMenu = styled.div`

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
