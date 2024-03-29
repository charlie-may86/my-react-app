import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/signup");
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/auth/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/userPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={login} className="homePageLogin">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleCredentials}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleCredentials}
        />

        <button className="loginRegister">Log in</button>
        <button className="loginRegister" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
