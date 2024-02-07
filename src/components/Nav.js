import { Link } from 'react-router-dom'
export default function Nav({ isVisible }) {
  const navStyle = {
    display: isVisible ? 'block' : 'none',
    position: 'absolute',
    top: '100%', // Position the dropdown below the nav bar
    left: 0,
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    listStyle: 'none',
    margin: 0,
  };

  return (
    <ul style={navStyle}>
      <Link to ='/'><li>Home</li></Link>
      <Link to ='/'><li>About</li></Link>
      <Link to ='/'><li>Menu</li></Link>
      <Link to ='/reservation'><li>Reservation</li></Link>
      <Link to = '/'><li>Order Online</li></Link>
    </ul>
  );
}

