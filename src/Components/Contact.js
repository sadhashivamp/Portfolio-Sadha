import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_av3oknq';
        const templateId = 'template_1ur5g0s';
        const publicKey = 'cUXLl4SScfSRMivCS';

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setSuccessMessage('Message sent successfully!');
                // Reset form fields after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });

        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: ''
        });
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">
                Contact <span>Me</span>
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-box">
                    <input
                        type="number"
                        name="phoneNumber"
                        placeholder="Mobile Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Email Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value="Send Message" className="btn" />

            </form>
            {successMessage && (
                <div id="successMessage" className="success-message" style={{ fontSize: '2.125rem', fontWeight: '400' }}>{successMessage}</div>
            )}
        </section>
    );
}

export default Contact;
