import React from 'react';
import VOD from "../Images/VOD.png";
import JOB from "../Images/JOB.png";
import LMS from "../Images/LMS.png";

function Projects() {
  return (
    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest
            <span>Projects</span>
        </h2>

        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src={VOD} alt="" />
                <div class="portfolio-layer">
                    <h4>Local VOD (Saudi)</h4>
                    <p>The Local VOD Project is a video-on-demand platform inspired by Netflix, offering a wide range of content including movies, TV shows, and podcasts. With a sleek interface and seamless streaming experience, users can discover and enjoy their favorite shows or tune in to podcasts on the go.</p>
                    <i class="fa-solid fa-up-right-form-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={JOB} alt="" />
                <div class="portfolio-layer">
                    <h4>E-Job Portal</h4>
                    <p>The E-Job Portal facilitates seamless connections between job seekers and companies through curated listings, enabling easy applications. With its intuitive user interface, the platform ensures a smooth experience for both employers and job seekers alike.</p>
                    <i class="fa-solid fa-up-right-form-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={LMS} alt="" />
                <div class="portfolio-layer">
                    <h4>LMS Project</h4>
                    <p>The LMS Project is a versatile learning management system with tailored panels for administrators, managers, team leads, and students. Users access educational content, track progress, and collaborate seamlessly with course management and assessment tools.</p>
                    <i class="fa-solid fa-up-right-form-square"></i>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
