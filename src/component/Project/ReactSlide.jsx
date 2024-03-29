import React, { useRef, useState } from "react"
// Import Swiper React components
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
const ReactSlide = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding:'0px',
      
   
    };


   return (
      <div className='sl-slide-wrap'>
         <div className='title'>
            <h1> REACT</h1>
            <a
               target='_blank'
               className='link'
               href='https://github.com/qsjh2229?tab=repositories'
            ></a>
         </div>
         <div className='slide-j'>
            <ul >
              <Slider {...settings} >
                 
                        <li>
                           <div className='white-box'>
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/img/pro-img/goods-1.png"
                                 }
                                 alt=''
                              />
                              <span>쇼핑몰 페이지  </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/Figma-Light.svg' alt='' />
                                    <img src='../../img/Sass.svg' alt='' />
                                    <img src='../../img/React-Light.svg' alt='' />
                                 </div>
                                 <span>
                                   피그마로 디자인을 한 후 SCSS와 리액트를 이용해 구현하였습니다
                                 </span>
                                 <span>참여 인원 : 1명</span>
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://goodsshop-five.vercel.app/'
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
                                       href='https://github.com/qsjh2229/goodsshop'
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
                                    "/img/pro-img/movie-1.png"
                                 }
                                 alt=''
                              />
                              <span> movie - web  </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <div className="txtbox">
                                    <span>
                                     영화 api를 이용하여 영화 사이트를 만들었습니다.
                                    </span>
                                    <span>참여 인원 : 1명</span>
                                 </div>
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href="https://appletheater.vercel.app/" 
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
                                       href='https://github.com/qsjh2229/appletheater'
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
                                    "/img/pro-img/port-1.png"
                                 }
                                 alt=''
                              />
                              <span> PORTFOLIO</span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <div className="txtbox">
                                    <span>
                                      피그마와 리액트를 이용해 디자인을 하였습니다
                                    </span>
                                    <span>참여 인원 : 1명</span>
                                 </div>
                                
                              </div>
                              <div className='gobox'>
                                 <div>
                                    <a
                                       target='_blank'
                                       href='https://portfolio-nu-one-58.vercel.app/'
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
                                       href='https://github.com/qsjh2229/portfolio'
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
                  
              </Slider>
            
            </ul>
         </div>
      </div>
   );
};

export default ReactSlide;