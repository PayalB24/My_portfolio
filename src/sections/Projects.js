import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      title: 'Smart Email Generator for Students',
      description:
        'An AI-powered tool built with React, Flask, and Gemini APIs to auto-generate professional emails for students based on academic context.',
      tech: ['React', 'Flask', 'Gemini API'],
      link: 'https://prodraftify-4.onrender.com/',
    },
    {
      title: 'Career Guidance System',
      description:
        'A full-stack system integrating ML to guide students in career selection. Includes a chatbot and prediction engine (in progress).',
      tech: ['React', 'Flask', 'Machine Learning', 'MongoDB'],
      link: 'https://github.com/yourusername/career-guidance-system',
    },
    {
      title: 'School Website',
      description:
        'Designed and developed a dynamic website for a school with PHP backend, MySQL DB, and custom frontend components.',
      tech: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
      link: 'https://github.com/PayalB24/SCBK',
    },
    {
      title: 'Data Dashboard with Power BI',
      description:
        'Created dashboards to visualize complex datasets for better business decision-making and pattern discovery.',
      tech: ['Power BI', 'Excel', 'Data Modeling'],
      link: 'https://app.powerbi.com/links/sUp9JLduTP?ctid=1f73241e-0ad5-4bf5-8d6a-43168132475a&pbi_source=linkShare&bookmarkGuid=242601ed-c824-4d14-bdbe-0ad8b1cb5f2e ',
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '100px 20px',
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#A855F7',
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={projectCard}>
      <h3 style={projectTitle}>{project.title}</h3>
      <p style={projectDescription}>{project.description}</p>
      <ul style={techList}>
        {project.tech.map((tech, idx) => (
          <li key={idx} style={techItem}>
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...visitButton,
          ...(hover ? visitButtonHover : {}),
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Visit &gt;
      </a>
    </div>
  );
}

// Styles
const projectCard = {
  backgroundColor: '#1a1a1a',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.15)',
  borderLeft: '5px solid #A855F7',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const projectTitle = {
  fontSize: '1.3rem',
  color: '#A855F7',
  marginBottom: '10px',
};

const projectDescription = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '10px',
};

const techList = {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  padding: 0,
  margin: '10px 0',
};

const techItem = {
  backgroundColor: '#A855F7',
  color: 'white',
  borderRadius: '8px',
  padding: '4px 10px',
  fontSize: '0.85rem',
};

const visitButton = {
  color: '#A855F7',
  fontWeight: 'bold',
  fontSize: '0.95rem',
  textDecoration: 'none',
  marginTop: '10px',
  display: 'inline-block',
  transition: 'color 0.3s ease, transform 0.3s ease',
};

const visitButtonHover = {
  textDecoration: 'underline',
  transform: 'translateX(3px)',
};

export default Projects;
