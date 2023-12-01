import Commento from "../components/commento";
import InfiniteCarousel from "../components/infinitecarousel";
import dannypicture from "../assets/danny.jpg";
import d1 from "../assets/d1.jpeg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpeg";
import d4 from "../assets/d4.jpeg";

function Danny() {
  const carouselItems = [
    { src: d1, alt: "Fishing with Cassidy" },
    { src: d2, alt: "My Family" },
    { src: d3, alt: "Trout Fishing" },
    { src: d4, alt: "Snowboarding with Cassidy" },
  ];

  return (
    <div>
      <div className="flex px-40">
        <div className="bg-slate-100 rounded-xl flex flex-col flex-grow">
          <div className="p-8 flex items-center min-w-max">
            <img
              src={dannypicture}
              alt="Profile Picture"
              className="rounded-full w-36 h-36 border-4 border-blue-500"
            />
          </div>
          <div className="pl-8 pb-8">
            <h3 className="text-3xl">Danny B.</h3>
            <h6 className="text-lg text-gray-500">Developer</h6>
          </div>
        </div>
        <div className="my-4 mx-8">
          <p>
            Hello! I am a senior majoring in CSE and minoring in Business
            Administration. I am from Iowa City so this is my real home! As a
            CSE major I hope to get a job in software development. I have some
            experience so far with web development in the University of Iowa IT
            department, developing for Prof. Stump on his StarExec project, and
            developing a time tracking app for All American Concrete. <br />
            <br />
            Outside of school I am happily married to my wife Cassidy, we have
            been married for 1.5 years! In my free time I enjoy golfing, fishing
            and snowboarding. Since I am from the area I also spend a lot of
            time with my family. <br /><br />SDG
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-100 py-16 mt-16">
        <InfiniteCarousel items={carouselItems} />
      </div>
      <div className="my-8 mx-40">
        <Commento id={1} />
      </div>
    </div>
  );
}

export default Danny;
