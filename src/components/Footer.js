import FooterImg from "../icons_assets/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-container">
          <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" style={{width: '40%', height: 'auto'}} />
        </div>
        <div className="site-map">
          <h4>SITEMAP</h4>
          <Link className="block" to="/">Home</Link><br></br>
          <Link className="block" to="/about">About</Link><br></br>
          <Link className="block" to="/menu">Menu</Link><br></br>
          <Link className="block" to="/reservation">Reserve</Link>
        </div>
        <div className="contact">
          <h4>CONTACT US</h4>
          <address>
            123 Where Am I Street
            <br />
            No Where, NW 00001
          </address>
          <a className="footer-block" href="tel:+11234653770">
            123&#41;&nbsp;456&#45;7890
          </a>
        </div>
      </div>
      <div className="col-full foot-center">
        <p>&copy; 2024 Coursera Meta Front-End Developer by Katlego Leshiba.</p>
      </div>
    </footer>

  )}

export default Footer;