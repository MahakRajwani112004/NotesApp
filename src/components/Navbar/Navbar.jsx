import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { NavLink } from "react-router-dom";// Import Link
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Modal } from "../MODAL/Modal";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/"> {/* Replace a with Link */}
        NotesProvider
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
          <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                isActive ? styles.activeLink : undefined
              }
            >
              Resources
            </NavLink>
          </li>
          <li>
          <NavLink 
              to="/CTPapers" 
              className={({ isActive }) => 
                isActive ? styles.activeLink : undefined
              }
            >
              CT Papers
            </NavLink>
          </li>
          <li>
            <Link to="/pyqs">PYQS</Link> {/* Replace a with Link */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Replace a with Link */}
          </li>
          <li>
            <Link to="/experience">Experience</Link> {/* Replace a with Link */}
          </li>
          <li>
            <Link to="/projects">Projects</Link> {/* Replace a with Link */}
          </li>
        
        </ul>
      </div>
    </nav>
  );
};
