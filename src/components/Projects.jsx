import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Developed a full-stack e-commerce platform with secure payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/osike', // Example Link
  },
  {
    id: 2,
    title: 'Mobile App for Local Businesses',
    description: 'Designed and implemented a mobile application to connect local businesses with customers.',
    technologies: ['React Native', 'Firebase'],
    link: 'https://github.com/shadrack_dev/mobile-business-app', // Example Link
  },
  {
    id: 3,
    title: 'Data Analysis Dashboard',
    description: 'Created an interactive dashboard for visualizing complex datasets using Python and React.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'React', 'D3.js'],
    link: 'https://github.com/shadrack_dev/data-dashboard', // Example Link
  },
  // Add more projects as you complete them
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
