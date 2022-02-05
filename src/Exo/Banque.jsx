import React from 'react';
import Service from './Service';
import { useState } from 'react';

function Banque() {
    const [sold, setSold] = useState(200);


    const Depot = (value) => {
        setSold(sold + parseInt(value));
    }
    const Retrait = (value) => {
        setSold(sold - value);
    }

    return <div>
        <h1>Banque</h1>
        <p> {sold} </p>
        <div className="services">
            <Service Service="Retrait" sendValue={Retrait} />
            <Service Service="Depot" sendValue={Depot} />
            <Service Service="Recherche telephonique" sendValue={Retrait} />
        </div>
    </div>;
}

export default Banque;
