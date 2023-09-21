import React from "react";
import "./Skill.scss";
import css from"../../img/CSS.svg"
import Sass from"../../img/Sass.svg"

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
                  <img src={css} alt="" />
                </div>
              </li>
              <li >
                <div  className="skill-box">
                <img src={Sass} alt="" />
                </div>
              </li>
              <li >
                <div className="skill-box"> 
              
               <img src=  {process.env.PUBLIC_URL + "/img/HTML.svg"} alt="" />
                </div>
              </li>
              <li >
                <div  className="skill-box">
                  <img src= {process.env.PUBLIC_URL + "/img/Bootstrap.svg"} alt="" />
                 
                </div>
              </li>
              <li >
                <div  className="skill-box">
                 
                  <img src= {process.env.PUBLIC_URL + "/img/JavaScript.svg"} alt="" />
                </div>
              </li>
              <li >
                <div className="skill-box"> 
                  
                  <img src= {process.env.PUBLIC_URL + "/img/React-Light.svg"} alt="" />
                </div>
              </li>
              <li >
                <div className="skill-box"> 
                  
                  <img src= {process.env.PUBLIC_URL + "/img/img/JQuery.svg"} alt="" />
                  
                </div>
              </li>
          
              <li >
                <div className="skill-box"> 
                <img src= {process.env.PUBLIC_URL + "/img/Git.svg"} alt="" />
                 
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
              <img src= {process.env.PUBLIC_URL + "/img/Illustrator.svg"} alt="" />
                
                </div>
              </li>
              <li>
              <div  className="skill-box">
              <img src= {process.env.PUBLIC_URL + "/img/Figma-Light.svg"} alt="" />
                
                </div>
              </li>
              <li>
              <div  className="skill-box">
               
                  <img src= {process.env.PUBLIC_URL + "/img/Photoshop.svg"} alt="" />
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
