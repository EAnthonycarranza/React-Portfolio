import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactIcons = () => (
    <div className="contact-icons-container d-flex flex-column align-items-center justify-content-center">
        <div className="icon-text email-space">
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            <a href="mailto:anthonycarranza123@gmail.com">E-mail</a>
        </div>
        <div className="icon-text">
            <FontAwesomeIcon icon={faPhone} className="fa-icon" />
            <a href="tel:210-997-2900">Phone</a>
        </div>
        <div className="icon-text">
            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            <a href="https://github.com/EAnthonycarranza" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    </div>
);


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Regular Expression for Email Verification
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const isValidEmail = (email) => {
        return emailPattern.test(email);
    }

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            alert('Please enter a valid email.');
            return;
        }

        const emailData = {
            to_name: 'Anthony Carranza',
            from_name: formData.name,
            from_email: formData.email,  // Add this line to include the sender's email
            message: formData.message
        };
    
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            emailData,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent!');
            setFormData({ name: '', email: '', message: '' });  // Reset the form
        }, (error) => {
            console.log(error.text);
            alert('An error occurred, please try again.');
        });
    }

    return (
        <div className="contact-container" id="contact">
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="input-with-margin" />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <ContactIcons />
        </div>
    );    
}

export default Contact;
