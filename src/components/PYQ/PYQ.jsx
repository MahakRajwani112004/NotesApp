import React from 'react'
import { CTCARD} from '../CT Card/CTCARD';

export function PYQ(props) {
    

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      <CTCARD
        title="Principle of Programming Lanugage"
        image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2021 Nov-Dec"
        semesterButtonText="Semester 3"
        downloadButtonText="Download"
        path="/B022313(022) (1) nov-dec 2021.pdf"
      />
      <CTCARD
        title="Operating System"
         image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2020 Nov-Dec"
        semesterButtonText="Semester 3"
        downloadButtonText="Download"
        path="/Operating System - 2020.pdf"
      />
      <CTCARD
        title="Digital Electronic"
        image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2022 April-May"
        semesterButtonText="Semester 3"
        downloadButtonText="Download"
        path="/B022314(022)_Apr-May-22.pdf"
      />
      <CTCARD
        title="Mathematics-3"
        image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2022 April-May(AICTE)"
        semesterButtonText="Semester 3"
        downloadButtonText="Download"
        path="/2022-Mathematics- Apr. May (AICTE).pdf"
      />
      <CTCARD
        title="Computer Science and Architeture"
         image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2021 Nov-Dec(AICTE)"
        semesterButtonText="Semester 4"
        downloadButtonText="Download"
        path="/2021-Nov-Dec CSA (AICTE).pdf"
      />
      <CTCARD
        title="Design and Analysis of Algorithrm"
        image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2021 Nov-Dec(AICTE)"
        semesterButtonText="Semester 4"
        downloadButtonText="Download"
        path="/2021-Nov-Dec-Design & Analysis of Algorithms (AICTE).pdf"
      />
      <CTCARD
        title="Database Management System"
        image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2022 April-May"
        semesterButtonText="Semester 4"
        downloadButtonText="Download"
        path="/2022-Apr-May.pdf"
      />
      <CTCARD
        title="Discrete Mathematics"
        image="https://miro.medium.com/v2/resize:fit:640/0*YRnLQLPRJMQh3hu1.jpg"
        yearButtonText="2021 April-May"
        semesterButtonText="Semester 4"
        downloadButtonText="Download"
        path="/2021.pdf"
      />
      </div>
    );
    
}
