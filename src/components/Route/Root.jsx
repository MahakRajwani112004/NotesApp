import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Contact } from '../Contact/Contact'
import { Outlet } from 'react-router-dom'
import styles from "../../App.module.css";

export function Root(props) {
    

    return (
        <>
             <div className={styles.App}>
            <Navbar/>
            <Outlet/>
            <Contact/>
            </div>
        </>
    )
}
