import React from 'react';
import profilePic from './assets/profile_pic.jpeg';
import { HOME_PAGE_STRINGS } from './constants/strings';
import { FaAndroid } from 'react-icons/fa';

const HomePage: React.FC = () => {
    return (
        <>
            {/* Large screen layout - absolute positioning */}
            <div className="d-none d-lg-block">
                <div className="row">
                    <div className="position-absolute top-0 start-0 mt-5 pt-5 ps-4 col-auto">
                        <img src={profilePic} className="rounded" alt="Profile" style={{ width: '300px', height: 'auto' }} />
                        <div className="mt-2">
                            <FaAndroid className="me-2" /><a href="https://bcert.me/bc/html/profile.jsp?k=jjhrguh" target="_blank" rel="noopener noreferrer">Link to Android Certification</a>
                        </div>
                    </div>
                    <div className="position-absolute top-0 mt-5 pt-5 col text-start" style={{ left: '400px' }}>
                        <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.microsoft.jobTitle}</p>
                        <ul>
                            {HOME_PAGE_STRINGS.microsoft.skills.map((skill, index) => (
                                <li key={index} className='fw-bold'>{skill}</li>
                            ))}
                        </ul>
                        <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.hughes.jobTitle}</p>
                        <ul>
                            {HOME_PAGE_STRINGS.hughes.skills.map((skill, index) => (
                                <li key={index} className='fw-bold'>{skill}</li>
                            ))}
                        </ul>
                        <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.uncc.jobTitle}</p>
                        <ul>
                            {HOME_PAGE_STRINGS.uncc.skills.map((skill, index) => (
                                <li key={index} className='fw-bold'>{skill}</li>
                            ))}
                        </ul>
                        <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.accenture.jobTitle}</p>
                        <ul>
                            {HOME_PAGE_STRINGS.accenture.skills.map((skill, index) => (
                                <li key={index} className='fw-bold'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Small/Medium screen layout - stacked */}
            <div className="d-lg-none container-fluid mt-5 pt-4">
                <div className="text-center mb-4">
                    <img src={profilePic} className="rounded img-fluid" alt="Profile" style={{ maxWidth: '250px' }} />
                    <div className="mt-2">
                        <FaAndroid className="me-2" /><a href="https://bcert.me/bc/html/profile.jsp?k=jjhrguh" target="_blank" rel="noopener noreferrer">Link to Android Certification</a>
                    </div>
                </div>
                <div className="text-start px-3">
                    <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.microsoft.jobTitle}</p>
                    <ul>
                        {HOME_PAGE_STRINGS.microsoft.skills.map((skill, index) => (
                            <li key={index} className='fw-bold'>{skill}</li>
                        ))}
                    </ul>
                    <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.hughes.jobTitle}</p>
                    <ul>
                        {HOME_PAGE_STRINGS.hughes.skills.map((skill, index) => (
                            <li key={index} className='fw-bold'>{skill}</li>
                        ))}
                    </ul>
                    <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.uncc.jobTitle}</p>
                    <ul>
                        {HOME_PAGE_STRINGS.uncc.skills.map((skill, index) => (
                            <li key={index} className='fw-bold'>{skill}</li>
                        ))}
                    </ul>
                    <p className="mt-3 text-decoration-underline text-primary fw-bold">{HOME_PAGE_STRINGS.accenture.jobTitle}</p>
                    <ul>
                        {HOME_PAGE_STRINGS.accenture.skills.map((skill, index) => (
                            <li key={index} className='fw-bold'>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HomePage;
