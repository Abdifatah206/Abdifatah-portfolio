/* =================================
  This is the introduction component
==================================== */

import React, {Component} from 'react';
import MyImage from '../img/abdi.jpg';

import '../css/Introduction.css';

class Introduction extends Component {
  render(){
    return (
      <div>
        <img className="myImage" src={MyImage} alt="" />
        <div className="introduction">
          <p>Hello, my name is Abdifatah and I'm a Software Developer Engineer with Bachelor of Applied Science.
          Looking to work on mobile, web Apps, databases,Data analysis and find the best problems solving solutions.
          I have worked on projects that involved key concepts such as Linked Lists,
          Binary Search Trees, Databases Normalization, and web/mobile development.</p>
          <p className="introContent">In my free time, I love to play soccer and train with my friends.
          I'm always happy to work on new and future projects.
          Please, don't hesitate to contact me if you have any questions.</p>
          <a href="https://www.linkedin.com/in/abdifatah-mohamed/" target="_blank"
          rel="noopener noreferrer">
            <p>Linkedin</p>
          </a>
          <a href="https://mail.google.com/mail/" target="_blank"
          rel="noopener noreferrer">
            <p>abdifaatahmohamed@gmail.com</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Introduction;
