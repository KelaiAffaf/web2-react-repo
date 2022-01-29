// what do we mean by fetch data ?
// fetch ? to get data from somewhere ? Api , back end server , database , etc
// Api : Application Programming Interface ? middelware btwn to softwars
// jsonPlaceholder : http://hp-api.herokuapp.com/api/characters

// using Axios : 


import React, { useState , useEffect } from 'react';
import axios from 'axios'
function AxiosData() {

    const [data, setData] = useState([]);
    //  using promises:
    // useEffect(() => {
    //     axios.get('http://hp-api.herokuapp.com/api/characters')
    //     .then(response => response.data)
    //     .then(data => setData(data))
    //     .catch(error => console.log(error));
    // }, []);

    // using async await:
    useEffect(() => {
        async function fetchDataAsync() {
            const response = await axios.get('http://hp-api.herokuapp.com/api/characters');
            setData(response.data);
        }
        fetchDataAsync();
    }, []);
  
  return <div>
      <h1> Harry Potter Carachters </h1>
      <div>
          {data.map((character,index) => (
              <div key={index}>
                    <h2>{character.name}</h2>
                    <p>{character.actor} </p>    
                </div>
            ))}
      </div>
  </div>;
}

export default AxiosData;
