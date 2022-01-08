import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Section from './components/Section/Section'
function App() {


  return (
    <div className="App">
      <Header />
      <Main/>
      <Section/>
    </div>
  )
}

export default App
