import logo from './logo.svg';
import {number1,number2,number3,number4,number5,number6} from './assets/boats/numbers'
import od from './assets/billboard/billboardBackGroundImgs/IMG_6447.PNG';
import y from './assets/billboard/billboardBackGroundImgs/Y.png'
import tony from './assets/Tony.png'
import {nose,face,eyes,mouth,glasses,bon} from './assets/faceparts/faceparts'
import {linkedin,github} from './assets/Icons/icons';
import './App.css';
import {motion} from 'motion/react';
import { useState, useEffect, useEffectEvent, useRef } from "react";



const bg = document.getElementsByClassName("bgcity");
const skillclass = document.getElementsByClassName("item4");

  window.addEventListener("scroll", () => {
    const pixact = 1800;
  
      if (window.scrollY > pixact) {
        bg[0].classList.add("scroll");
      } else {
        bg[0].classList.remove("scroll");
      }
  
  });


function App() {
  
  return (
    <div className = "bgcity">
      <header>
        <link rel="icon" type="image/png"  href="./assets/Tony.png"/>
      </header>
      <div>
      <HeaderProfile/>
      </div>
      <div></div>
      <div className="body" id="body">
        <div className="item1"><Projects/></div>
        <div className="item2"><Experince/></div>
        <div  className='item4' id="id"><Skills/></div>
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
      <div item="item1" >
      <MyFace/>
      </div>
      <div className="plaque">
        <h1>Collin Harris</h1>
        <div style={{display:'grid',gridTemplateColumns:'auto auto',alignItems:'center'}}>
        <AboutMe/>
        
        </div>
        <div>
      </div>
     
      </div>
      <div style={{paddingTop:125}}>
      <a href="https://www.linkedin.com/in/collin-harris-854932201/" item="item3" style={{padding:20}}>
          <img  className="icons" alt='linkedinimg' src={linkedin} />
        </a>
        <a href="https://github.com/ZippityZoo"  item="item4" style={{padding:20}}>
          <img  className="icons" alt='githubimg' src={github}/>
        </a>
        <Contacts/>
        </div>
    </div>
 )
}

function AboutMe(){
  return(
    <div>
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
      <div className="experinces" style={{backgroundColor:"red",backgroundImage:`url(${od})`, backgroundPositionX:"120px",backgroundPositionY:"-30px"}}>
      <h4>Office Depot</h4>
      <h5>Sales/Print Part Time Associate</h5>
      <p>Nov 2024 - Present</p>
      <ul>
        <li>Customer Service Tasks</li>
        <li>Printer TroubleShooting</li>
        <li>Minor Graphical Designing Tasks</li>
      </ul>
      </div>
      <div className="experinces" style={{backgroundColor:"aliceblue",backgroundImage:`url(${y})`, backgroundPositionX:"250px",backgroundPositionY:"30px",backgroundSize:"128px 128px"}}>
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
    <div style={{gridColumn: '1 / span 2' }}>
      <h2>CollinGH702@gmail.com</h2>
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

const langSkills =  [["C ",no2,2],["C++ ",no4,4],["Java ",no6,6],["Python ",no3,3],["NodeJS ",no1,1]];
const frontendSkills = [["HTML ",no4,4],["CSS ",no4],4,["JavaScript ",no4,4],["ReactJS ",no1,1],["Swift/SwiftUI ",no2,2]];
const dbSkills =   [["DBeaver ",no1,1],["SQL ",no4,4],["SQLite ",no4,4],["PostgreSQL ",no2,2]];
const fullstackSkills =  [["Maven ",no2,2],["SpringBoot ",no2,2],["Laravel ",no2,2],["Git Version Control ",no6,6]];
const gamingSkills =  [["GDScript",no3,3],["GDScript",no3,3]];
const skills = [langSkills,frontendSkills,dbSkills,fullstackSkills,gamingSkills];
function Skills(){
  var skillindex = 0;
  var temp;
  const [skillIndex,setSkillIndex] = useState(0);
  const [currentSkills, setSkillBoard] = useState(skills[skillIndex]);
  const timerId = useRef(null)
  useEffect(() =>{
    timerId.current = setTimeout(() => {
      transitionBoard();
      
    },70000);
  });
  return(
    
    <div className='skill-container'>
      <h1>Skills</h1>
      <motion.div
    initial={{x:0}}
    animate={{x:[0,5000]}}
    transition={{
      duration: 15,
      times: [0,20],
      repeat: Infinity,
      ease: ["linear"],
    }}
    >
      <ul>
        {currentSkills.map((skill,index) => (
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
           key = {(index)} className="skill" style={{ backgroundImage:`url(${skill[1]})`,
            backgroundRepeat:"no-repeat",backgroundOrigin:"content-box",backgroundPositionY:"0px", 
            backgroundSize:"contain" ,
            width:'144px',height:'45px',left:`${temp = (Math.random() * -75)}%`,top:"50px",
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
               key = {index + skills.length} className="skillflipped" style={{ 
                backgroundImage:`url(${skill[1]})`,
                opacity:0.3,
                backgroundBlendMode:"normal",
                backgroundRepeat:"no-repeat",backgroundOrigin:"content-box",backgroundPositionY:"0px", 
                backgroundSize:"contain" ,
                width:'144px',height:'45px',left:`${temp}%`,top:"50px",
                paddingBottom:'0px', marginBottom:'0px',bottom:'0px'
                
                }}><div style={{position:'relative',top:10}}>
                  {filepathToYear(skill[2])}
                  </div>
                  </motion.li>
          </div>
        ))}
      </ul>
      </motion.div>
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
  function transitionBoard(){
    console.log("Transistion");
    if(skillIndex + 1 >= skills.length){
      setSkillIndex(0);
      console.log("loop",skillIndex);
    }else{
      setSkillIndex(skillIndex + 1);
      console.log("increment skillindex to", skillIndex);
    }
    setSkillBoard(currentSkills => skills[skillIndex]);
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
function MyFace(){
  const [positions,setPostions] = useState([[]]);

  const randpositions = () => {

  }
  return(
    <div>
      <motion.img 
    initial={{x:0}}
    animate = {{
      x:[0,5,10,5,0],
      y:[0,-5,0,5,0]
    }} 
    transition={{
      duration: 11,
      times: [0,0.333,0.666,1],
      repeat:Infinity,
      ease: "easeOut",
      delay:2
    }}
    className="faceparts" src={glasses} style={{zIndex:1}} />
      <motion.img 
      initial={{x:0}}
      animate = {{
        x:[0,5,10,5,0],
        y:[0,-5,0,5,0]
      }} 
      transition={{
        duration: 11,
        times: [0,0.333,0.666,1],
        repeat:Infinity,
        ease: "easeOut",
        delay:6
      }}
    className="faceparts" src={mouth} style={{zIndex:1}} />
      <motion.img 
    initial={{}}
    animate = {{
      x:[0,5,10,5,0],
      y:[0,-5,0,5,0]
    }} 
    transition={{
      duration: 7,
      times: [0,0.5,1],
      repeat:Infinity,
      ease: ["easeInOut","easeInOut","easeInOut"],
      delay:10
    }}
    className="faceparts" src={nose} style={{zIndex:1}} />
    <motion.img 
    initial={{}}
    animate = {{
      x:[0,5,10,5,0],
      y:[0,-5,0,5,0]
    }} 
    transition={{
      duration: 7,
      times: [0,0.5,1],
      repeat:Infinity,
      ease: [],
      delay:8
    }}
    className="faceparts" src={eyes} style={{zIndex:1}} />
  <motion.img 
    initial={{}}
    animate = {{}} 
    transition={{
      duration: 14,
      times: [0,0.5,1],
      repeat:Infinity,
      ease: ["easeInOut","easeInOut","easeInOut"],
    }}
    className="faceparts" src={face} style={{zIndex:0}} />
    </div>
  )
}

export default App;
