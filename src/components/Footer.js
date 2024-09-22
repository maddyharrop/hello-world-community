import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://discord.gg/yourdiscordlink" target="_blank" rel="noopener noreferrer">Join Our Discord</a>
                <Link to="/faq">FAQ</Link>
                <Link to="/upcoming-events">Upcoming Events</Link>
                <Link to="/news">Latest News</Link>
            </div>
        </footer>
    );
};

export default Footer;
