import React from 'react';
import {useState} from 'react';

function Client({sendValue}) {
    const [value, setValue] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault();
       
        sendValue(value); // state hoisting
    }
  return <div>
      <div className="demande">
          <h1>Client</h1>
          <form onSubmit={handleSubmit} >
                <input 
                type="text" 
                placeholder="Entrez votre demande"
                onChange={(e) => setValue(e.target.value)}
                />
                <input type="submit" value="Envoyer" />
          </form>
      </div>
      
  </div>;
}

export default Client;
