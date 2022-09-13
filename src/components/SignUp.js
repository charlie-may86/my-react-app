import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/auth/register", credentials)
      .then((res) => {
        console.log(res);
        navigate("/userPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signUp">
      <form onSubmit={register}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleCredentials}
        />
        <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          value={credentials.username}
          onChange={handleCredentials}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleCredentials}
        />
        <button className="loginRegister">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
