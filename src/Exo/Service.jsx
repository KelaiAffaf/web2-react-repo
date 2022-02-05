//  input 
import React from 'react';
import { useState } from 'react';
function Service({ Service, sendValue }) {
    const [value, setValue] = useState(0);
    const handleSubmit =(e) => {
        e.preventDefault();
        sendValue(value); // state hoisting
    }

    return <div>
        <h1>{Service}</h1>
        <form  onSubmit={handleSubmit} >
            <input
                type="number"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <input
                type="submit"
                value="Sumbit"
            />
        </form>
    </div>;
}

export default Service;
