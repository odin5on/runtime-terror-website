import React from "react";
import './styles.css';
import profile from "./profile.jpg";
import image1 from "./image1.png";
import image2 from "./image2.png";

import image4 from "./image4.png";
import tech from "./tech.jpg";
import HorizontalSlideshow from "./HorizontalSlideshow";


// Create a functional component for the personal profile page
const Jordin = () => {
  const images=[image4,image2,image1,tech];
  
  return (
    <div className="profile-page">
      {/* Header Section */}
      <header>
        <div className="profile-picture">
          {/* You can replace the placeholder image URL with your own */}
          <img src= {image1} alt="Profile" />
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
          I am an Electrical Engineering major at the University of Iowa with focus in IoT. I have interned at Collins Aerospace in the Communications Hardware department and will start full-time as a Hardware Design Engineer following graduation. In my freetime, I enjoy watching MMA, learning history and philosophy, tinkering with electronics, and running.
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
      

      {/* Slideshow Section */}
      <section className="projects">
        
        
          <h1>Image1-3: Hiking, Image4: Tech stuff</h1>
          <HorizontalSlideshow images={images} />
        
        
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
