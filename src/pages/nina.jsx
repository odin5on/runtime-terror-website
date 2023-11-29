import React from "react";

function Nina() {
  return (
    <div>
      <div style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", marginRight: "1cm", display: "flex", alignItems: "center" }}>
      <p style={{ fontWeight: "bold", fontSize: "17px" }}>Nina Baffo</p>
        <img src = {"src/assets/profilePic.png"} style = {{width: "250px"}}/>
 
        <p style={{ marginLeft: "1cm", fontWeight: "bold", fontSize: "17px"}}>About me:</p>

        <p style={{ backgroundColor: "lightpink", padding: "10px", borderRadius: "5px", marginLeft: "1cm", marginRight: "1cm", marginBottom: "1.5cm", fontSize: "17px"}}>Hi and welcome to my page! My name is Nina, I'm from the southwest suburbs of chicago. I am a senior this year majoring in Computer Science and Engineering.
          I started off college as a Math Education major, but switched to Engineering second semester my sophmore year. I was nervous at first, but I am really glad I decided to push myself and pursue something out of my comfort zone. 
          I can't wait to see where my career takes me in the near future! </p>
      </div>
      
      <div style = {{ backgroundColor: "lavender", padding: "10px", borderRadius: "5px", marginBottom: "10px", marginLeft: "1cm", marginRight: "1cm", display: "flex", alignItems: "center" }}>
       <div style={{ marginRight: "1cm", marginLeft: "1cm"}}>
        <img src = {"/src/assets/puppy.jpeg"} style = {{width: "300px", marginRight: "1cm", marginBottom: "1cm"}} />
          <p style={{ fontSize: "17px" }}>This is my puppy, his name is Benny and he just turned 8 months old. He is the best dog in the world, I take him with me everywhere.</p>
        </div>

        <div style={{ marginRight: "1cm", marginLeft: "1cm" }}>
        <img src = {"/src/assets/family.jpeg"} style = {{width: "300px", marginRight: "1cm", marginBottom: "0.5cm"}}/>
          <p style={{ fontSize: "17px" }}>Pictured here is me, my mom, and sisters at an Iowa game this year. They are my best friends and I would do anything for them. I love my family very much.</p>
        </div>
        
        <div style={{ marginRight: "1cm", marginLeft: "1cm" }}>
        <img src = {"/src/assets/bahamas.jpeg"} style = {{width: "800px", marginRight: "1cm", marginBottom: "1cm"}}/>
          <p style={{ fontSize: "17px" }}>This is a picture of when I went to the Bahamas. I love traveling to new places and expanding my knowledge about different areas of the world. </p>
        </div>
      </div>
    </div>
  );
}

export default Nina;
