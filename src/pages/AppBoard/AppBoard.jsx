import React from "react";
import styles from "./AppBoard.module.css";
import { useState, useEffect } from "react";
import Todo from "../../components/Todo/Todo";
import Done from "../../components/Done/Done";
import Inprogress from "../../components/Inprogress/Inprogress";
import Backlog from "../../components/Backlog/Backlog";
import Cookies from "js-cookie";
const AppBoard = () => {
  //take the token from local storage and decode the user name and display it
  const [userName, setUserName] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    const username =
      localStorage.getItem("username") || Cookies.get("username");
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setUserName(username);
    setFormattedDate(formattedDate);
  }, []);

  return (
    <div className={styles.AppBoard}>
      <div className={styles.header}> 
        <div className={styles.navbar}>
          <h3>
            Welcome! &nbsp; <span className={styles.capital}>{userName}.</span>
          </h3>
          <h2>Board</h2>
        </div>
        <div>{formattedDate}</div>
      </div>

      <div className={styles.boards_outer}>
        <Backlog />
        <Todo /*setOpenPopup={setOpenPopup} openPopup={openPopup}*/ />
        <Inprogress />
        <Done />
      </div>
      {/* <div className={styles.group_tab}> 
   {openPopup && <Addtodo/>}
   </div> */}
    </div>
  );
};

export default AppBoard;
