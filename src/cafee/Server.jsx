import React from 'react';

function Server({ menu, value, show }) {
    return <div>
        <div className="serveur">
            <h1>Serveur</h1>
            <div>

                {
                    (show) && (menu.includes(value) ?
                        <p>{`voila votre demande ${value}`} </p> :
                        <p>{`votre demande ${value} n'est pas disponible`} </p>)
                }


            </div>
        </div>
    </div>;
}

export default Server;
