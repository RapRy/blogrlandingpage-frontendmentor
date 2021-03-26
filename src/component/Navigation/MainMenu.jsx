import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {useTransition, animated} from 'react-spring'

import chevronDown from '../../images/icon-arrow-dark.svg'

// import SubMenu from './SubMenu'

const Wrap = styled(animated.ul)`
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

const LinkLi = styled.li`
    margin-bottom:20px;
    text-align:center;

    &:last-child{margin-bottom:0;}
`

const MainMenu = ({theme, sub, main}) => {
    const [show, setShow] = useState(false)

    const trans = useTransition(show, {
        from: {opacity:0, top:"50px"},
        enter: {opacity:1, top:"80px"},
        leave: {opacity:0, top:"50px"},
        config: {mass:5, tension:500, friction:100}
    })

    const ref = useRef(null)

    useEffect(() => {
        if(ref.current != null)
            console.log(ref.current.clientHeight);
    }, [show])

    return (
            <LinkLi>
                <LinkButton overpass={theme.overpass} color={theme.colors} onClick={() => setShow(!show)}>
                    <span>{main}</span>
                    <img src={chevronDown} alt="chevrondown"/>
                </LinkButton>
                {
                    trans((style, item) => 
                    item &&
                    <Wrap style={style} ref={ref}>
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
                }
                {/* <SubMenu theme={theme} sub={sub} show={show} /> */}
            </LinkLi>
    )
}

export default MainMenu
