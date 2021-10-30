import React from 'react'
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="content container grid">
                <div className="footer-data">
                    <a href="/" className="footer-logo">Delivery</a>
                    <p className="footer-description">
                        Our Products Faster
                        <br/>
                        Easier
                    </p>
                </div>
                <div className="footer-data">
                    <h3 className="footer-title">Our Services</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">Discounts</a>
                        </li>
                        <li>
                            <a href="/">Report a bug</a>
                        </li>
                        <li>
                            <a href="/">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-data">
                    <h3 className="footer-title">Our Company</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Our Mission</a>
                        </li>
                        <li>
                            <a href="/">Get in touch</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-data">
                    <h3 className="footer-title">Community</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="/">Support</a>
                        </li>
                        <li>
                            <a href="/">Questions</a>
                        </li>
                        <li>
                            <a href="/">Customer Help</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-social">
                    <ul className="social-links">
                        <li>
                            <a href="/" className="social-link">
                                <i className="bx bxl-facebook-circle "></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="social-link">
                                <i className="bx bxl-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="social-link">
                                <i className="bx bxl-instagram-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <p className="footer-copy">&copy; Delivery. All Copyright Reserved</p>
        </footer>
    )
}

export default Footer;
