import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Resume from "../Resume/R e s u m e.pdf";
import HomeImage from "../Images/MyPic_3.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {

    useEffect(() => {
        // Initialize ScrollReveal for animations
        ScrollReveal().reveal('.home-content, heading', { origin: 'top' });

        // Initialize Typed.js for the multiple-text span
        const typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer', "React Js Developer", "Fullstack Developer"],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        });

        // Event listener for scrolling to handle sticky navbar
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup event listener
            window.removeEventListener('scroll', handleScroll);
            // Cleanup Typed.js instance
            typed.destroy();
        }
    }, []);

    const handleScroll = () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hi, Myself</h3>
                <h1>Sadha Shivam</h1>
                <h3>And I'm <span className="multiple-text"></span></h3>
                <p>Responsible for designing and implementing user interfaces, ensuring responsiveness, performance, and
                    cross-browser compatibility, while collaborating closely with design and backend teams.</p>
                    <div className="social-media">
                    <a href="https://www.facebook.com/sadhashivampendem/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.linkedin.com/in/sadha-shivam-pendem-673797146/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://twitter.com/sadha0601"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/nethasadha/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <a href={Resume} className="btn" download>Download CV</a>
            </div>

            <div className="home-img">
                <img src={HomeImage} alt="" />
            </div>
        </section>
    );
}

export default Home;
