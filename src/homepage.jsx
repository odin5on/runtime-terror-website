import ContactCard from "./components/contactcard";

import dannypicture from "./assets/danny.jpg";
import NinasPic from "./assets/profilePic.png";
import profile from "./pages/image4.png";
import addieprofile from "./pages/addie_pics/cover_pic.png";

const dannybio = { major: "CSE", hometown: "Iowa City, IA", dreamjob: "Photographer for Redbull" };
const jordinbio = { major: "EE", hometown: "Cedar Rapids, IA", dreamjob: "A spy" };
const addiebio = { major: "CSE", hometown: "Iowa City, IA", dreamjob: "Dance Choreographer" };
const ninabio = { major: "CSE", hometown: "Frankfort, IL", dreamjob: "Interior Designer" };


function HomePage() {
  return (
    <div className="flex justify-center items-center px-40">
      <div className="grid grid-cols-2 gap-8 justify-center justify-items-center">
        <ContactCard name="Danny Bodin" picture={dannypicture} to="/danny" major={dannybio.major} hometown={dannybio.hometown} dreamjob={dannybio.dreamjob} />
        <ContactCard name="Jordin Eicher" picture={profile} to="/jordin" major={jordinbio.major} hometown={jordinbio.hometown} dreamjob={jordinbio.dreamjob}/>
        <ContactCard name="Addie Schroeder" picture={addieprofile} to="/addie" major={addiebio.major} hometown={addiebio.hometown} dreamjob={addiebio.dreamjob}/>
        <ContactCard name="Nina Baffo" picture={NinasPic} to="/nina" major={ninabio.major} hometown={ninabio.hometown} dreamjob={ninabio.dreamjob} />
      </div>
    </div>
  );
}

export default HomePage;
