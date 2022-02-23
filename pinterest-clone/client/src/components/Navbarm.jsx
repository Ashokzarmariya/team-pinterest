import "./Navbarm.css";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="nav">
      <img className="pic" src="plogo.png"></img>
      <div className="abp">
        <Link to="/About" className = "link">About</Link>
        <Link to = "/bus" className = "link">Business</Link>
        <Link to = "/blo" className = "link">Blog</Link>
        <Link to = "/login"  className = "login">Login</Link>  
        <Link to = "/signup" className = "signup">Signup</Link>
      </div>
    </div>
  );
};
