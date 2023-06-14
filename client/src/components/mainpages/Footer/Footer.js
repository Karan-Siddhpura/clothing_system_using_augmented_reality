import React from "react";
import "./Footer.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footersize">
      <footer>
        <div className="footer-container">
          <ul className="flex-row m ul">
            <li className="footer-links li">
              <Link to='/'>Home</Link>
            </li>
            <li className="footer-links li">
              <Link to='/about'>About</Link>
            </li>
            <li className="footer-links li">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>

          <p className="footer-p">Follow us on!</p>
          <div className="box-main">
            <div className="box">
              <div className="icon instagram">
                <i className="fab fa-instagram fa-2x"><InstagramIcon /></i>
              </div>
              <p className="footer-p">Instagram</p>
            </div>
            <div className="box">
              <div className="icon facebook">
                <i className="fab fa-facebook fa-2x"><FacebookIcon /></i>
              </div>
              <p className="footer-p">Facebook</p>
            </div>
            <div className="box">
              <div className="icon twitter">
                <i className="fab fa-twitter fa-2x"><TwitterIcon /></i>
              </div>
              <p className="footer-p">Twitter</p>
            </div>
            <div className="box">
              <div className="icon youtube">
                <i className="fab fa-youtube fa-2x"><YouTubeIcon /></i>
              </div>
              <p className="footer-p">Youtube</p>
            </div>
          </div>
        </div>

        <p className="footer-p">Tryouts&copy; 2022</p>
      </footer>
    </div>
  );
}
