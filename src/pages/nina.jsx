import React from "react";

function Nina() {
  return (
    <div style = {{display: "flex", felxDirection: "column", alighnItems: "flex-end", paddingLeft: "2in"}}>
      <h1>Hello from Nina!</h1>
      <div style = {{marginBottom: "1cm"}}>
        <img src = "src/pages/IMG_3307.jpeg" 
             alt = "My puppy!"
             style = {{width: "300px", marginRight: "0.5cm"}}
        />
      <img src = "src/pages/IMG_5860.jpeg" 
           alt = "Me with my mom and sisters."
           style = {{width: "300px", marginRight: "0.5cm"}}
        />
      <img src = "src/pages/IMG_8281.jpeg"
           alt = "The Bahamas"
           style = {{width: "500px"}}
        />
      </div>
    </div>
  );
}

export default Nina;
