import React from 'react';
import ReactSlide from './ReactSlide';
import JaSlide from'./JaSlide'
import "./project.scss"
const Project = () => {
   return (
      <section className='project-sec'>
         <JaSlide></JaSlide>
         <ReactSlide></ReactSlide>
      </section>
   );
};

export default Project; 