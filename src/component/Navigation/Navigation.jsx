import React, { useState } from 'react'
import styled from 'styled-components'

import chevronDown from '../../images/icon-arrow-dark.svg'

export const LoginSignUp = () => {
    return (
        <div>
            <button>test</button>
            <button></button>
        </div>
    )
}

const Navigation = () => {
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
            bgColor:"hsl(0, 0%, 100%)"
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
                {linkName:"Sub Nav 1"},
                {linkName:"Sub Nav 2"}
            ]
        },
        {
            main:"Company", sub:[
                {linkName:"Sub Nav 1"},
                {linkName:"Sub Nav 2"},
                {linkName:"Sub Nav 3"},
                {linkName:"Sub Nav 4"}
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

    const MenuBurger = styled.div`
        position:relative;
        width:45px;
        height:23px;
        cursor:pointer;

        span{
            width:100%;
            height:3px;
            position:absolute;
            background:${({bgColor}) => bgColor};
            display:block;

            &:nth-child(1){
                top:0;
                right:0;
            }

            &:nth-child(2){
                top:10px;
                right:0;
            }

            &:nth-child(3){
                top:20px;
                right:0;
            }
        }
    `

    const MenuWrap = styled.div`
        position:absolute;
        top:80px;
        left:0;
        width:100%;
        padding:30px 20px;
        border-radius:5px;
        background:${({bgColor}) => bgColor};
        box-shadow:${({boxShadow}) => boxShadow};
    `

    const LinkLi = styled.li`
        margin-bottom:20px;
        text-align:center;

        &:last-child{margin-bottom:0;}
    `

    const LinkButton = styled.button`
        margin-bottom:20px;
        background:transparent;
        cursor:pointer;

        &:last-child{margin-bottom:0;}

        span{
            font-size:1.2rem;
            font-family:${({overpass}) => overpass.family};
            font-weight:${({overpass}) => overpass.weight[1]};
            margin-right:7px;
            color:${({color}) => color.veryDarkBlue};
        }

        img{margin-bottom:3px;}
    `

    const SubMenu = styled.ul`
        padding:20px;
        background:#f1f1f1;
        border-radius:5px;
    `

    const SubLinkButton = styled.button`
        font-size:1rem;
        font-family:${({overpass}) => overpass.family};
        font-weight:${({overpass}) => overpass.weight[1]};
        color:${({color}) => color.veryDarkDesaturatedBlue};
    `

    return (
        <div style={{justifySelf:"end"}}>
             <MenuBurger bgColor={theme.colors.bgColor}>
                 <span></span>
                 <span></span>
                 <span></span>
             </MenuBurger>

             <MenuWrap bgColor={theme.colors.bgColor} boxShadow={theme.boxShadow}>
                 <div>
                     <ul>
                         {
                             menuData.map(({main, sub}) => {
                                 return (
                                    <LinkLi>
                                        <LinkButton overpass={theme.overpass} color={theme.colors}>
                                            <span>{main}</span>
                                            <img src={chevronDown} alt="chevrondown"/>
                                        </LinkButton>
                                        <SubMenu>
                                            {
                                                sub.map(({linkName}) => {
                                                    return (
                                                        <LinkLi>
                                                            <SubLinkButton overpass={theme.overpass} color={theme.colors}>
                                                                {linkName}
                                                            </SubLinkButton>
                                                        </LinkLi>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    </LinkLi>   
                                )
                             })
                         }
                         
                     </ul>
                 </div>
                 <LoginSignUp />
             </MenuWrap>
        </div>
    )
}

export default Navigation
