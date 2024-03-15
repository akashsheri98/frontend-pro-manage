import React from "react";

import styles from "./Sidebar.module.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../apis/auth";
import { NavLink } from "react-router-dom";
import layout from "../../assets/images/layout.png";
import db_img from "../../assets/images/database.png";
import settings_img from "../../assets/images/settings.png";
import logo from "../../assets/images/codesandbox.png";
import logout from "../../assets/images/Logout.png";

const Sidebar = () => {
    const navigate = useNavigate();
    const logoutperson = () => {
      Cookies.remove("token");
      localStorage.removeItem("token");
      Cookies.remove("username");
      localStorage.removeItem("username");
      
      navigate("/login");
      logoutUser();
    };
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <img src={logo} alt="" />
        <span className={styles.logo_img}>Pro Manage</span>
      </div>
      <div className={styles.menu_container}>
        <ul className={styles.menu}>
          <li className={styles.menu_list}>
            <img src={layout} alt="" />
            <NavLink className={styles.navlink}  to="/appboard">
              Dashboard
            </NavLink>
          </li>
          <li className={styles.menu_list}>
            <img src={db_img} alt="" />
            <NavLink className={styles.navlink}  to="/analytics">
              Analytics
            </NavLink>
          </li>
          <li className={styles.menu_list}>
            <img src={settings_img} alt="" />
            <NavLink className={styles.navlink}  to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.logout}>
      
      <button onClick={logoutperson} className={styles.logout_btn}><img style={{width:"20px" , height:"20px" , margin:"5px"}} src={logout} alt="" />Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
