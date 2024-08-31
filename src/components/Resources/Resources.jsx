import React from 'react';
import { Card } from '../Card/Card';
import styles from './Resources.module.css';

export const Resources = () => {
  return (
    <div className={styles.cardGrid}>
      <Card
        title="Operating System Gate"
        image="https://etimg.etb2bimg.com/thumb/msid-102629171,imgsize-65730,width-1200,height=765,overlay-etgovernment/news/defence/know-maya-the-operating-system-that-will-replace-windows-in-defence-ministry.jpg"
        path="/OS-gate.pdf"
      />
       <Card
        title="DBMS Question Bank"
        image="https://www.cheggindia.com/wp-content/uploads/2023/08/dbms-full-form.png"
        path="/unit 1 dbms.pdf"
      />
      <Card
        title="Finite Automata Notes"
        image="https://cdn.botpenguin.com/assets/website/Finite_Automata_fa2402ccba.webp"
        path="/2-TOC-Introduction-Part-1-Done.pdf"
      />
      <Card
        title="Data Structure Notes U1-2"
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230706095706/intro-data-structure-%E2%80%93-1.png"
        path="/DSA_unit = 1_and_2_complete_pdf.pdf"
      />
      <Card
        title="Mathematics-3"
        image="https://media.geeksforgeeks.org/wp-content/uploads/20230503013704/Mathematics-Banner.webp"
        path="/Laplace Transform - Dr. Manoj Kumar Chande.pdf"
      />
    
      <Card
        title="Cryptography Importnat questions"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlp4C85buNkOjEbTs4RSRIiCxQ4WscSMpcg&s"
        path="/Important question for CT CNS.pdf"
      />
      <Card
        title="Microprocessor "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kQFhmQIrKpjYQYYBsp-gZaEgUbwrl9thfw&s"
        path="/Microprocessor_Architecture,_Programming,_and_Applications_with.pdf"
      />
      <Card
        title="Principle of Programming Language "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cw5FhBjbd8wtDTrbeSCtU4Mim8oQSPE8zQ&s"
        path="/Unit_3_PPL.pdf"
      />
    </div>
  );
};
