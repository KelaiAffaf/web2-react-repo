// what do we mean by fetch data ?
// fetch ? to get data from somewhere ? Api , back end server , database , etc
// Api : Application Programming Interface ? middelware btwn to softwars
// jsonPlaceholder : http://hp-api.herokuapp.com/api/characters

// Fetch (url)==> promises Or Async Await


import React, { useState , useEffect } from 'react';

function FetchData() {

    const [data, setData] = useState([]);
    //  using promises:
    // useEffect(() => {
    //   fetch('http://hp-api.herokuapp.com/api/characters')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.log(error));
    // }, []);


    // using async await:
    useEffect(() => {
        async function fetchDataAsync() {
            const response = await fetch('http://hp-api.herokuapp.com/api/characters');
            const data = await response.json();
            setData(data);
        }
        fetchDataAsync();
    }, []);
    
  return <div>
      <h1> Harry Potter Carachters </h1>
      <div>
          {data.map(character => (
              <div key={character.id}>
                    <h2>{character.name}</h2>
                    <p>{character.actor} </p>
                </div>
            ))}
      </div>
  </div>;
}

export default FetchData;
