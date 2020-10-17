/* =================================
  This is the Resume component
==================================== */
import React, { Component } from 'react';
import '../css/Resume.css';

class Resume extends Component {

  render() {
    return (
      <div className="myResume">
      <div className="heading">
        <h3>206-771-6456</h3>
          <p><a href="https://github.com/Abdifatah206" target="_blank" 
          rel="noopener noreferrer" >github.com/Abdifatah206</a></p>
          <p><a href="https://www.linkedin.com/in/abdifatah-mohamed/" 
          target="_blank" rel="noopener noreferrer" >abdifatah-mohamed Linkedin</a></p>
      </div>
        <h2>TECHNICAL SKILLS</h2>
        <div className="bulletPoints">
          <li>Languages​: Python,Java,Algorithm, Data Structure, JavaScript, PHP, Spring, J2EE,Java, C#, SQL, HTML, CSS .</li>
          <li>Frameworks:​ .NET, Angular, Express.js, Node.js. </li>
          <li>Libraries:​ React / React Native, Bootstrap, jQuery.</li>
          <li>Cloud:​ AWS(S3, RDS, EC2, IA), Azure(AD,Virtual machine), Firebase.</li>
          <li>Tools Set:​ GitHub, Jupyter Notebook, Tableau, WordPress, GoDaddy, AWS, Azure, Spyder, Jira /
BitBucket,Linux, Docker.</li>
        </div>
        <h2>EDUCATION</h2>
        <div className="bulletPoints">
          <li>Bachelor of Applied Science, Application Development, North Seattle College.  2018-2020</li>
          <li>Certificate Of Data science and machine learning, Udemy , Jun 2019 - Sep 2019.</li>
          <li>Bachelor of computer science, University Of Hargeisa                  2015-2018</li>
        </div>
        <h2>RELEVANT EXPERIENCE</h2>
        <h3>Intern at Glass Eye Studio.</h3>
        <div className="bulletPoints">
          <li>Creating a Web Application tool with Reactjs for a 2D event space. </li>
        </div>
        <h2>PROJECTS</h2>
        <h3>Umano Real Estate management </h3>
          <div className="bulletPoints">
            <p>Android Developer – Umano Real Estate . Mobile App Practicum       Spring-2019</p>
            <li>Created Markers on the Google map for Mobile application. </li>
            <li>Created Info window on the property Markers </li>
            <li>Filtering Umano Property by color or type.</li>
          </div>
        <h3>MementoCRM</h3>
          <div className="bulletPoints">
            <p>Software Developer Engineer – UI Development.            Mobile App Practicum  Fall-2019</p>
            <li>Created React Native components for Android applications.</li>
            <li>Integrating Firebase authentication and database services.</li>
          </div>
        <h3>Pot O' Gold Coffee</h3>
          <div className="bulletPoints">
            <p>Front-End Development .        Cloud Computing Practicum.    Winter-2020</p>
            <li>Create Login with Microsoft outlook using Azure active directory.</li>
            <li>Reading data from an API and papulate to a table.</li>
            <li>Implemented CRUD functionality .</li>
          </div>
        <h2>OTHER EXPERIENCE</h2>
        <div className="bulletPoints">
          <li>Tech consultant, Safe Routes			March/2018 – April/2020</li>
          <li>Analyst, BBSI			June/2016 - Feb/2018</li>
          <li>Freelancer Web Developer, Online       July/2013 - April/2016</li>
        </div>
      </div>
    );
  }
}

export default Resume;
