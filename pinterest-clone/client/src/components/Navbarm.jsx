import "./Navbarm.css";
import { Link } from "react-router-dom";

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}

export const Navbar = () => {
  const signUp = async () => {
    // e.preventDefault();

    console.log("abc");
    let emailS = document.getElementById("emailS").value;
    let passS = document.getElementById("passS").value;
    let user_data = {
      email: emailS,
      password: passS,
    };
    let data = JSON.stringify(user_data);

    let res = await fetch("https://pinterest-backend8.herokuapp.com/register", {
      method: "POST",
      body: data,
    });

    res = await res.json();
    console.log(res);
    let token = res.token;
  };

  const logIn = async () => {
    // e.preventDefault();

    console.log("abc");
    let emailL = document.getElementById("emailL").value;
    let passL = document.getElementById("passL").value;
    let user_data = {
      email: emailL,
      password: passL,
    };
    let data = JSON.stringify(user_data);
    console.log(data);

    let res = await fetch("https://pinterest-backend8.herokuapp.com/login", {
      method: "POST",
      body: data,
    });

    res = await res.json();
    console.log(res);
    let token = res.token;
  };

  return (
    <div className="nav">
      <img className="pic" src="plogo.png"></img>
      <div className="abp">
        <Link to="/About" className="link">
          About
        </Link>
        <Link to="/bus" className="link">
          Business
        </Link>
        <Link to="/blo" className="link">
          Blog
        </Link>
      </div>

      <div className="logina">
        <button
          className="login"
          onClick={() => {
            openForm();
          }}
        >
          Login
        </button>

        <button
          className="Signup"
          onClick={() => {
            openForm1();
          }}
        >
          Signup
        </button>
      </div>

      <div>
        <div className="form-popup" id="myForm">
          <form className="form-container">
            <img className="logoimg1" src="p.png"></img>
            <h1 className="headinglogin1">Welcome back</h1>

            {/* <label for="email"><b>Email:</b></label> */}
            <input type="text" placeholder="Enter Email" id="emailL" required />

            {/* <label for="psw"><b>Password: </b></label> */}
            <input
              type="password"
              placeholder="Enter Password"
              id="passL"
              required
            />

            <button
              type="submit"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                logIn();
              }}
            >
              Login
            </button>

            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                closeForm();
              }}
            >
              Close
            </button>

            <hr className="hr"></hr>

            <h1 className="loginc">
              {" "}
              Not you? Log in with a different account
            </h1>
            <h1 className="loginc1"> Need an account? Sign up now</h1>
          </form>
        </div>

        <div className="form-popup" id="myForm1">
          <form className="form-container">
            <img className="logoimg1" src="p.png"></img>
            <h1 className="headingsignup">Welcome to Pinterest</h1>
            <h2 className="headingsignup1">Find new ideas to try</h2>

            <input type="text" placeholder="Enter Email" id="emailS" />
            <input type="password" placeholder="Enter Password" id="passS" />
            <input type="text" placeholder="Age" name="age" />

            <button
              type="submit"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              Signup
            </button>

            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                closeForm1();
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
