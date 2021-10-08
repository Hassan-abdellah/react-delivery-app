import React from 'react'
import './contact.css';
const Contact = () => {
    return (
        <div className="contact container grid" id="contactUs">
            <div className="contact-content">
                <h2 className="contact-title">
                    Contact Us From
                    <br/>
                    Here
                </h2>
                <p className="contact-description">
                    You can contact us from here, you can write to us, 
                    call us or visit our service center, we will gladly assist you.
                </p>
            </div>
            <ul className="contacts">
                <li className="contact-item">
                    Telephone:
                    <span className="contact-info">555-222-333</span>
                </li>
                <li className="contact-item">
                    Email:
                    <span className="contact-info">delivery.app@gmail.com</span>
                </li>
                <li className="contact-item">
                    Address:
                    <span className="contact-info">Cairo-Egypt</span>
                </li>
            </ul>
            <div className="contact-btn">
                <a href="#" className="btn">Contact Us</a>
            </div>
        </div>
    )
}

export default Contact;
