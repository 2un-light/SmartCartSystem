import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import user from "./user.png";
import key from "./key.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';
import Register from "./Register"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = (e) => {
    e.preventDefault();

    console.log(username, password);

    const url = "http://localhost:5000/api/login";

    axios
      .post(url, {
        id: username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (!res.data) {
          alert("올바르지 않은 로그인 정보입니다.");
        } else {
          alert("로그인정보\n" + JSON.stringify(res.data, null, 2));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <header className="header">로그인</header>
      <form className="loginWrapper">
        <div className="inputBox">
          <div>
            <img src={user} />
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <div>
            <img src={key} />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to = "/"><button className="button">
          LOGIN
        </button></Link>
        <span
          style={{
            whiteSpace: "nowrap",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          아이디 찾기 | 비밀번호 찾기 | <Link to="/register">회원가입</Link>
        </span>
      </form>

    </>
  );
};

export default Login;