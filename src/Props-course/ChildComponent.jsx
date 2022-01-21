import PropTypes from 'prop-types';
import './Props.css'
const ChildComponent = ({Age,name}) => {
    // destructuring 

    const handelName = () => {
        alert (name)
    }
    return (
        <div className="child-container">
            <p>{Age}</p>
            <p>{name}</p>
            <button  onClick={handelName}>Click here </button>

        </div>
    )

};

ChildComponent.defaultProps = {
    name: "Afaf",
    Age: 11
}

ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
   
}
export default ChildComponent;