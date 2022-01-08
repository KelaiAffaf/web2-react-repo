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


function Card() {
    const paragrapheStyle={
        fontSize:'1.5em',
        textAlign:'center'
    }
    return (
        <Container>
            <h3 style={{fontSize:"24px" , color:"blue"}} >Declarative</h3>
            <p style={paragrapheStyle}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            <p>Declarative views make your code more predictable and easier to debug.</p>
        </Container>
    )
}

export default Card
