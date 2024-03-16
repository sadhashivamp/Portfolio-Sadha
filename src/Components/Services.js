import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
function Services() {
  return (
    <section className="services" id="services">
        <h2 className="heading">
            My <span>Services</span>
        </h2>
        <div className="services-container">
            <div className="services-box">
                <FontAwesomeIcon icon={faCode} style={{fontSize : '3rem'}} />
                <h3>Web Development</h3>
                <p>I specialize in crafting stunning websites and web applications that not only look great but also perform flawlessly. With my expertise in web development technologies and best practices, I ensure that your online platform is responsive, scalable, and aligned with your brand's identity. From e-commerce sites to content management systems. I work closely with you to deliver a seamless and memorable user experience.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <FontAwesomeIcon icon={faPalette}  style={{fontSize : '3rem'}} />
                <h3>UI/UX Designing</h3>
                <p>As a UI/UX designer, I create engaging interfaces that captivate audiences and enhance usability. Using a blend of creativity and user-centric design principles, I craft intuitive and visually stunning designs that elevate your brand and resonate with your target audience. Whether you're launching a new product or revamping an existing one, I work closely with you to deliver a seamless and memorable user experience.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <FontAwesomeIcon icon={faAndroid}  style={{fontSize : '3rem'}} />
                <h3>App Development</h3>
                <p>With my app development services, I turn your app ideas into reality. From concept to launch, I guide you through every step of the development process, ensuring a smooth and successful journey. Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, I leverage the latest technologies and best practices to deliver high-quality, user-friendly.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
  );
}

export default Services;
