"use client";

import './style.css';
import { education, skillsData } from './data';

const About = () => {
    return (
        <>
            <main>
                <section className='about-section'>
                    <div className='skills-section'>
                        <div className='title'>
                            <h2 className='section-title'>Skills</h2>
                            <div className='underline'></div>
                        </div>
                        <div className="skills-info">
                            {
                                skillsData.map((curr) => {
                                    const { id, name, subjectInfo, moreInfo } = curr
                                    return (
                                        <div key={id} className="skills-card">
                                            <h4 className="institution-title">{name}</h4>
                                            <p className='subjectInfo'>{subjectInfo}</p>
                                            {moreInfo && <p className="moreInfo">{moreInfo}</p>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="education-section">
                        <div className='title'>
                            <h2 className='section-title'>Education</h2>
                            <div className='underline'></div>
                        </div>
                        <div className="education-info">
                            {
                                education.map((curr) => {
                                    const { id, name, subjectInfo, moreInfo } = curr
                                    return (
                                        <div key={id} className="education-card">
                                            <h4 className="institution-title">{name}</h4>
                                            <p className='subjectInfo'>{subjectInfo}</p>
                                            <p className="moreInfo">{moreInfo}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About;
