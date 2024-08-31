// src/components/Card/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export const Card = ({ title, image, path }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <Link 
      to={path} 
      className={styles.cardLink} 
      onClick={(e) => {
        e.preventDefault(); // Prevent default Link behavior
        window.open(path); // Open the path in a new tab
        history.push('/'); // Navigate to the home page
      }}
    >
      Download Resource
    </Link>
      
      
      </div>
    </div>
  );
};
