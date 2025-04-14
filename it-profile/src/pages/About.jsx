import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Welcome to my personal website! I'm passionate about technology and development.
          This site is built with React and Vite, showcasing modern web development practices.
        </p>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Web Development</li>
        </ul>
      </div>
    </div>
  );
}

export default About; 