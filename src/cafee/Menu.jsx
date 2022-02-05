import React from 'react';

function Menu({ menu }) {
    return <div>
        {menu.map((item,index) => <div key={index}>
            <h1>{item.title}</h1>
        </div>)}

    </div>;
}

export default Menu;
