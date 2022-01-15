import React from 'react'
import Card from '../Card/Card.jsx'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content:space-around;`


function Section() {
    return (
        <Container>
            <Card title="Declarative" 
            para1="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." 
            para2="Declarative views make your code more predictable and easier to debug."
             />
            <Card title="Component-Based"
            para1="Build encapsulated components that manage their own state, then compose them to make complex UIs."
            para2="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
            />
            <Card title="Learn Once, Write Anywhere"
            para1="We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."
            para2="React can also render on the server using Node and power mobile apps using React Native."
            />
        </Container>
    )
}

export default Section
