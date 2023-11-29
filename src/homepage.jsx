import ContactCard from "./components/contactcard";

import dannypicture from "./assets/danny.jpg";
import NinasPics from "./src/assets/NinasPics/profilePic.png";
import sid from "./assets/sid.jpg";

function HomePage() {
  return (
    <div className="flex justify-center items-center px-40">
      <div className="grid grid-cols-2 gap-8 justify-center justify-items-center">
        <ContactCard name="Danny Bodin" picture={dannypicture} to="/danny" />
        <ContactCard name="Jordin Eicher" picture={sid} to="/jordin" />
        <ContactCard name="Addie Schroeder" picture={sid} to="/addie" />
        <ContactCard name="Nina Baffo" picture={NinasPics} to="/nina" />
      </div>
    </div>
  );
}

export default HomePage;
