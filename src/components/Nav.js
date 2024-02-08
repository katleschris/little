import { Link } from 'react-router-dom';

export default function Nav({ isVisible, hideMenu }) {
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

  const handleLinkClick = () => {
    hideMenu(); // Call the hideMenu function passed from the parent component
  };

  return (
    <ul style={navStyle}>
      <Link to ='/' onClick={handleLinkClick}><li>Home</li></Link>
      <Link to ='/about' onClick={handleLinkClick}><li>About</li></Link>
      <Link to ='/' onClick={handleLinkClick}><li>Menu</li></Link>
      <Link to ='/reservation' onClick={handleLinkClick}><li>Reservation</li></Link>
    </ul>
  );
}

