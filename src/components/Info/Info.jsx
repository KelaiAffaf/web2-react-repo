// create a function component
// ES5 OR es6
import './Info.css'

function Info() {
    const title ={
        color: 'red',
        fontSize: '20px'
    }
    return (
        <div>
            {/* JSX */}
            <p className="title" style={title}>
                A Simple Component
            </p>
            <p className="content-1">
                React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that
                is passed into the component can be accessed by render() via this.props.
            </p>
            <p className="content-2">
            <span className="sub-title">JSX is optional and not required to use React.</span> Try the Babel 
            REPL to see the raw JavaScript code produced by the JSX compilation step.
            </p>
        </div>
    )
}
export default Info