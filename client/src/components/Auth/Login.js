import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, user)
      .then(response => {
        console.log(response.data.payload);
        localStorage.setItem("token", response.data.payload);
      })
      .catch(err => console.log(err));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChanges}
          value={user.username}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChanges}
          value={user.password}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
