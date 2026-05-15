import { useState, useEffect } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';

function App() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="resume-app">
      <div className="container">
        {/* Left Section */}
        <div className="left">
          {/* Profile Image */}
          <div className="profile-image-container">
            <img src={profileImg} alt="Hatesh Lakhani" className="profile-image" />
          </div>

          <h1 className="name">HATESH LAKHANI</h1>

          {/* PROFILE SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">👤</span> PROFILE
            </h2>
            <p className="section-text">
              Result-driven and motivated Software Engineer with a demonstrated experience in improving
              software performance and updating existing software, and developing new software functionalities.
              Offers proven track record of extraordinary achievements, strong attention to detail, and ability to
              finish projects on schedule
            </p>
          </div>

          {/* WORK EXPERIENCE SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">💼</span> WORK EXPERIENCE
            </h2>
            <h3 className="subsection-title">Internship at Systems Limited, Karachi, Pakistan</h3>
            <p className="date-text">July 2023 - May 2024</p>

            <h4 className="achievements-title">ACHIEVEMENTS/TASKS</h4>
            <ul className="achievements-list">
              <li>Developed an E-commerce project using Java.</li>
              <li>The main purpose of the App is to store various types of data.</li>
              <li>Designed, maintained, and built reusable, efficient, and reliable java code.</li>
              <li>Developed the service layer that acts a bridge between the presentation layer and data access layer,
                using the spring framework.</li>
              <li>Implemented design patterns such as Singleton, Factory, Observer, Decorator, Adapter, and MVC
                to improve performance.</li>
              <li>Assisted in maintaining and updating existing applications and modules</li>
              <li>Implementing GIT for version control.</li>
            </ul>
          </div>

          {/* EDUCATION SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">🎓</span> EDUCATION
            </h2>
            <div className="education-item">
              <h4>BS (Software Engineering), Virtual University of Pakistan</h4>
              <p className="date-text">April 2022</p>
            </div>
            <div className="education-item">
              <h4>Intermediate, BISE (Board of Intermediate Secondary Education)</h4>
              <p className="date-text">April 2016</p>
            </div>
            <div className="education-item">
              <h4>Matriculation, Oxford High School, Mirpurkhas</h4>
              <p className="date-text">October 2014</p>
            </div>
          </div>

          {/* PROJECTS SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">📂</span> PROJECTS
            </h2>
            <ol className="projects-list">
              <li>
                <h4>Online Advertisement Management System (FYP):</h4>
                <ul>
                  <li>Developed a system to manage and monitor online ads.</li>
                  <li>Built a responsive interface with HTML, CSS, Bootstrap, and Java.</li>
                  <li>Managed databases with SQL Server and Documented with MS Office and Power Point Slides.</li>
                </ul>
              </li>
              <li>
                <h4>Travel and Tourism Management System:</h4>
                <ul>
                  <li>Created a system using Java and MySQL for backend processing.</li>
                  <li>Designed UI with HTML and CSS for a seamless experience.</li>
                  <li>Integrated booking, scheduling, and customer management features.</li>
                </ul>
              </li>
              <li>
                <h4>Facebook Clone Webpage:</h4>
                <ul>
                  <li>Built a static replica of the Facebook profile page using HTML and CSS.</li>
                  <li>Practiced responsive layout design and styling techniques.</li>
                  <li>Developed as a self-learning beginner project to strengthen core front-end skills.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <a href="/Hatesh-Lakhani-Resume.pdf" download className="download-link">
            <button className="download-btn">
              📄 Download Resume
            </button>
          </a>

          {/* DETAILS SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">📑</span> DETAILS
            </h2>
            <div className="details-list">
              <p><span className="detail-icon">📍</span> <strong>Address:</strong> Karachi, Pakistan</p>
              <p><span className="detail-icon">📱</span> <strong>Mob:</strong> +923332928556</p>
              <p><span className="detail-icon">📧</span> <strong>Email:</strong> hateshlakhani9@gmail.com</p>
            </div>
          </div>

          {/* SOCIAL LINKS SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">🔗</span> SOCIAL LINKS
            </h2>
            <ul className="social-links">
              <li><i className="fab fa-github"></i> GitHub Profile: <a href="https://github.com/hatesh1" target="_blank" rel="noopener noreferrer">hatesh1</a></li>
              <li><i className="fab fa-linkedin"></i> LinkedIn Profile: <a href="https://www.linkedin.com/in/hatesh-lakhani" target="_blank" rel="noopener noreferrer">hatesh-lakhani</a></li>
            </ul>
          </div>

          {/* SKILLS SECTION */}
          <div className="section">
            <h2 className="section-heading">
              <span className="icon">🛠️</span> SKILLS
            </h2>

            <div className="skill-item">
              <h4>Programming Languages:</h4>
              <p>Java, JavaScript</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>OOP (Object Oriented Programming)</h4>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Web Technologies:</h4>
              <p>HTML, CSS, JSON</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Databases:</h4>
              <p>(RDBMS) MySQL</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Java Technologies:</h4>
              <p>Servlets, JSP, JDBC</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Framework:</h4>
              <p>Spring Boot</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Hibernate (ORM)</h4>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Web Services:</h4>
              <p>RESTful</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Tools:</h4>
              <p>Intellij IDEA, VS Code, MySQL Workbench, Postman, and GIT</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <h4>Web/App Servers:</h4>
              <p>Apache Tomcat</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="resume-footer">
        <p>&copy; {currentYear} Hatesh Lakhani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;