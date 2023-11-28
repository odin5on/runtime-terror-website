import React from "react";

function Nina() {
  return (
    <div>
      <h1 style = {{ fontWeight: "bold", fontSytle: "800px"}}> Nina Baffo</h1>

      <div style={{ display: "flex", alignItems: "center" }}>
      <img src = "src/pages/Screen Shot 2023-11-10 at 9.51.00 AM.png"
           style = {{width: "250px"}}
        />
      <p style={{ marginLeft: "1cm", marginBottom: "3cm", fontWeight: "bold", fontSytle: "24px"}}>About me:</p>
      </div>
      <div style = {{marginTop: "2in", display: "flex", felxDirection: "column", alighnItems: "flex-end", paddingLeft: "2in"}}>
        <img src = "src/pages/IMG_3307.jpeg" 
             alt = "My puppy!"
             style = {{width: "300px", marginRight: "1cm", marginBottom: "3cm"}}
        />
      <img src = "src/pages/IMG_5860.jpeg" 
           alt = "Me with my mom and sisters."
           style = {{width: "300px", marginRight: "1cm", marginBottom: "3cm"}}
        />
      <img src = "src/pages/IMG_8281.jpeg"
           alt = "The Bahamas"
           style = {{width: "500px", marginBottom: "3cm"}}
        />
      </div>
    </div>
  );
}

export default Nina;
