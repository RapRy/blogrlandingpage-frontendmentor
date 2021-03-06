import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useTransition, animated, to, useSpring } from 'react-spring'

import chevronDownDark from '../../images/icon-arrow-dark.svg'
import chevronDownLight from '../../images/icon-arrow-light.svg'

// import SubMenu from './SubMenu'

const Wrap = styled(animated.ul)`
    padding:20px;
    background:#f1f1f1;
    border-radius:5px;

    @media all and (min-width:850px){
        top:40px;
        left:-20px;
        padding:30px 40px 20px 20px;
        box-shadow:${({boxShadow}) => boxShadow}
    }
`

const SubLinkButton = styled.button`
    font-size:1rem;
    font-family:${({overpass}) => overpass.family};
    font-weight:${({overpass}) => overpass.weight[1]};
    color:${({color}) => color.veryDarkDesaturatedBlue};
    cursor:pointer;

    @media all and (min-width:850px){
        margin-bottom:10px;
        font-size:.95rem;

        &:hover{
            color:#000;
        }
    }
`

const LinkButton = styled.button`
    margin-bottom:20px;
    background:transparent;
    cursor:pointer;

    &:last-child{margin-bottom:0;}

    @media all and (min-width:850px){
        margin-bottom:0px;
    }

    span{
        font-size:1.2rem;
        font-family:${({overpass}) => overpass.family};
        font-weight:${({overpass}) => overpass.weight[1]};
        margin-right:7px;
        color:${({color, mediaQuer}) => mediaQuer === 0 ? color.veryDarkBlue : color.white};

        @media all and (min-width:850px){
            font-size:1rem;

            &:hover{
                border-bottom:2px solid ${({color}) => color.white};
            }
        }
    }

    img{
        margin-bottom:3px;
        transform-origin:center;
    }
`

const LinkLi = styled.li`
    margin-bottom:20px;
    text-align:center;
    position:relative;

    &:last-child{margin-bottom:0;}

    @media all and (min-width:850px){
        text-align:left;
        margin-bottom:0px;
        ${({isInlineBlock}) => isInlineBlock && "display:inline-block; margin-right:30px;"}
        ${({isInlineBlock}) => isInlineBlock && "&:last-child{margin-right:0;"}
`

const MainMenu = ({theme, sub, main, mediaQuer}) => {

    const [show, setShow] = useState(false)
    const [isInlineBlock, setInlineBlock] = useState(true)

    const trans = useTransition(show, {
        from: {x:0},
        enter: {x:1},
        leave: {x:0},
        unique:true,
        config: {mass:5, tension:500, friction:100}
    })

    const spring = useSpring({transform:show ? "rotate(180deg)" : "rotate(0deg)"})

    useEffect(() => {
        mediaQuer === 0 && setInlineBlock(!isInlineBlock)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
            <LinkLi isInlineBlock={isInlineBlock}>
                <LinkButton mediaQuer={mediaQuer} overpass={theme.overpass} color={theme.colors} onClick={() => setShow(!show)}>
                    <span>{main}</span>
                    <animated.img src={mediaQuer === 0 ? chevronDownDark : chevronDownLight} alt="chevrondown" style={spring}/>
                </LinkButton>
                {
                    trans((style, item) => 
                    item &&
                        <Wrap boxShadow={theme.boxShadow} style={{
                            transform:to([style.x], v => `scaleY(${v})`),
                            transformOrigin: "top",
                            overflow: "hidden",
                            position: mediaQuer === 0 ? "relative" : "absolute"
                        }}>
                            <animated.div style={{
                                            transformOrigin:"top",
                                            transform: to([style.x], v => `scaleY(${1 / v})`)
                                        }}>
                            {
                                sub.map(({linkName}, i) => {
                                    return (
                                        <LinkLi mediaQuer={mediaQuer} key={i}>
                                            <SubLinkButton overpass={theme.overpass} color={theme.colors}>
                                                {linkName}
                                            </SubLinkButton>
                                        </LinkLi>
                                    )
                                })
                            }
                            </animated.div>
                        </Wrap>
                    )
                }
                {/* <SubMenu theme={theme} sub={sub} show={show} /> */}
            </LinkLi>
    )
}

export default MainMenu
