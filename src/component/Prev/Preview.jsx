import React from 'react';
import PreArr from './prcon/PreArr';
import PreKor from './prcon/PreKor';
import PreBlet from './prcon/PreBlet.jsx';
import PreMusic from './prcon/PreMusic.jsx';
import Goods from './prcon/Goods.jsx';
import Movie from './prcon/MovieS.jsx';

const Preview = () => {
   return (
      <section className='preview-sec'>
            <Goods/>
         <Movie/>
         <PreArr/>
         <PreKor/>
         <PreBlet/>
         <PreMusic/>
      
      </section>
   );
};

export default Preview;