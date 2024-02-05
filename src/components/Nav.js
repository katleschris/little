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
      <Link t0 ='/'><li>Specials</li></Link>
      <Link t0 ='/'><li>About</li></Link>
      <Link t0 ='/reservation'><li>Book</li></Link>
    </ul>
  );
}

