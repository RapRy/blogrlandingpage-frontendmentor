import React from 'react'
import styled from 'styled-components'

import chevronDown from '../../images/icon-arrow-dark.svg'

import SubMenu from './SubMenu'

const MainMenu = ({theme}) => {
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

    return (
        menuData.map(({main, sub}, i) => {
            return (
                <LinkLi key={i}>
                    <LinkButton overpass={theme.overpass} color={theme.colors}>
                        <span>{main}</span>
                        <img src={chevronDown} alt="chevrondown"/>
                    </LinkButton>
                    {/* <SubMenu theme={theme} sub={sub} /> */}
                </LinkLi>
            )
        })
    )
}

export default MainMenu
