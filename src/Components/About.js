import React from 'react';
import AboutMe from "../Images/About.png"

function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={AboutMe} alt="" />
            </div>

            <div className="about-content">
                <h2 className="heading">
                    ABOUT <span>Me</span>
                </h2>
                <h3>Frontend Developer</h3>
                <p>Hello! I'm Sadha Shivam, a dedicated React.js Developer with 2 years of hands-on experience in crafting dynamic and responsive web applications. Passionate about leveraging cutting-edge technologies and best practices to deliver exceptional user experiences, I specialize in front-end development using React.js and a wide range of complementary tools and libraries.</p>
                <p>Skills : <span>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Node Js, express js, Mongodb, React.js, Redux, Redux Toolkit, Material UI, Git, GitLab, Jest, and Enzyme unit testing</span></p>
                <a href="#" className="btn">Read More</a>
            </div>
        </section>
    );
}

export default About;
