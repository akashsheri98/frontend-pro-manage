import React from "react";
import styles from "./Todo.module.css";
import Card from "../Card/Card";
import AddTodo from "../AddTodo/AddTodo";
import { Layers, Plus } from "react-feather";
import { useState } from "react";
const Todo = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const onClose = () => {
        setOpenPopup(false);
    };
  const HandlePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className={styles.boards_inner}>
        <div className={styles.Board}>
          <div className={styles.board_top}>
            <p className={styles.board_top_title}> To Do </p>
            <div className={styles.icons}>
              <Plus
                className={styles.plus}
                onClick={() => {
                  setOpenPopup(!openPopup);
                }}
              />
              <Layers />
            </div>
          </div>
          <div className={styles.card}>
            {/* apply loop or map func here and suplly props to card so that multiple card details fetches  */}
            {<Card/>   }
            {/* <Card/>  
       <Card/>   */}
          </div>
        </div>
      </div>
      {openPopup && (
        <div className={styles.group_tab} onClick={(e) => HandlePopup(e)}>
          {openPopup && <AddTodo onClose={onClose} />}
        </div>
      )}
    </>
  );
};

export default Todo;
