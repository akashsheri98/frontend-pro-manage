import React, { useState } from 'react';
import styles from './Checklist.module.css';

const Checklist = () => {
  const [items, setItems] = useState([
    { name: 'Task to be done', checked: false },
    { name: 'Task done', checked: true },
    { name: 'Task to be done', checked: false },
   
  ]);

  const handleCheckboxChange = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <div className={styles.checklistContainer}>
      {items.map((item, index) => (
        <label key={index} className={styles.checklistItem}>
          <input
            className={styles.itemCheckbox}
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          <span className={styles.itemText}>{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Checklist;