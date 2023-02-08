import React, { Component, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if ((data.status = 201)) {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "/login-admin";
        }
      });
  }

  return (
    <div>
      <form className="signin" onSubmit={handleSubmit}>
        <h3 className="title">Sign In</h3>

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
           Log In
          </button>
        </div>
        <p className="href--">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
export default Login;
