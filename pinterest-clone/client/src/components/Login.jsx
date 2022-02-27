import React from "react";
import "./Login.css";

import { Navbar } from "./Navbarm";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="center">
        <input type="checkbox" id="click" />
        <label for="click" className="click-me">
          Login Form
        </label>
        <div className="content">
          <div className="text">LOGIN</div>
          <label for="click" id="times">
            x
          </label>
          <form>
            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
