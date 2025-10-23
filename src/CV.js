import React from 'react';
import './CV.css';

function CV() {
  return (
    
    <div className="cv-container">
      
      {}
      <header>
        <h1>Sakthi Hariharan V</h1>
        <hr />
        <p className="subtitle">Aspiring Full Stack Web Developer</p>
        <address>
          <p>14th buddhar street,GN Pudhur</p>
          <p>Sriramapuram,Dindigul-624622</p>
          <p>7708619013</p>
          <p><a href="mailto:sakthihariharan407@gmail.com">sakthihariharan407@gmail.com</a></p>
        </address>
      </header>

      {}
      <main>
        {}
        <section className="skills">
          <h2>Skills</h2>
          <p>
             React, node.js, javascript,Git, Github, Agile and Scrum methodologies
          </p>
        </section>

        {}
        <section className="education">
          <h2>Education</h2>
          <article>
            <h3>SSMIET, DINDIGUL - B.E(CSE)</h3>
            <p className="date">November 2022 to May 2026</p>
            <ul>
              <li>I have led an communication club in my college</li>
              <li>Got multiple prizes in English essay writing</li>
              <li>Prizes in chess and Badminton </li>
            </ul>
          </article>
        </section>

        {}
        <section className="experience">
          <h2>Experience</h2>
          
          <article>
            <h3>JP Morgan Chase, Texas- Financial Analyst</h3>
            <p className="date">March 2027 to March 2028</p>
            <ul>
              <li>Best employee of the month</li>
              <li>Financial skill expert</li>
            </ul>
            <p className="skills-used">
              <strong>Skills:</strong><ul>
                <li>Taxes</li>
                <li>Financial Planning</li>
                <li>Sales</li>
                <li>Scaling</li>
              </ul>
            </p>
          </article>
          
          <article>
            <h3>Berkshire Hathaway, Washington - Business Analyst</h3>
            <p className="date">october 2028 to present</p>
            <ul>
              <li>Best Business executive</li>
              <li>Got appreciations from Warren Buffet for best negotiation skills</li>
              
            </ul>
            <p className="skills-used">
              <strong>Skills:</strong><ul>
                <li>Financial planning</li>
                <li>Bitcoin management</li>
                <li>Optimizing logistic costs</li>
              </ul>
            </p>
          </article>
        </section>

        {}
        <section className="online-presence">
          <h2>Across the Internet</h2>
          <ul>
            <li><a href="https://github.com/Sakthi160" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
            <li><a href="www.linkedin.com/in/sakthi-hariharan-vidyasagar-806bb4324" target="_blank" rel="noopener noreferrer"> LinkedIn Profile</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default CV;