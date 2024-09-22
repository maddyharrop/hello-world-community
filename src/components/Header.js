import React from 'react';
import paliaIcon from '../img/communityIcon_8b7b51xui7wc1.png';
import GameTime from './InGameTime.js';
import { Link } from 'react-router-dom';

function Header({ greeting, toggleDarkMode, isDarkMode }) {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContent">
        <img src={paliaIcon} alt="Palia Icon" className="Palia-icon" />
        <div className="HeaderText">
          <h1>
            <span className="print">print</span>
            <span className="parentheses">(</span>
            <span className="string">'hello world'</span>
            <span className="parentheses">)</span>
          </h1>
          <p className='Header-Tagline'>Welcome to our Palia community hub!</p>
          <p>{greeting}</p>
        </div>
      </div>
      <nav className='NavBar'>
        <Link to="/">Home</Link>
        <a href="https://discord.gg/ZZX3vvzj">Discord</a>
        <Link to="/community" >About our community</Link>
      </nav>
      <div>
        <button onClick={toggleDarkMode} className="LightModeButton">
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <GameTime gameTime="Your In-Game Time Here" />
    </div>
  );
}

export default Header;
