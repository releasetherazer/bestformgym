import React from "react";
import "./Footer.css";
import NaviFooter from "./NaviFooter";
import { Facebook, Instagram } from "@material-ui/icons";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">
        <h1 className="footer__blue">Best</h1>
        <h1 className="footer__orange">Form</h1>
        <h1 className="footer__blue">Gym</h1>
      </div>

      <div className="footer__navifooter">
        <NaviFooter />
      </div>
      <div className="footer__daten">
        <p>
          <Link to="/datenschutz" target="_blank" className="footer__links">
            Datenschutzerklärung
          </Link>
        </p>
        <p>
          <Link to="/agbs" target="_blank" className="footer__links">
            Agbs
          </Link>
        </p>
        <p>
          <Link to="/impressum" target="_blank" className="footer__links">
            Impresum
          </Link>
        </p>
      </div>
      <div className="footer__social">
        <p>Folgen Sie Uns</p>
        <div className="footer__socialIcons">
          <a
            className="footer__socialIconsRule"
            href="https://www.facebook.com/BestFormGymAugsburg"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            className="footer__socialIconsRule"
            href="https://www.instagram.com/bestformgym_augsburg/"
            target="_blank"
          >
            <Instagram />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <span>
          BestFormGym &copy;, All rights reserved, created by Alex Rodriguez
        </span>
      </div>
      {/* icons social media */}
      {/* copyright */}
    </div>
  );
}

export default Footer;
