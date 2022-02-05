// Router in react 
// 11 of the essential features of react-router V6
// 1.install : npm i react-router-dom --save
// Route configuration:
// main.jsx : import {BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root'))
    // App.js / routes.js/config.js
// 2.import : import { Routes , Route } from 'react-router-dom'
// 3.import : import { Home , About , Contact } from './pages'
{/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes> */}

// NavBar.jsx
// 4.import : import { Link } from 'react-router-dom'
<li>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
</li>

// redirection in react router 
// 5.import : import { Redirect } from 'react-router-dom'
{/* <Redirect to="/about" /> */}
{(admin? <Redirect to="/admin" /> : <Redirect to="/contact" />)}



