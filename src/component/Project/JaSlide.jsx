import React, { useRef, useState } from "react"
// Import Swiper React components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const JaSlide = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding:'0px',autoHeight : true, 
      
     
   
    };

   return (
      <div className='ja-slide-wrap'  id="project"> 
         <div className='title'>
            <h1> JAVASCRIPT & JQUARY</h1>
            <a
               target='_blank'
               className='link'
               href='https://github.com/qsjh2229?tab=repositories'
            ></a>
         </div>
         <div className='slide-j'>
            <ul >
             <Slider {...settings}>
                
                        <li>
                           <div className='white-box'>
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/img/pro-img/kor-1.JPG"
                                 }
                                 alt=''
                              />
                              <span>한국 공예 진흥원  </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <span>
                                    한국 공예 진흥원을 자바스크립트와 제이쿼리를
                                    이용해 클론 코딩 하였습니다
                                 </span>
                                 <span>참여 인원 : 1먕</span>
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://qsjh2229.github.io/government-office/'
                                    >
                                       <span>웹사이트 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://qsjh2229.github.io/government-office/'
                                    >
                                       <span>깃허브 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                              </div>
                           </div>
   
                           <div className='yell-box'>
                              <span>1440px</span>
                           </div>
                        </li>
                     
                        <li>
                           <div className='white-box'>
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/img/pro-img/arr-1.png"
                                 }
                                 alt=''
                              />
                              <span>아르르 쇼핑몰 </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <div className="txtbox">
                                    <span>
                                       쇼핑몰을 css의 미디어 쿼리와 자바스크립트를 이용해
                                       클론 코딩 하였습니다
                                    </span>
                                    <span>참여 인원 : 1명</span>
                                 </div>
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://qsjh2229.github.io/arrr-clone/'
                                    >
                                       <span>웹사이트 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://github.com/qsjh2229/arrr-clone'
                                    >
                                       <span>깃허브 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                              </div>
                           </div>
   
                           <div className='yell-box'>
                              <span>반응형</span>
                           </div>
                        </li>
                    
                        <li>
                           <div className='white-box'>
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/img/pro-img/music-1.JPG"
                                 }
                                 alt=''
                              />
                              <span> music - web </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <div className="txtbox">
                                    <span>
                                       쇼핑몰을 css의 미디어 쿼리와 자바스크립트를 이용해
                                       클론 코딩 하였습니다
                                    </span>
                                    <span>참여 인원 : 1명</span>
                                 </div>
                                
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://qsjh2229.github.io/music-web/'
                                    >
                                       <span>웹사이트 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://github.com/qsjh2229/music-web'
                                    >
                                       <span>깃허브 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                              </div>
                           </div>
   
                           <div className='yell-box'>
                              <span>반응형</span>
                           </div>
                        </li>
                 
                        <li>
                           <div className='white-box'>
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/img/pro-img/ballet-1.JPG"
                                 }
                                 alt=''
                              />
                              <span>ballet - web</span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                    <img src='../../img/Figma-Light.svg' alt='' />
                                 </div>
                                 <div className="txtbox">
                                 <span>
                                   피그마를 이용해 디자인을 했으며 그 디자인을 자바스크립트를 이용해 구현 했습니다
                                 </span>
                                    <span>참여 인원 : 1명</span>
                                 </div>
                                 
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://qsjh2229.github.io/ballet/'
                                    >
                                       <span>웹사이트 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://github.com/qsjh2229/ballet'
                                    >
                                       <span>깃허브 바로가기</span>
                                       <img
                                          src={
                                             process.env.PUBLIC_URL +
                                             "/img/pro-img/arrow.png"
                                          }
                                          alt='화살표'
                                       />
                                    </a>
                                 </div>
                              </div>
                           </div>
   
                           <div className='yell-box'>
                              <span>1440px</span>
                           </div>
                        </li>
                  
                    
                   
             </Slider>
            </ul>
         </div>
      </div>
   )
}

export default JaSlide
