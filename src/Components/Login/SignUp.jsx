import React, { Component, useState } from "react";
import "./Login.css";

export default function SignUp() {
  const [name, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    if (secretKey !== "Omeir") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(name, email, password);
      fetch("https://oportfolio.onrender.com/users/", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === 201) {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div>
      <div>
        <form className="signin" onSubmit={handleSubmit}>
          <h3 className="title">Sign Up</h3>

          <div>
            <label className="label--">Secret Key</label>
            <input
              className="input--"
              type="text"
              placeholder="Secret Key"
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>

          <div>
            <label className="label--">First name</label>
            <input
              className="input--"
              type="text"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div>
            <label className="label--">Email address</label>
            <input
              className="input--"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="label--">Password</label>
            <input
              className="input--"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="button--" type="submit">
              Sign Up
            </button>
          </div>
          <p className="href--">
            Already registered <a href="/login-admin"> sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
