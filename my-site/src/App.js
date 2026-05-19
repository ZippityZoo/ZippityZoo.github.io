import logo from './logo.svg';
import number1 from './assets/boats/boatBronze.PNG';
import number2 from './assets/boats/boatSilver.PNG';
import number3 from './assets/boats/boatGold.PNG';
import number4 from './assets/boats/boatDiamond.PNG';
import number5 from './assets/boats/boatMaster.PNG';
import number6 from './assets/boats/boatMaster.PNG';
import face from './assets/Tony.png'
import './App.css';
import {motion} from 'motion/react';
import { useState, useEffect, useEffectEvent, useRef } from "react";



const bg = document.getElementsByClassName("bgcity");
const skillclass = document.getElementsByClassName("item4");

  window.addEventListener("scroll", () => {
    const pixact = 2100;

      if (window.scrollY > pixact) {
        bg[0].classList.add("scroll");
        skillclass[0].classList.remove("hidden");
        
      } else {
        bg[0].classList.remove("scroll");
        skillclass[0].classList.add("hidden");
      }
      console.log(window.scrollY);
  });


function App() {
  
  return (
    <div className = "bgcity">
      <div>
      <HeaderProfile/>
      </div>
      <div><AboutMe/></div>
      <div className="body" id="body">
        <div className="item1"><Projects/></div>
        <div className="item2"><Experince/></div>
        <div className="item4" id="id"><Skills/></div>
        {
          //<div className="item3"><EduandCerts/></div>
        }
      </div>
    </div>
  );
}

function HeaderProfile(){
  const bobbingSequence = [
    [".tony",{rotate:30},{ease:"easeInOut"}],
    [".tony",{rotate:-30},{ease:"easeInOut"}],
  ];
 return(
    
    <div className="header" >
      <div item="item1">
      <motion.img 
      initial={{rotate : 0}}
      animate = {{rotate:[0,30,-30,0]}} 
      transition={{
        duration: 7,
        times: [0,0.333,.667,1],
        repeat:Infinity,
        ease: ["easeInOut","easeInOut","easeInOut","easeInOut"],
      }}
      className="tony" src={face} />
      </div>
      <div className="plaque">
        <h1>Collin Harris</h1>
        <a href="https://www.linkedin.com/in/collin-harris-854932201/" className="item1" style={{padding:10}}>LinkedIn</a>
        
        <a href="https://github.com/ZippityZoo"  className="item2" style={{padding:10}}>Github</a><br></br>
        
        <div>
      </div>
      <Contacts/>
      </div>
    </div>
 )
}

function AboutMe(){
  return(
    <div>
      <div>
        <h1>Me</h1>
      </div>
      <div className="aboutme" >
        <div className="aboutmetext">
        
        <p>
          My name is Collin Harris I am an aspring Software Engineer and Game Developer from Apex NC.<br></br>
          I have intrests in the many niches of programming inluding Data Science and Graphical programming as well<br></br>
          My hobbies Include Cosplay, 3D Modeling, Drawing and Video Games.
        </p>
        </div>
      </div>
    </div>
  )
}
//older experince visibly looks worse
function Experince(){
  return(
    <div >
      <h1>Experince</h1>
      <div className="experinces">
      <h4>Office Depot</h4>
      <h5>Sales/Print Part Time Associate</h5>
      <p>Nov 2024 - Present</p>
      <ul>
        <li>Customer Service Tasks</li>
        <li>Printer TroubleShooting</li>
        <li>Minor Graphical Designing Tasks</li>
      </ul>
      </div>
      <div className="experinces">
      <h4>YMCA of Greensboro NC </h4>
      <h5>Youth Development Leader</h5>
      <p>2022-2024</p>
      <ul>
        <li>Developed leadership skills</li>
        <li>Lead youth to forming bonds and communication skills, by use of team building exercises</li>
        <li>Worked with a group of other Youth Development Leaders to generate ideas for the youth</li>
        <li>Worked with youth ages K-8, around 20 kids</li>
      </ul>
      </div>
      </div>
      
  )
}
function Projects(){
  return(
    <div >
      <h1>Projects</h1>
        <div className="projectsbottom">
          <div className="projectstext">
            <h4>Spartan Fit</h4>
            <p>
              Created a mobile application for generating workouts, progress tracking of workouts,and profile customization.<br></br> 
              This was my first time using SwiftU UI and doing mobile development,a huge learning experience <br></br>
              I would primarily work on front end but would contribute to several backend functions and create the JSON format for the Rest API to display and use information for the app
            </p>
            <p>The Project Architecture :</p>
            <ul>
              <li>Frontend : Swift UI <a href="https://github.com/ZippityZoo/490FrontEnd"> github icon</a> </li>
              <li>Backend : Node.JS <a href="https://github.com/willhutcheon/CSC490Testing">github icon </a></li>
              <li>DataBase : SQLite3</li>
              <li>Server Hosting : ngrok</li>
            </ul>
        </div>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Im_kGguDU_s?si=rtg7yxvEMiwPouYN" 
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        </div>
        <div className="projectsbottom">
          <div className="projectstext">
            <h4>Resturant Application</h4>
            <p>
            This was one of my first big group projects, The Resturant App was built for 3 users, General Manager, Chef, 
            and Waiters its use was to communicate between the part of the resturant.
            The project was though how and documented very well including Use Case Diagrams and Software Requirements Document.<br></br> 
            My part was split evenly between Front and Backend. The Project Architecture:
            </p>
            <p>Project Architecture :</p>
            <ul>
              <li>Frontend : HTML</li>
              <li>Backend : Java,Spring Boot,Maven,Thymeleaf</li>
              <li>DataBase : MySQL</li>
            </ul>
            </div>
        </div>
      </div>
  )
}
function Contacts(){
  return(
    <div>
      <p>CollinGH702@gmail.com</p>
      </div>
  )
}

const size = "100px"
const no1 = number1;
const no2 = number2;
const no3 = number3;
const no4 = number4;
const no5 = number5;
const no6 = number6;
/*
const no1 = <img className="crop" src={number1} alt = "1 Year"  style ={{width:{size}, height:{size}}}/>;
const no2 = <img src={number2} alt = " 2 Years" style ={{width:{size}, height:{size}}}/>;
const no3 = <img src={number3} alt = " 3 Years"  style ={{width:{size}, height:{size}}}/>;
const no4 = <img src={number4} alt = " 4 Years"  style ={{width:{size}, height:{size}}}/>;
const no5 = <img src={number5} alt = " 5 Years"  style ={{width:{size}, height:{size}}}/>;
const no6 = <img src={number6} alt = " 6 Years"  style ={{width:{size}, height:{size}}}/>;
*/
const langSkills =  [["C ",no2,2],["C++ ",no4,4],["Java ",no6,6],["Python ",no3,3],["NodeJS ",no1,1]];
const frontendSkills = [["HTML ",no4,4],["CSS ",no4],4,["JavaScript ",no4,4],["ReactJS ",no1,1],["Swift/SwiftUI ",no2,2]];
const dbSkills =   [["DBeaver ",no1,1],["SQL ",no4,4],["SQLite ",no4,4],["PostgreSQL ",no2,2]];
const fullstackSkills =  [["Maven ",no2,2],["SpringBoot ",no2,2],["Laravel ",no2,2],["Git Version Control ",no6,6]];
const gamingSkills =  [["GDScript",no3,3]];
const skills = [langSkills,frontendSkills,dbSkills,fullstackSkills,gamingSkills];
function Skills(){
  var temp;
  return(
    <div style={{paddingTop:"400px"}}>
      <h1>Skills</h1>
      <ul>
        {skills[0].map((skill,index) => (
          <div>
          <motion.li
          initial={{rotate : -15}}
          animate = {{rotate:[-15,15,-15]}} 
          transition={{
            duration: 10,
            times: [0,0.5,1],
            repeat:Infinity,
            ease: ["easeInOut","easeInOut","easeInOut"],
          }}
           key = {index} className="skill" style={{ backgroundImage:`url(${skill[1]})`,
            backgroundRepeat:"no-repeat",backgroundOrigin:"content-box",backgroundPositionY:"0px", 
            backgroundSize:"contain" ,
            width:'144px',height:'45px',left:`${temp = (Math.random() * 75)}%`,top:"50px",
          marginBottom:'0px',paddingBottom:'0px',bottom:'0px',gap:0
          }}>{
                <div style={{paddingTop:"10px"}}>{skill[0]}</div>
            }
          </motion.li>
          <motion.li
              initial={{rotate : 195}}
              animate = {{rotate:[195,165,195]}} 
              transition={{
                duration: 10,
                times: [0,0.5,1],
                repeat:Infinity,
                ease: ["easeInOut","easeInOut","easeInOut"],
              }}
               key = {index} className="skill" style={{ 
                backgroundImage:`url(${skill[1]})`,
                opacity:0.3,
                backgroundBlendMode:"normal",
                backgroundRepeat:"no-repeat",backgroundOrigin:"content-box",backgroundPositionY:"0px", 
                backgroundSize:"contain" ,
                width:'144px',height:'45px',left:`${temp}%`,top:"50px",
                paddingBottom:'0px', marginBottom:'0px',bottom:'0px'
                
                }}></motion.li>
          </div>
        ))}
      </ul>
    </div>
    
  )

  function filepathToYear(x){
      switch(x){
        case 1:
          return "1 Year";
        case 2:
          return "2 Years";
        case  3:
          return "3 Years";
        case 4:
          return "4 Years";
        case 5:
          return "5+ Years";
        case 6:
          return "6+ Years";
        default:
          return x;
      }
  }
}


function EduandCerts(){
  return(
    <div>
      <h1>Education</h1>
      <ul>
        <li><h4>BS in Computer Science</h4><br/>UNCG(2024)</li>
      </ul>
    </div>
  )
}
function CurrentlyPlaying(){
    return(
      <div>
        <h1>Currently Playing</h1>
        </div>
    )
}

export default App;
