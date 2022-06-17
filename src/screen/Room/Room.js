import Input from "./Input/Input"
import Output from "./Output/Output"
import InfoPane from "./InfoPane/InfoPane";

import './Room.css';

export default function Room({ channels }) {
  console.log(JSON.stringify(channels, 0, 2));
  return(
    <div className="room_container">
      <div className='room_infoPane'>
        <InfoPane channels = {channels}/>
      </div>
      <div className='room_output'>
        <Output />
      </div>
      <div className='room_input'>
        <Input/>
      </div>
    </div>
  )
}