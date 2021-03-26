import React from 'react'
import styled from 'styled-components'
import {useTransition, animated} from 'react-spring'

const SubMenu = ({theme, sub, show}) => {

    const trans = useTransition(show, {
        from: {opacity:0, top:"50px"},
        enter: {opacity:1, top:"80px"},
        leave: {opacity:0, top:"50px"},
        config: {mass:5, tension:500, friction:100}
    })

    const Wrap = styled(animated.ul)`
        padding:20px;
        background:#f1f1f1;
        border-radius:5px;
    `

    const LinkLi = styled.li`
        margin-bottom:20px;
        text-align:center;

        &:last-child{margin-bottom:0;}
    `

    const SubLinkButton = styled.button`
        font-size:1rem;
        font-family:${({overpass}) => overpass.family};
        font-weight:${({overpass}) => overpass.weight[1]};
        color:${({color}) => color.veryDarkDesaturatedBlue};
    `

    return (
        trans((style, item) => 
            item &&
            <Wrap style={style}>
                {
                    sub.map(({linkName}, i) => {
                        return (
                            <LinkLi key={i}>
                                <SubLinkButton overpass={theme.overpass} color={theme.colors}>
                                    {linkName}
                                </SubLinkButton>
                            </LinkLi>
                        )
                    })
                }
            </Wrap>
        )
    )
}

export default SubMenu
