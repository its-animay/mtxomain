import React from 'react';
import '../static/css/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>We are committed to delivering the best products and services.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Services</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#!"><FaFacebookF /></a>
                        <a href="#!"><FaTwitter /></a>
                        <a href="#!"><FaInstagram /></a>
                        <a href="#!"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MTX-O. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
