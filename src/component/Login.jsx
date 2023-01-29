import axios from "axios";
import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "../auth/context";
import "../css/login.css";
import Loader from "./Loader";
const Login = () => {
  const [token, setToken] = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  console.log(token);
  const URL = "http://35.91.35.188/api/login";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(URL, data);
    try {
      setToken(res.data.token);
      setData({});
    } catch (error) {
      console.log(error);
      alert("pending");
    }
    setLoading(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <section className="login_wrapper">
          <form className="login_section" onSubmit={handleUserLogin}>
            <div>
              <p>Login Here</p>
              <input
                className="form-control"
                placeholder="Enter Your Email"
                onChange={handleInput}
                type="email"
                value={data.email}
                name="email"
              />
              <input
                className="form-control"
                placeholder="Enter Your Password"
                onChange={handleInput}
                type="password"
                value={data.password}
                name="password"
              />
              <button className="btn" type="submit">
                {loading ? "Lading..." : "Login"}
              </button>
            </div>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default Login;
