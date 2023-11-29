import React from "react";
import "./Addie.css";

import image1 from './addie_pics/kev.jpeg';
import image2 from './addie_pics/roomies.jpeg';
import image3 from './addie_pics/dance.jpeg';

function Addie() {
  return (
    <div>
      <div className="split-container">
        <div class="font-sans md:font-serif text-center w-full h-20" className="left-column margin">
          
            <h1 class="text-3xl font-bold text-center">Addie Schroeder</h1>
            
        </div>

        <div className="margin" >
          <p>
            <h2 class="font-bold">A little about myself:</h2>

            <p class="text-l" className="right-column paragraph"> 

              I am a dedicated student at the University of Iowa, majoring in computer 
              science and engineering while also pursuing a minor in mathematics. In addition 
              to my academic pursuits, I spent the last four years representing the university 
              as a member of the Iowa dance team. Outside of my studies, I am passionate about 
              dance, and though I no longer invest as much time on the dance team, I channel that 
              passion into teaching dance to kids at a local studio. Beyond academia and dance, 
              my interests extend to spending quality time with friends and family, indulging in 
              my love for travel, and enjoying the company of my cat, Kevin.

            </p>

          </p>
        </div>
      </div>

      <div className="image-row" style={{backgroundColor: "white"}} >
        {/* Position images */}
        <img src={image1} alt="Kev" className="image"/>
        <img src={image2} alt="Roomies" className="image" />
        <img src={image3} alt="Dance" className="image" />
      </div>
    
    </div>
     
   

  );
}

export default Addie;
