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
            <div style={{
                fontSize: "24px",
                color: "#292b2c",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
            }} >
                {props.title}
            </div>
            <p style={paragrapheStyle}>{props.para1} </p>
            <p>{props.para2} </p>
        </Container>
    )
}

export default Card
