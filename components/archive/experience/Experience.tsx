"use client";

import './style.css';
import { experience } from '@/components/archive/about/data';

const Experience = () => {
    return (
        <>
            <main>
                <section className='experience-page-section'>
                    <div className='experience-container'>
                        <div className='title'>
                            <h2 className='section-title'>Experience</h2>
                            <div className='underline'></div>
                        </div>
                        <div className="experience-list">
                            {
                                experience.map((curr) => {
                                    const { id, name, subjectInfo, moreInfo, workDetails } = curr
                                    return (
                                        <div key={id} className="experience-detail-card">
                                            <h4 className="company-title">{name}</h4>
                                            <p className='role-info'>{subjectInfo}</p>
                                            <p className="duration-info">{moreInfo}</p>
                                            {workDetails && (
                                                <ul className="work-details-list">
                                                    {workDetails.map((detail, index) => (
                                                        <li key={index} className="work-detail-item">
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
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

export default Experience;
