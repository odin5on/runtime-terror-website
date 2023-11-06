import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello from Page 1!</h1>
    </div>
  );
}

export default Page1;
