/* =================================
  This is the Footer component
==================================== */

import React,{Component} from 'react';
import '../css/Footer.css';

  class Footer extends Component {
    render(){
      return (
        <div className="main-footer">
          <a href="http://gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={require("../img/mail.png" )} alt="mail" class="social-mail"/>
          </a>
          <a href="https://www.facebook.com/abdifatah.shire.shiree" target="_blank" rel="noopener noreferrer">
            <img src={require("../img/facebook-wrap.png" )} alt="Facebook Logo" class="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/abdifatah-mohamed/" target="_blank" rel="noopener noreferrer">
            <img src={require("../img/linkedIn.png" )} alt="LinkedIn Logo" class="social-linkedin" />
          </a>
          <p>All rights are reserved. &copy; 2020 Abdifatah S Mohamed</p>
        </div>
      );
    }
}

export default Footer;
