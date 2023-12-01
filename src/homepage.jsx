import ContactCard from "./components/contactcard";

import dannypicture from "./assets/danny.jpg";
import NinasPic from "./assets/profilePic.png";
import sid from "./assets/sid.jpg";
import profile from "./pages/image4.png";

function HomePage() {
  return (
    <div className="flex justify-center items-center px-40">
      <div className="grid grid-cols-2 gap-8 justify-center justify-items-center">
        <ContactCard name="Danny Bodin" picture={dannypicture} to="/danny" />
        <ContactCard name="Jordin Eicher" picture={profile} to="/jordin" />
        <ContactCard name="Addie Schroeder" picture={sid} to="/addie" />
        <ContactCard name="Nina Baffo" picture={NinasPic} to="/nina" />
      </div>
    </div>
  );
}

export default HomePage;
