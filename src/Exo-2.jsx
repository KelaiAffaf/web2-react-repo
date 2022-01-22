import React from 'react';
import Chat from './Chat/ChatFunction'
import { useState } from 'react';
import './Chat/Chat.css'
function Exo() {
        const [message1, setMessage1] = useState('')
        const [message2, setMessage2] = useState('')


  return <div className='warraper'>
      <h1>Chat Exo</h1>
      <div className="container">
          <Chat SendMsg={(msg)=>{setMessage1(msg)}}  chatMessage={message2} />
          {/* <div className="separator"></div> */}
          <Chat SendMsg={(msg)=>{setMessage2(msg)}} chatMessage={message1}/>
      </div>
  </div>;
}

export default Exo;
