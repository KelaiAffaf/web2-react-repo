// <!-- How to write css in React Application  -->
// 1- Inline css : in JSX elemnts : <div style={{color:red}} > Hello</div>


// 2- Object css : in JSX elemnts : <div style={title} > Hello</div>
// const title={
//     color:'red',
//     fontSize:'30px'
// }


// 3- Class css : in JSX elemnts : <div className="title"> Hello</div>
// import './css/style.css'



// 4- CSS Modules : in JSX elemnts : <div className={styles.title}> Hello</div>
// import styles from './css/style.module.css'



// 5- styled component : in JSX elemnts : 
// import styled from 'styled-components' ==> npm i styled-components
// const Title=styled.div`
//     color:red;
//     font-size:30px;
// `
//  <div>Hello</div> ==> <Title> Hello</Title>



// 6- CSS Framworks : 
// BOOTSTRAP in react ==> react-bootstrap, reactStrap , mdbreact , mdbootstrap ,
//  tailwindcss for react ==> tailwindcss, tailwindcss-react-components