import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-around border-b-2 border-black">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/danny")}>Danny</button>
      <button onClick={() => navigate("/jordin")}>Jordin</button>
      <button onClick={() => navigate("/addie")}>Addie</button>
      <button onClick={() => navigate("/nina")}>Nina</button>
    </div>
  );
}

export default Navbar;
