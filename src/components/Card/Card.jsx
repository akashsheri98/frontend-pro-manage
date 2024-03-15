import React from "react";
import styles from "./Card.module.css";
import { MoreHorizontal, ChevronDown } from "react-feather";
import { useState } from "react";
import Checklist from "../Checklist/Checklist";
//import Calendar from "../Calender/Calender";
const Card = () => {
  const [items, setItems] = useState([
    { name: 'backlog', checked: false }, 
    { name: 'inprogress', checked: false },   
    { name: 'done', checked: false },   
    //{ name: 'todo', checked: true },   

  ]);

  const [toggleList, setToggleList] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  
  const HandleChecklist = (e) => {
    e.preventDefault();
    setToggleList(!toggleList);
  };
  /*const handleCalendarClick = () => {
    setCalendarVisible(!calendarVisible);
  };
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setCalendarVisible(false);
  };*/
  return (
    <>
      <div className={styles.board_cards}>
        <div className={styles.card_top}>
          <div className={styles.card_label}>
            <div className={styles.card_priority_label}>
              <span className={styles.card_priority_label_color} />
              <h6>High Priority</h6>
            </div>
            <MoreHorizontal />
          </div>
          <div className={styles.card_title}>
            <h3>Hero Section</h3>
          </div>
          <div className={styles.checklist_header}>
            <p className={styles.checklist_info}>Checklist (0/3) </p>
            {<ChevronDown onClick={(e) => HandleChecklist(e)} />}
          </div>
          <div className={styles.checklists}>
            {toggleList && <Checklist />}
          </div>
          <div className={styles.chips}>
           {/* <div
              className={styles.calender}
              typeof="button"
              onClick={handleCalendarClick}
            >
              <p>{selectedDate || "due Date"}</p>
              {calendarVisible && <Calendar onSelect={handleDateSelect} />}
             </div>*/}
            {/*<Taskchips />*/}
            <div className={styles.task_chips}>
              {items.map((item, index) => (
                <div key={index} className={styles.chips_outer}>
                  <span className={styles.chips}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
