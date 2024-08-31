import React from "react";
import { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Modal } from "../MODAL/Modal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mahak</h1>
        <p className={styles.description}>
        Hi, I'm Mahak, your final-year senior, here to provide you with notes, guidance, and support. Let's connect!
        </p>
        <div>
      {/* Your other content */}
      <button onClick={openModal} className={styles.contactBtn}>
        Contact Me
      </button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
      </div>
      <img
        src={getImageUrl("hero/p.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
