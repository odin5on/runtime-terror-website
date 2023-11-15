import { useNavigate } from "react-router-dom";

const ContactCard = ({ name, picture, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      className="h-full bg-slate-100 rounded-xl flex flex-col flex-grow hover:scale-105 cursor-pointer hover:bg-slate-200 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="p-8 flex items-center">
        <img
          src={picture}
          alt="Profile Picture"
          className="rounded-full w-36 h-36 border-4 border-blue-500"
        />
        <p className="text-lg pl-8">
          Here is a little info about me! Click on this card to learn more about
          me!
        </p>
      </div>
      <div className="pl-8 pb-8">
        <h3 className="text-3xl">{name}</h3>
        <h6 className="text-lg text-gray-500">Developer</h6>
      </div>
    </div>
  );
};

export default ContactCard;
