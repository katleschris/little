import FooterImg from "../icons_assets/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer class="footer-container">
      <div class="footer-content">
        <div class="logo-container">
          <img class="footer-logo" src={FooterImg} alt="Little lemon footer pic" style={{width: '40%', height: 'auto'}} />
        </div>
        <div class="site-map">
          <h4>SITEMAP</h4>
          <Link class="block" to="/">Home</Link><br></br>
          <Link class="block" to="/about">About</Link><br></br>
          <Link class="block" to="/menu">Menu</Link><br></br>
          <Link class="block" to="/reservation">Reserve</Link>
        </div>
        <div class="contact">
          <h4>CONTACT US</h4>
          <address>
            123 Where Am I Street
            <br />
            No Where, NW 00001
          </address>
          <a class="footer-block" href="tel:+11234653770">
            123&#41;&nbsp;456&#45;7890
          </a>
        </div>
      </div>
      <div class="col-full foot-center">
        <p>&copy; 2024 Coursera Meta Front-End Developer by Katlego Leshiba.</p>
      </div>
    </footer>

  )}

export default Footer;