import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation , Autoplay } from 'swiper/modules';

const JaSlide = () => {

  
   return (
      <div className='ja-slide-wrap'>
         <div className='title'>
            <h1> JAVASCRIPT & JQUARY</h1>
            <a
               className='link'
               href='https://github.com/qsjh2229?tab=repositories'
            ></a>
         </div>
         <div className='slide-j'>
            <ul>
          <Swiper
      
             autoplay={{ delay: 3000 ,    disableOnInteraction: false,}}
            loop={true}
        
          initialSlide={1}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination, Navigation , Autoplay ]}
          className="mySwiper"
          >
             
                     <SwiperSlide>
                        <li>
                           <div className='white-box'>
                              <img
                                 src={process.env.PUBLIC_URL + "/img/pro-img/kor-1.JPG"}
                                 alt=''
                              />
                              <span>한국 공예 진흥원 클론 코딩 </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <span>
                                    한국 공예 진흥원을 자바스크립트와 제이쿼리를 이용해
                                    클론 코딩 하였습니다
                                 </span>
                                 <span>참여 인원 : 1먕</span>
                              </div>
                           </div>
         
                           <div className='yell-box'>
                              <span>1440px</span>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li>
                           <div className='white-box'>
                              <img
                                 src={process.env.PUBLIC_URL + "/img/pro-img/arr-1.png"}
                                 alt=''
                              />
                              <span>아르르 쇼핑몰 메인 페이지</span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <span>
                                   css의 미디어 쿼리와 자바스크립트를 이용해 구현을 하였습니다
                                 </span>
                                 <span>참여 인원 : 1먕</span>
                              </div>
                           </div>
         
                           <div className='yell-box'>
                              <span>반응형</span>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li>
                           <div className='white-box'>
                              <img
                                 src={process.env.PUBLIC_URL + "/img/pro-img/music-1.JPG"}
                                 alt=''
                              />
                              <span> music - web </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                 </div>
                                 <span>
                                    제이슨 파일을 이용해 자바스크립트와 css를 이용해 반응형 페이지를 구현 했습니다
                                 </span>
                              </div>
                           </div>
         
                           <div className='yell-box'>
                              <span>반응형</span>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li>
                           <div className='white-box'>
                              <img
                                 src={process.env.PUBLIC_URL + "/img/pro-img/ballet-1.JPG"}
                                 alt=''
                              />
                              <span>ballet-web-site </span>
                              <div className='desbox'>
                                 <div className='skill-box'>
                                    <img src='../../img/JavaScript.svg' alt='' />
                                    <img src='../../img/JQuery.svg' alt='' />
                                    <img src='../../img/Figma-Light.svg' alt='' />
                                 </div>
                                 <span>
                                    한국 공예 진흥원을 자바스크립트와 제이쿼리를 이용해
                                    클론 코딩 하였습니다
                                 </span>
                              </div>
                           </div>
         
                           <div className='yell-box'>
                              <span>1440px</span>
                           </div>
                        </li>
                     </SwiperSlide>
                  
          </Swiper>
           
            </ul>
         </div>
      </div>
   )
}

export default JaSlide
