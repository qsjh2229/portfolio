import React from "react";
import "./Skill.scss";


const Skill = () => {
  return (
    <section className="skill-sec">
       <div className="s-wrap">
           <div className="cir-1 cir">
              <div className="eye1"></div>
              <div className="eye1"></div>
            </div>
            <div className="cir-2 cir">
             
            </div>
            <div className="cir-3 cir">
            
            </div>
        <div className="s-lbox">
          <div className="front-box">
            <ul>
              <li >
                <div className="skill-box"> 
                  <img src='img/CSS.svg' alt="" />
                </div>
              </li>
              <li >
                <div  className="skill-box">
                <img src='img/Sass.svg' alt="" />
                </div>
              </li>
              <li >
                <div className="skill-box"> 
                <img src='img/HTML.svg' alt="" />
                </div>
              </li>
              <li >
                <div  className="skill-box">
                  <img src='img/Bootstrap.svg' alt="" />
                </div>
              </li>
              <li >
                <div  className="skill-box">
                  <img src='img/JavaScript.svg'alt="" />
                </div>
              </li>
              <li >
                <div className="skill-box"> 
                  <img src='img/React-Light.svg' alt="" />
                </div>
              </li>
              <li >
                <div className="skill-box"> 
                  <img src='img/JQuery.svg' alt="" />
                </div>
              </li>
          
              <li >
                <div className="skill-box"> 
                  <img src='img/Git.svg' alt="" />
                </div>
              </li>
         
            </ul>
          </div>
        </div>
        <div className="s-rbox">
          <div className="design-box">
            <ul>
              <li>
              <div  className="skill-box">
                  <img src="img/Illustrator.svg" alt="" />
                </div>
              </li>
              <li>
              <div  className="skill-box">
                  <img src="img/Figma-Light.svg" alt="" />
                </div>
              </li>
              <li>
              <div  className="skill-box">
                  <img src="img/Photoshop.svg" alt="" />
                </div>
              </li>
           
           
    
            </ul>
         
          </div>
        </div>
       </div>
    </section>
  );
};

export default Skill;
