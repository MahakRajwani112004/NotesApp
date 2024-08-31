// src/components/ContactModal/ContactModal.jsx
import React from 'react';
import styles from './Modal.module.css'; // Import CSS module for styling

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.contactDetails}>
          <a href="https://wa.me/93029155XX" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/whatsapp-logo.png" alt="WhatsApp" className={styles.icon} />
            <p>93029155XX</p>
          </a>
          <a href="mailto:mahakrajwani92@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/email-logo.png" alt="Email" className={styles.icon} />
            <p>mahakrajwani92@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};
