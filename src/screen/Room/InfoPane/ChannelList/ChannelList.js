//
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

// custom mdoules
import Channel from "./Channel/Channel";

export default function ChannelList({ channels }) {
  // state
  const [acitveChannel, setActiveChannel] = useState(0);
  let list = `There are no channels to show`;
  if(Array.isArray(channels) && channels.length > 0) {
    list = channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants}/>)
  }
  
  return(
    list.length > 0 
      ? <Nav onSelect={(key) => setActiveChannel(key)} acitveKey={acitveChannel}>{list}</Nav> 
      : <div>{list}</div>
  )
}