import React from 'react';
import '../styles/projects.css';

const projects = [
    {
        id: 1,
        title: 'FlightPlan Travel Planner',
        description: 'awesome',
        imageUrl: "/assets/starslay.jpg",
        link: "link-to-project-1"
    },
    {
        id: 2,
        title: 'Flashcard Study App',
        description: 'A React app for studying with flashcards.',
        imageUrl: "/assets/flashcard.jpg",
        link: "link-to-project-2"
    },
    {
        id: 3,
        title: 'Crossword Puzzle Game',
        description: 'A fun crossword puzzle game built with the MERN stack.',
        imageUrl: "/assets/crossword.jpg",
        link: "link-to-project-3"
    },
]

const Projects = () => {
  return (
    <section className='projects-section'>
      <h1 className='projects-title'>My Projects</h1>
      <div className="projects-grid">
        {projects.map(({ id, title, description, imageUrl, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src={imageUrl}
              alt={`${title} screenshot`}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">{title}</h2>
              <p className="project-description">{description}</p>
            </div>
            </a>
        ))}
        </div>
      {/* <ul>
        <li>📚 Flashcard Study App – React, Node, MongoDB</li>
        <li>🎮 Crossword Puzzle Game – MERN Stack</li>
        <li>🍽️ Dinner Decider – Full Stack Group Project</li>
      </ul> */}
    </section>
  );
};

export default Projects;
