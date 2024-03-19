import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
            <p>Copyright &copy; 2024 by <a href="mailto:sadha0601.p@gmail.com" style={{color: '#59B2F4'}}>sadha0601.p@gmail.com</a> | All Rights Reserved</p>

            </div>
            <div className="footer-iconTop">
                <a href="#">
                    <FontAwesomeIcon icon={faAngleUp} size="2rem" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
