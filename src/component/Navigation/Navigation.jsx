import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated, useSprings } from 'react-spring'


import MainMenu from './MainMenu'
import LoginSignUp from './LoginSignUp'

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

const MenuWrap = styled(animated.div)`
    position:absolute;
    top:80px;
    left:0;
    width:100%;
    padding:30px 20px;
    border-radius:5px;
    background:${({bgcolor}) => bgcolor};
    box-shadow:${({boxshadow}) => boxshadow};
`

const Navigation = () => {

    const items = ["", "", ""]

    const [show, setShow] = useState(false);

    const t = useTransition(show, {
        from: {opacity:0, top:"50px"},
        enter: {opacity:1, top:"80px"},
        leave: {opacity:0, top:"50px"},
        config: {mass:5, tension:500, friction:100}
        
    })

    const springs = useSprings(3, items.map(item => ({opacity: 1})))

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
            white:"hsl(0, 0%, 100%)"
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

    return (
        <div style={{justifySelf:"end"}}>
             <MenuBurger bgColor={theme.colors.bgColor} onClick={() => setShow(!show)}>
                 {
                     springs.map(props => <animated.span style={props} />)
                 }
                 {/* <span></span>
                 <span></span>
                 <span></span> */}
             </MenuBurger>
            {
                t((style, item) => 
                    item &&
                        <MenuWrap style={style} bgcolor={theme.colors.bgColor} boxshadow={theme.boxShadow}>
                            <div>
                                <ul>
                                    {
                                        menuData.map(({main, sub}, i) => {
                                            return <MainMenu theme={theme} main={main} sub={sub} key={i} />
                                        })
                                    }
                                </ul>
                            </div>
                            <LoginSignUp theme={theme} />
                        </MenuWrap>
                    )
            }
             {/* <MenuWrap style={props} bgcolor={theme.colors.bgColor} boxshadow={theme.boxShadow}>
                 <div>
                     <ul>
                         <MainMenu theme={theme} />
                     </ul>
                 </div>
                 <LoginSignUp theme={theme} />
             </MenuWrap> */}
        </div>
    )
}

export default Navigation
