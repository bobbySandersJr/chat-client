// node-modules
import Card from 'react-bootstrap/Card'

// custom imports
import ChannelList from './ChannelList/ChannelList';

import './InfoPane.css';

export default function InfoPane({ channels }) {
  return(
    <Card>
      <ChannelList channels={channels}/>
    </Card>
  )
} 