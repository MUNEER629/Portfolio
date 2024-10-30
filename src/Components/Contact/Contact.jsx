import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fb4c8ddc-1b3a-457d-868e-1afa3b1ffc60");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
         alert(res.message);
        }
    };

    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I'm currently available to take projects. You can contact me anytime.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>muneer772001@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+91 9207813051</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>Ernakulam</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your Name" name="name" />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your Email" name="email" />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder="Enter your Message"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>

                    {/* Social Media Links */}
                    <div className="social-links">
                        <a href="https://github.com/MUNEER629" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/muneer-sadhik-115927248/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </a>
                    </div>
                </form>
            </div>

            <footer className="footer">
                <div className="footer-text">
                    <p>copyright &copy; 2024 by MuneerSadhik | All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
