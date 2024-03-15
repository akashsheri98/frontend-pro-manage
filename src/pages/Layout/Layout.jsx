import React ,{useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
//import Addtodo from '../Addtodo/Addtodo'
import styles from './Layout.module.css';  


const Layout = () => {
    const [open, setOpen] = useState(false);

  return (
    <div style={{display:"flex"}}>
        <Sidebar />
      {/* { openPopup && <div className={styles.group_tab} onClick={(e) =>HandlePopup(e)}> 
       {openPopup && <Addtodo onClose={onClose}/>}
       </div> 
       } */}
        <Outlet />
    </div>
  )
};

export default Layout