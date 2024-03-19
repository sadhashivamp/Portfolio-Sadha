import React from 'react';
import AboutMe from "../Images/Me1.png"

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
                <h3>Full Stack Developer specializing in MERN stack technologies</h3>
                <p>Hello! I'm Sadha Shivam, a dedicated Frontend Developer with 2+ years of hands-on experience in crafting dynamic and responsive web applications. I have expertise in both front-end and back-end development, with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about leveraging cutting-edge technologies and best practices to deliver exceptional user experiences, I specialize in front-end development using React.js and a wide range of complementary tools and libraries.</p>
                <p>Skills : <span>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, Material UI, MongoDB, Express.js, React.js, Node.js, Redux, Redux-Toolkit, Git, GitLab, GitHub, Jest, and Enzyme unit testing</span></p>
                <a href="#" className="btn">Read More</a>
            </div>

        </section>
    );
}

export default About;
