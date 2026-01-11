"use client";

import { projectsData } from './projectsData';
import './style.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  return (
    <main>
      <section className="projects-section">
        <div className='title'>
          <h1>Projects</h1>
          <div className='underline'></div>
        </div>
        <div className='projects-div'>
          {projectsData.map((project) => {
            const { id, img, title, github, deployed } = project
            return (
              <div className='project-card' key={id}>
                <div className='project-card-img-div'>
                  <Image 
                    src={img} 
                    alt={title} 
                    width={400} 
                    height={250}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className='project-card-info-div'>
                  <h2>{title}</h2>
                  <div className='project-links-div'>
                    <a href={deployed} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      <span>Visit</span>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Projects;
