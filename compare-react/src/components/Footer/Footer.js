import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>Service at first in footer.</p>
            </div>
            <div className="column has-text-right">
              <a className="icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="icon">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
