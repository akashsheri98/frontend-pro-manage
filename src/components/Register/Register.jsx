import React from "react";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

import styles from "./Register.module.css";

import { registerUser } from "../../apis/auth";

import artPng from "../../assets/images/Art.png";
import emailPng from "../../assets/images/email.png";
import passwordPng from "../../assets/images/password.png";
import personPng from "../../assets/images/person.png";

const Register = () => {
  const navigate = useNavigate();
  //const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !data.username ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      toast.error("please fill all the fields");
      return;
    }
    try {
      const response = await registerUser({ ...data });

      if (response) {
        navigate("/register");
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
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
        <div className={styles.art_headings}>
          <h1>Welcome aboard my friend</h1>
          <p>just a couple of clicks and we start</p>
        </div>
      </div>

      <div className={styles.form_container}>
        <div className={styles.form_heading}>Register</div>
        <form>
          <div className={styles.input}>
            <img src={personPng} alt="Art" />
            <input
              placeholder="Name"
              type={"text"}
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div className={styles.input}>
            <img src={emailPng} alt="Art" />

            <input
              placeholder="Email"
              type={"email"}
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.input}>
            <img src={passwordPng} alt="Art" />
            <input
              placeholder="Password"
              type={"password"}
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.input}>
            <img src={passwordPng} alt="Art" />
            <input
              placeholder="Confirm Password"
              type={"password"}
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className={styles.submit_btn}
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
          <label>Have a account ?</label>
          <Link to="/login">
            <button
              className={styles.login_btn}
              type="submit"
              onClick={redirectToLogin}
            >
              log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
