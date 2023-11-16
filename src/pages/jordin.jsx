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
          <h1>Jordin Eicher</h1>
          <p>AKA Linux Wizard</p>
        </div>
      </header>
      <br></br>

      {/* About Me Section */}
      <section className="about-me">
        <h2><b>About Me</b></h2>
        <p>
          <i>
          I am a passionate web developer with a strong background in developing an even stronger background. 
          </i>
        </p>
      </section>
      <br></br>
      
      {/* Skills Section */}
      <section className="skills">
        <h2><b>What am I proud of?</b></h2>
        <ul>
          <li><i>"I am proud of I never give up" - Khabib Nurmagomedov</i></li>
        </ul>
      </section>
      <br></br>

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
      <br></br>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: jayike1010@gmail.com</p>
        <p>LinkedIn: <a href="www.linkedin.com/in/jordin-eicher">Jordin's LinkedIn</a></p>
        <p>GitHub: <font><a href="github.com/jayike">Jordin's GitHub</a></font></p>
      </section>
      <br></br>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2023 Jay Ike. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Export the component
export default Jordin;
