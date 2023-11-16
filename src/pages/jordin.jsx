import React from "react";
import './styles.css';
import statue from "./statue.jpg";


// Create a functional component for the personal profile page
const Jordin = () => {
  return (
    <div className="profile-page">
      {/* Header Section */}
      <header>
        <div className="profile-picture">
          {/* You can replace the placeholder image URL with your own */}
          <img src= {statue} alt="Profile" />
        </div>
        <div className="header-text">
          <h1><strong>Jordin Eicher</strong></h1>
          <p><i>AKA Linux Wizard</i></p>
        </div>
        
      </header>
      

      {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          <i>
          I am a passionate web developer with a strong background in developing an even stronger background. 
          </i>
        </p>
      </section>
     
      
      {/* Skills Section */}
      <section className="skills">
        <h2>What am I proud of?</h2>
        <ul>
          <li><i>"I am proud of I never give up" - Khabib Nurmagomedov</i></li>
        </ul>
      </section>
      

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </section>
     

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <div>
        <dl>
          <dt>Personal Email:</dt>
          <dd><a href="mailto:jayike1010@gmail.com">jayike1010@gmail.com</a></dd>
          <dt>LinkedIn:</dt>
          <dd><a href="https://www.linkedin.com/in/jordin-eicher" target="_blank">linkedin.com/in/jordin-eicher</a></dd>
          <dt>GitHub:</dt>
          <dd><a href="https://www.github.com/jayike" target="_blank">github.com/jayike</a></dd>
        </dl>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2023 Runtime Terror. All rights reserved.</p>
      </footer>
      </div>
  );
};

// Export the component
export default Jordin;
