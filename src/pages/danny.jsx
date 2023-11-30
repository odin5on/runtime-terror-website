import InfiniteCarousel from "../components/infinitecarousel";
import dannypicture from "../assets/danny.jpg";
import sidpicture from "../assets/sid.jpg";

function Danny() {
  const carouselItems = [
    { src: sidpicture, alt: 'Sid' },
    { src: sidpicture, alt: 'Sid' },
    { src: sidpicture, alt: 'Sid' },
    { src: sidpicture, alt: 'Sid' },
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
        <div className="m-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            laudantium nam quo fugiat. Eius fugit, consequuntur nisi deserunt
            beatae odio natus cupiditate exercitationem necessitatibus
            perspiciatis aliquid praesentium. Voluptatum, velit repellendus!
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-100 py-16 mt-16">
        <InfiniteCarousel items={carouselItems} />
      </div>
    </div>
  );
}

export default Danny;
