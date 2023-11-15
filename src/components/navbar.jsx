import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex w-full justify-between border-black p-16">
        <div className="ml-16 cursor-pointer" onClick={handleClick}>
          <p className="text-5xl">Runtime Terror</p>
        </div>
        <button className="text-3xl border-2 border-black bg-slate-100 p-2 rounded-lg mr-16 hover:scale-110 cursor-pointer hover:bg-slate-200 transition-all duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
