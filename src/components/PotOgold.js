/* =================================
  This is the MementoCRM Component
==================================== */
import React,{Component} from 'react';
import number12 from '../img/1.png';
import PostmanPut from '../img/postmanPutRequest.png';
import PutReqLogic from '../img/putRequestLogic.png';
import AzureDiagram from '../img/7.png';
import ImagePostRe from '../img/8.png';
import CodePostRe from '../img/9.png';
import BlobImage from '../img/blobStorage.png';
import ResultBlob from '../img/exampleImage.png';
import '../css/PotOgold.css';

class PotOgold extends Component {
    render(){
      return (
        <div className="potogold">
            <h2>Pot O' Gold</h2>
              <p>
              Working on the Pot O' Gold practicum winter 2020 was an incredible experience, 
              I was part of the Front-end team and I learned a lot of the ReactJS and  Cloud Computer fundamentals. 
              I developed reactjs tables, read API from the backend and populate to the the table.
              </p>
              <p>
              My first task on this practicum was to create user login using microsoft outlook and
              azure active directory, when a user log in successfully it will read user profile and
              redirect back to the dashboard. 
              </p>
              <p>
              The second task was to develop  Get API request using reactjs, I used postman to test it, 
              I created table and populated coffee machine data in to a table, 
              </p>
              <img src={number12} alt="Functions" />
              <p>
              We use the Postman tool to send the HTTP requests and it is one of the tools I felled in love with.
              </p>
              <img src={PostmanPut} alt="Postman Put Request" />
             
              <img src={PutReqLogic} alt="Put Request Code" />
              <p>
              I also implemented different CRUD functionality, I was able to add new machine, update machine,
              delete and read the machines by ID or all. below pics are showing how this functionalities 
              are working.
              </p>
              <img src={AzureDiagram} alt="Diagram"/>
              
             
              <img src={ImagePostRe} alt="imagePost request"/>
            
              <img src={CodePostRe} alt="post request"/>
             
              <img src={BlobImage} alt="example" />
           
              <img src={ResultBlob} alt="resoult." />
              <p>
              Because this is a private repository, I won't be able to share more details but 
              I'm always happy to answer any questions if need them.
              </p>
        </div>
      );
    }
}

export default PotOgold;
