// node modules
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem'

// custom modules
import './Channel.css';

export default function Channel({
  id,
  name,
  participants
}) {
  // handlers
  const handleClick = (event) => {
    console.log(event.value);
  }

  return(
    // <NavLink 
    //   className='channel' 
    //   eventKey={id}
    //   //onClick={handleClick}
    // >{name}</NavLink>

    <NavItem className='channelContainer'>
      <div className='linkContent'><NavLink className="channelLink" eventKey={id}>{name}</NavLink></div>
      <div className='linkContent'>{participants}</div>
    </NavItem>
  )  
}