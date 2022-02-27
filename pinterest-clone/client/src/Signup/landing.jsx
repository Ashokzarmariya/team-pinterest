import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbarm";
import SimpleSlider from "./carm";
import { Card } from "./cardm";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Card />
    </div>
  );
};
