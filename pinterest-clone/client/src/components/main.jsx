import { Navbar } from "./Navbarm";
import SimpleSlider from "./carm";
import { Card} from "./cardm"


import React from "react";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Card/>
    </div>
  );
};
