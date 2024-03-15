import React from "react";
import styles from "./Analytics.module.css";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { AnalyticsData } from "../../apis/analytics";
import { logoutUser } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
const Analytics = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    lowPriorityCount: 0,
    highPriorityCount: 0,
    moderatePriorityCount: 0,
    dueDatesCount: 0,
    backlogCount: 0,
    doneCount: 0,
    inProgressCount: 0,
    todoCount: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AnalyticsData();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

  //logout
  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("token");
    navigate("/login");
    logoutUser();
  };
  return (
    
    <div className={styles.card_main}>
      <h3 className={styles.card_title}>Analytics</h3>
      {data && Object.keys(data).length === 0 ? (
        <ul>
          <li>No data available</li>
        </ul>
      ) : (
        <div className={styles.cards}>
          <ul className={styles.left_card}>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>Backlog tasks</p>
                <p>{data.backlogData}</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>Todo tasks</p>
                <p>{data.toDoData}</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>In-progress tasks</p>
                <p>{data.inProgressData}</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>Completed tasks</p>
                <p>{data.doneData}</p>
              </div>
            </li>
          </ul>

          <ul className={styles.right_card}>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>Low priority</p>
                <p>{data.priorityLowData}</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>Moderate priority</p>
                <p>{data.priorityMidumData}</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>High priority </p>
                <p>{data.priorityHighData}</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.list_item}>
                <p>Due Date tasks</p>
                <p>{data.dueDates}</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Analytics;
