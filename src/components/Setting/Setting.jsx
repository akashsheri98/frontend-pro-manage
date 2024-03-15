import React from "react";
import styles from "./Setting.module.css";
import { useState } from "react";
import passwordPng from "../../assets/images/password.png";
import emailPng from "../../assets/images/email.png";
import Cookies from "js-cookie";
import { settings } from "../../apis/auth";
//import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Setting = () => {
    
  const [data, setData] = useState({

    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await settings({ ...data });
      debugger;
      if (response) {
        
        if(response.message === "Password reset successfully"){
          localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user);
        Cookies.set("token", response.token);
        Cookies.set("username", response.user);
          toast.success(response.message);
         
        }
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.settings_main}>
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
      <h5 className={styles.settings_title}>Settings</h5>
      <div className={styles.settings}>
        <form className={styles.settings_form}>
          <div className={styles.input}>
            <img src={emailPng} alt="" />
            <input
              className={styles.user_input}
              placeholder="Username"
              type={"text"}
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <img src={passwordPng} alt="" />
            <input
              className={styles.user_input}
              placeholder="Old Password"
              type={"password"}
              name="oldPassword"
              value={data.oldPassword}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <img src={passwordPng} alt="" />
            <input
              className={styles.user_input}
              placeholder="New Password"
              type={"password"}
              name="newPassword"
              value={data.newPassword}
              onChange={handleChange}
            />
          </div>
          <button
            className={styles.logout_btn}
            id={styles.login_btn}
            type="submit"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
