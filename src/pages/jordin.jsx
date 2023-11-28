import React from "react";
import './styles.css';
import profile from "./profile.jpg";


// Create a functional component for the personal profile page
const Jordin = () => {
  return (
    <div className="profile-page">
      {/* Header Section */}
      <header>
        <div className="profile-picture">
          {/* You can replace the placeholder image URL with your own */}
          <img src= {profile} alt="Profile" />
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
          I am an Electrical Engineering major at the University of Iowa with focus in IoT. I have interned at Collins Aerospace in the Communications Hardware department and will start full-time as a Hardware Design Engineer (EE) following graduation. In my freetime, I enjoy watching MMA, learning history and philosophy, tinkering with electronics, and running.
          </i>
        </p>
      </section>
     
      
      {/* Skills Section */}
      <section className="skills">
        <h2>Favorite Quote</h2>
        <ul>
          <li><i>"All the time people ask me, 'Brother, what are you proud of?', I say, I am very proud of... I never give up." - Khabib Nurmagomedov</i></li>
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
