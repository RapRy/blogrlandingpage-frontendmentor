import React from 'react'
import styled from 'styled-components'

const SubMenu = ({theme, sub}) => {
    const Wrap = styled.ul`
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
        <Wrap>
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

export default SubMenu
