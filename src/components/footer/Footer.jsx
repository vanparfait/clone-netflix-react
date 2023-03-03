import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__socials">
          <a href="/" className="footer__social">
            <FacebookIcon />
          </a>
          <a href="/" className="footer__social">
            <InstagramIcon />
          </a>
          <a href="/" className="footer__social">
            <TwitterIcon />
          </a>
          <a href="/" className="footer__social">
            <LinkedInIcon />
          </a>
          <ul className="footer__links">
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
            <li className="footer__link">
              <a href="/">lien footer</a>
            </li>
          </ul>
          <div className="footer__copy">
            Netflix clone - tous droits reserves
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
