import React from 'react';
import './App.css'; // Import external CSS file
import profile from './assets/Pic.jpg';
import whatsapp from './assets/whatsappicon.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twittericon.png';
import youtube from './assets/youtube.png';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="headerContent">
          <div className="profilePic">
            <img src={profile} alt="Profile" className="profileImg" />
          </div>
          <div className="intro">
            <h1>Muhammad Salman Ahmad</h1>
            <p className="introText">Computing Student, Artificial Intelligence</p>
          </div>
        </div>
      </header>

      <nav className="navigation">
        <ul className="navList">
          <li><a href="#education" className="navLink">Educational History</a></li>
          <li><a href="#skills" className="navLink">Professional Skills</a></li>
          <li><a href="#projects" className="navLink">Professional Projects</a></li>
          <li><a href="#hobbies" className="navLink">Hobbies</a></li>
          <li><a href="#ambitions" className="navLink">Life Ambitions</a></li>
          <li><a href="#efforts" className="navLink">Efforts for Country</a></li>
          <li className="contactLink"><a href="#contact" className="navLink">Contact Me</a></li>
        </ul>
      </nav>

      <section id="education" className="section">
        <h2>Educational History</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Sr. No.</th>
              <th className="th">Degree Title</th>
              <th className="th">Passing Year</th>
              <th className="th">Total Marks</th>
              <th className="th">Obtained Marks</th>
              <th className="th">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">1.</td>
              <td className="td">Bachelor of Computer Science</td>
              <td className="td">2024</td>
              <td className="td">4.0</td>
              <td className="td">3.91</td>
              <td className="td">83.5%</td>
            </tr>
            <tr>
              <td className="td">2.</td>
              <td className="td">Intermediate</td>
              <td className="td">2020</td>
              <td className="td">1100</td>
              <td className="td">925</td>
              <td className="td">84%</td>
            </tr>
            <tr>
              <td className="td">3.</td>
              <td className="td">Matriculation</td>
              <td className="td">2018</td>
              <td className="td">1100</td>
              <td className="td">936</td>
              <td className="td">85%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="skills" className="section">
        <h2>Professional Skills</h2>
        <ul className="sectionList">
          <li className="listItem">Computing Student</li>
          <li className="listItem">Web Developer</li>
          <li className="listItem">Artificial Intelligence</li>
          <li className="listItem">Server Management</li>
          <li className="listItem">System Configuration</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Professional Projects</h2>
        <ul className="sectionList">
          <li className="listItem">Web Designing</li>
          <li className="listItem">Intelligent Model</li>
          <li className="listItem">Model Training</li>
          <li className="listItem">System Configuration</li>
        </ul>
      </section>

      <section id="hobbies" className="section">
        <h2>Hobbies</h2>
        <ul className="sectionList">
          <li className="listItem">Traveling</li>
          <li className="listItem">Capturing Nature</li>
          <li className="listItem">Exploring new areas</li>
        </ul>
      </section>

      <section id="ambitions" className="section">
        <h2>Life Ambitions</h2>
        <ul className="sectionList">
          <li>
            <strong>Achieved:</strong>
            <ul>
              <li className="listItem">Graduating From College</li>
              <li className="listItem">Learning different skills</li>
              <li className="listItem">Learning about Designing</li>
            </ul>
          </li>
          <li>
            <strong>Struggling:</strong>
            <ul>
              <li className="listItem">To Achieve my own identity</li>
              <li className="listItem">Making my Parents proud of me!</li>
              <li className="listItem">Being Nice with people</li>
              <li className="listItem">Becoming a Data Scientist</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="efforts" className="section">
        <h2>Efforts for Country</h2>
        <ul className="sectionList">
          <li>
            <strong>Succeeded:</strong>
            <ul>
              <li className="listItem">Organized a community cleanup</li>
              <li className="listItem">Raised awareness about a social issue</li>
              <li className="listItem">Healthcare Improvement</li>
            </ul>
          </li>
          <li>
            <strong>Struggling:</strong>
            <ul>
              <li className="listItem">Want to make charity & help people</li>
              <li className="listItem">Being a helpful Person</li>
              <li className="listItem">Infrastructure Development</li>
            </ul>
          </li>
        </ul>
      </section>

      <footer id="contact" className="footer">
        <div className="contactInfo">
          <p>Contact Email: 20011519-011@uog.edu.pk</p>
        </div>
        <div className="socialIcons">
          <a href="https://wa.me/923092874587"><img src={whatsapp} alt="WhatsApp" className="icon" /></a>
          <a href="https://facebook.com/your-facebook"><img src={facebook} alt="Facebook" className="icon" /></a>
          <a href="https://instagram.com/https://www.instagram.com/legend1_8/"><img src={instagram} alt="Instagram" className="icon" /></a>
          <a href="https://youtube.com/your-youtube"><img src={youtube} alt="YouTube" className="icon" /></a>
          <a href="https://twitter.com/your-twitter"><img src={twitter} alt="Twitter" className="icon" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
