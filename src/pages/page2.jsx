import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello from Page 2!</h1>
    </div>
  );
}

export default Page2;
