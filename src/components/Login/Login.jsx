import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Login.module.css";
import { loginUser } from "../../apis/auth";
import axios from "axios";
import artPng from "../../assets/images/Art.png";
import emailPng from "../../assets/images/email.png";
import passwordPng from "../../assets/images/password.png";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser({ ...data });
    
      if (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user);
        Cookies.set("token", response.token);
        Cookies.set("username", response.user);
        if(response.message === "Logged in Successfully"){
          toast.success(response.message);
          navigate("/appboard");
        }
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main_container}>
      <strong>
        {/*<Toaster position="top-right" resolveOrder="false" />*/}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </strong>
      <div className={styles.art_container}>
        <div className={styles.art}>
          <img src={artPng} alt="Art" />
        </div>
        <div className={styles.art_heading}>
          <h1>Welcome aboard my friend</h1>
          <p>just a couple of clicks and we start</p>
        </div>
      </div>

      <div className={styles.form_container}>
        <div className={styles.form_heading}>Login</div>
        <form>
          <div className={styles.input}>
            <img src={emailPng} alt="" />
            <input
              placeholder="Email"
              type={"email"}
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.input}>
            <img src={passwordPng} alt="" />
            <input
              placeholder="Password"
              type={"password"}
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <button
            className={styles.submit_btn}
            type="submit"
            onClick={handleSubmit}
          >
            Log in
          </button>

          <label>Have no account yet ?</label>

          <button
            className={styles.register_btn}
            type="submit"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
