import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    padding:20px;
    `
const titre = styled.p`
    font-size: 1.5em;
    text-align: center;
    color:grey;
    `


function Card(props) {
   
    return (
        <Container>
            <h3 style={{fontSize:"24px" , color:"blue"}} >{props.title}</h3>
            <p style={paragrapheStyle}>{props.para1} </p>
            <p>{props.para2} </p>
        </Container>
    )
}

export default Card
