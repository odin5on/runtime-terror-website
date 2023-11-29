import React from "react";

function Nina() {
  return (
    <div>
      <h1 style = {{fontWeight: "bold", fontSize: "24px"}}> Nina Baffo</h1>

      <div style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", display: "flex", alignItems: "center" }}>
        <img src = "src/pages/Screen Shot 2023-11-10 at 9.51.00 AM.png" style = {{width: "250px"}}/>
 
        <p style={{ marginLeft: "1cm", marginBottom: "3cm", fontWeight: "bold", fontSize: "17px"}}>About me:</p>

        <p style={{ backgroundColor: "lightpink", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", marginBottom: "1.5cm", fontSize: "17px"}}>Hi and welcome to my page! My name is Nina, I'm from the southwest suburbs of chicago. I am a senior this year majoring in Computer Science and Engineering.
          I started off college as a Math Education major, but switched to Engineering second semester my sophmore year. I was nervous at first, but I am really glad I decided to push myself and pursue something out of my comfort zone. 
          I can't wait to see where my career takes me in the near future! </p>
      </div>
      
      <div style = {{ backgroundColor: "lavender", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", display: "flex", alignItems: "center" }}>
        
        <img src = "src/pages/IMG_3307.jpeg" style = {{width: "300px", marginRight: "1cm", marginBottom: "3cm"}} />
        <p style={{ backgroundColor: "lavender", padding: "10px", borderRadius: "5px", marginBottom: "10px", display: "flex", fontSize: "17px", display: "flex" }}>This is my puppy, his name is Benny and he just turned 8 months old. He is the best dog in the world, I take him with me everywhere.</p>
        
        <img src = "src/pages/IMG_5860.jpeg" style = {{width: "300px", marginRight: "1cm", marginBottom: "3cm"}}/>
        <p style={{ backgroundColor: "lavender", padding: "10px", borderRadius: "5px", marginBottom: "10px", display: "flex", fontSize: "17px", display: "flex" }}>Pictured here is me, my mom, and sisters at an Iowa game this year. They are my best friends and I would do anything for them. I love my family very much.</p>
        
        <img src = "src/pages/IMG_8281.jpeg" style = {{width: "450px", marginBottom: "3cm"}}/>
        <p style={{ fontSize: "17px"}}>This is a picture of when I went to the Bahamas. I love traveling to new places and expanding my knowledge about different areas of the world. </p>
      </div>
    </div>
  );
}

export default Nina;
