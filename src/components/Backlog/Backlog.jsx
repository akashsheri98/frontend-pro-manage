import React from "react";
import styles from "./Backlog.module.css";
import { Layers } from "react-feather";
const Backlog = () => {
  return (
    <div className={styles.boards_inner}>
      {/* <Board/> */}

      <div className={styles.Board}>
        <div className={styles.board_top}>
          <p className={styles.board_top_title}>Backlog </p>
          <Layers style={{ padding: "0.5rem" }}/>
        </div>
        <div className={styles.card}>
          {/* apply loop or map func here and suplly props to card so that multiple card details fetches  */}
          {/* <Card/>   */}
          {/* <Card/>  
    <Card/>   */}
        </div>
      </div>
    </div>
  );
};

export default Backlog;
