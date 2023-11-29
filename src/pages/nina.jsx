import React from "react";

function Nina() {
  return (
    <div>
      <h1 style = {{fontWeight: "bold", fontSize: "24px"}}> Nina Baffo</h1>

      <div style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", display: "flex", alignItems: "center" }}>
      <img src = "src/pages/Screen Shot 2023-11-10 at 9.51.00 AM.png"
           style = {{width: "250px"}}/>
 
      <p style={{ marginLeft: "1cm", marginBottom: "3cm", fontWeight: "bold", fontSize: "17px"}}>About me:</p>

      <p style={{ backgroundColor: "lightpink", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", marginBottom: "1.5cm", fontSize: "17px"}}>Hi and welcome to my page! My name is Nina, I'm from the southwest suburbs of chicago. I am a senior this year majoring in Computer Science and Engineering.
      I started off college as a Math Education major, but switched to Engineering second semester my sophmore year. I was nervous at first, but I am really glad I decided to push myself and pursue something out of my comfort zone. 
      I can't wait to see where my career takes me in the near future! </p>
      </div>
      <div style = {{backgroundColor: "lightblue", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", display: "flex", alignItems: "center", marginTop: "2in", display: "flex", felxDirection: "column", alighnItems: "flex-end", paddingLeft: "2in"}}>
        <img src = "src/pages/IMG_3307.jpeg" 
             style = {{width: "300px", marginRight: "1cm", marginBottom: "3cm"}}
        />
      <img src = "src/pages/IMG_5860.jpeg" 
           style = {{width: "300px", marginRight: "1cm", marginBottom: "3cm"}}
        />
      <img src = "src/pages/IMG_8281.jpeg"
           style = {{width: "500px", marginBottom: "3cm"}}
        />
      </div>
    </div>
  );
}

export default Nina;
