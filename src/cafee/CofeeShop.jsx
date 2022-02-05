import React from 'react';
import Client from './Client';
import Menu from './Menu';
import Serveur from './Server';
import {useState} from 'react';
function CofeeShop() {
    const menu = ['Cofee', 'Tea', 'Cappucino', 'Expresso']
    const [value, setValue] = useState('');
    const [show, setshow] = useState(false);
    const sendValue = (value) => {
        setValue(value);
        setshow(true);
    }


    return <div>
        <h1>CofeeShop</h1>
        <Client  sendValue={sendValue} />
        <Serveur menu={menu} value={value} show = {show}/>
        <Menu menu={menu} />
    </div>;
}

export default CofeeShop;
