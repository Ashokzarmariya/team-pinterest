import { About } from "./About";
import { Routes, Route } from "react-router-dom";

import React from "react";
import { Landing } from "./landing";
import { Business } from "./Business";
import { Blog } from "./Blog";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/bus" element={<Business />}></Route>
        <Route path="/blo" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
};
