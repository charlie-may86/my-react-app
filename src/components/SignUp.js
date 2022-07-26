import React, { useState } from "react";
import axios from "axios";

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

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/auth/register", credentials)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={register}>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleCredentials}
        />
        <input
          type="username"
          name="username"
          value={credentials.username}
          onChange={handleCredentials}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleCredentials}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
