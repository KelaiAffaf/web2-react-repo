import React from 'react'
import Card from '../Card/Card.jsx'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content:space-around;`
function Section() {
    return (
        <Container>
            <Card />
            <Card />
            <Card />

        </Container>
    )
}

export default Section
