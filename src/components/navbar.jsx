import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-around border-b-2 border-black">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/page1")}>Page 1</button>
      <button onClick={() => navigate("/page2")}>Page 2</button>
    </div>
  );
}

export default Navbar;
