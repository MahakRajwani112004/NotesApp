import React from 'react';
import styles from './CTCARD.module.css';

export const CTCARD= ({ title, yearButtonText, semesterButtonText, downloadButtonText, image, path }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <div className={styles.cardTitle}>{title}</div>
      <div>
        {yearButtonText && <a href={path} className={`${styles.cardButton} ${styles.secondary}`}>{yearButtonText}</a>}
        {semesterButtonText && <a href={path} className={`${styles.cardButton} ${styles.secondary}`}>{semesterButtonText}</a>}
        {downloadButtonText && <a href={path} className={styles.cardButton}>{downloadButtonText}</a>}
      </div>
    </div>
  );
};
