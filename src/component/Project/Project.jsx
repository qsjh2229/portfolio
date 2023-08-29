import React from 'react';
import ReactSlide from './ReactSlide';
import JaSlide from'./JaSlide'
import Cir from './Cir';
import "./project.scss"

const Project = () => {
   return (
      <section className='project-sec'>
         <JaSlide></JaSlide>
         <ReactSlide></ReactSlide>
         <Cir></Cir>

      </section>
   );
};

export default Project; 