import React from 'react';
import twitterLogo from '../assets/Twitter Icon.png';
import facebookLogo from '../assets/Facebook Icon.png';
import linkedinLogo from '../assets/Linkedin Icon.png';
import githubLogo from '../assets/GitHub Icon.png';
import mailBtn from '../assets/email-btn.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="useful-links">
        <h3 className="footer-header">USEFUL LINKS</h3>
        <hr className="footer-breaker" />
        <a href="/">Home</a>
        <a href="/currencies_list">Currencies</a>
      </div>
      <div className="contact">
        <h3 className="footer-header">CONTACT</h3>
        <hr className="footer-breaker" />
        <a href="mailto:ofarouq310@gmail.com">
          <img src={mailBtn} alt="mail-button" id="mail-btn" />
        </a>
        <div>
          <a href="https://www.twitter.com/Ofarouq310" target="_blank" rel="noreferrer">
            <img className="footer-img" src={twitterLogo} alt="twitter-icon" />
          </a>

          <a href="https://www.facebook.com/Ofarouq310" target="_blank" rel="noreferrer">
            <img className="footer-img" src={facebookLogo} alt="facebook-icon" />
          </a>

          <a href="https://www.linkedin.com/in/Ofarouq310/" target="_blank" rel="noreferrer">
            <img className="footer-img" src={linkedinLogo} alt="linkedin-icon" />
          </a>

          <a href="https://www.github.com/Ofarouq310" target="_blank" rel="noreferrer">
            <img className="footer-img" src={githubLogo} alt="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
