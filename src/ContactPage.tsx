import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const ContactPage: React.FC = () => {
    return (
        <div className="position-absolute top-0 start-0 mt-5 pt-5 ps-4 text-start">
            <ul className="list-unstyled">
                <li><FaEnvelope className="me-2" />Email: <a href="mailto:chinnak.atp@gmail.com">chinnak.atp@gmail.com</a></li>
                <li><FaLinkedin className="me-2" />LinkedIn: <a href="https://www.linkedin.com/in/kranthi-chinnakotla-18802546/">https://www.linkedin.com/in/kranthi-chinnakotla-18802546/</a></li>
                <li><FaGithub className="me-2" />GitHub: <a href="https://github.com/KranthiChinnakotla">https://github.com/KranthiChinnakotla</a></li>
                <li><FaPhone className="me-2" />Phone: <a href="tel:+17043401634">+1 (704) 340-1634 </a></li>
            </ul>
        </div>
    );
};

export default ContactPage;