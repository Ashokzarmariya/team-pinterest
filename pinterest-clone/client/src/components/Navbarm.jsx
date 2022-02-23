import "./Navbarm.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <img className="pic" src="plogo.png"></img>
      <div className="abp">
        <a href="about.html" target="blank">
          About
        </a>
        <a href="about.html" target="blank">
          Business
        </a>
        <a href="about.html" target="blank">
          Press
        </a>

        <a className="login text-white" href="about.html" target="blank">
          Login
        </a>
        <a className="signup" href="about.html" target="blank">
          Signup
        </a>
      </div>
    </div>
  );
};
