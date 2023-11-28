import React from "react";

function Nina() {
  return (
    <div>
      <h1>Hello from Nina!</h1>
      <div style = {{display: "flex"}}>
        <img src = "src/pages/IMG_3307.jpeg" 
             alt = "My puppy!"
             style = {{width: "150px", marginRight: "10px"}}
        />
      <img src = "src/pages/IMG_5860.jpeg" 
           alt = "Me with my mom and sisters."
           style = {{width: "150px", marginRight: "10px"}}
        />
      <img src = "src/pages/IMG_8281.jpeg"
           alt = "The Bahamas"
           style = {{width: "150px"}}
        />
      </div>
    </div>
  );
}

export default Nina;
