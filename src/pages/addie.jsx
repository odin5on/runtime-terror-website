import React from "react";
import "./addie.css";
import Commento from "../components/commento";

import image1 from './addie_pics/kev.jpeg';
import image2 from './addie_pics/roomies.jpeg';
import image3 from './addie_pics/dance.jpeg';
import profilePic from './addie_pics/cover_pic.png';

function Addie() {
  return (
    <div class="align-center" >
      <div className="name_margin" style={{backgroundColor:"#fff0f3", border: "1px solid black"}}>
        <h1 class="text-3xl text-center">
          <br></br> Addie Schroeder <br></br></h1>
      </div>
      <div className="split-container">
        <div className="left-column margin">
          <div>
            <img src={profilePic} alt="Profile Pic" className = "profile" />
          </div>
            
        </div>

        <div className="margin" >
          <p>
            <h2 class="font-bold">A little about myself:</h2>

            <p class="text-l" className="right-column paragraph" style={{backgroundColor:"#fff0f3", border:"1px solid black"}}> 

              Hi! My name is Addie. I am a student at the University of Iowa, majoring in computer 
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

      <div className="image-row" >

        <img src={image1} alt="Kev" className="image" style={{border: "1px solid black"}}/>
        <img src={image2} alt="Roomies" className="image" style={{border: "1px solid black"}} />
         <img src={image3} alt="Dance" className="image" style={{border: "1px solid black"}}/>
        
      </div>
      <div className="my-8 mx-40">
        <Commento id={2} />
      </div>
    </div>
     
   

  );
}

export default Addie;
