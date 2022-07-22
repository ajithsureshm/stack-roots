import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function SignupComponent() {
  const navigate = useNavigate();

  const [fullname, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit (e){

    e.preventDefault();

    let item = { fullname, email, password };

    console.log(item);

   let result = await fetch("https://hiring-stackroots-server.herokuapp.com/auth/signup/user",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })

    result = await result.json()
    console.log("result",result);
    navigate("/login");

  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="195px" height="65px" src={logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={fullname}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="fullname"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
          />

          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            pattern=".{8,20}"
            required
            title="8 to 20 characters"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default SignupComponent;
