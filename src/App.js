// node modules
import socketClient from 'socket.io-client';
import { useState, useEffect } from 'react';

// custom modules
import Room from "./screen/Room/Room";

import { 
  EVENT,
  STATIC_CHANNELS
} from './utils/constants'; 

// constants
const SERVER = "http://localhost:5000";
const MESSAGE = 'Connection to socket server';
const ACTION = {
  CLOSED: 'closed',
  OPENED: 'opened',
}

// work
function App() {

  // state init
  const [channels, setChannels] = useState([{ id: 1, name: 'first', participants: 10 }]);
  var socket = socketClient(SERVER);

  // effects
  useEffect(() => {
    return () => {
      socket.disconnect();
      console.log(`${MESSAGE} ${ACTION.CLOSED}`);
    }
  });

  useEffect(() => {
    console.log(channels);
  }, [channels])

  socket.on(EVENT.CONNECTION, () => {
    console.log(`${MESSAGE} ${ACTION.OPENED}`);
  })
  
  return (
    <Room channels={channels}/>
  );
}

// export
export default App;
