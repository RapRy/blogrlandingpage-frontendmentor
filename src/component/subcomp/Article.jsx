import React from 'react'
import styled from 'styled-components'

const ArtWrapper = styled.div`
    margin-bottom:30px;

    &:last-child{
        margin-bottom:0;
    }

    h2{
        font-size:1.8rem;
        color:${({color}) => color.veryDarkBlue};
        font-family:${({font}) => font.family};
        font-weight:${({font}) => font.weight[1]};
        margin-bottom:20px;
        text-align:center;
    }

    p{
        font-size:1rem;
        line-height:1.6;
        font-family:${({font}) => font.family};
        font-weight:${({font}) => font.weight[0]};
        color:${({color}) => color.veryDarkGrayBlue};
        text-align:center;
    }
`

const Article = ({heading, description}) => {
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
            veryDarkGrayBlue:"hsl(207, 13%, 34%)"
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
        <ArtWrapper font={theme.overpass} color={theme.colors}>
            <h2>{heading}</h2>
            <p>{description}</p>
        </ArtWrapper>
    )
}

export default Article
