import React from 'react';
import { useState } from 'react';
import './Chat.css' // we can import the css file in the functional component
function ChatFunction({ SendMsg, chatMessage }) {
    //  why destructuring the props ?
    //  destructuring props advantage : to prevent side effect

    const [msg, setMsg] = useState('');

    const handleValue = (e) => {
        setMsg(e.target.value);
    }

    const handlSubmit = (e) => {
        e.preventDefault();
        // to prevent the default behaviour of the form
        SendMsg(msg); // we're sending a callback function to the parent component
    }
    return <div>
        <form onSubmit={handlSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={handleValue}
                value={msg}
            />
            <input 
                type="submit"
                value="Send"
            />

        </form>
        <h2> {chatMessage} </h2>
    </div>;
}

export default ChatFunction;
