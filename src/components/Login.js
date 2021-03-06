import React, { useState } from "react";
// import axios from "axios";

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

  const login = (e) => {
   
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleCredentials}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleCredentials}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
