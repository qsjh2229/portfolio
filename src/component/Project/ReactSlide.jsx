import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const ReactSlide = () => {
   const swiperRefLocal = useRef()
   const handleMouseEnter = () => {
      swiperRefLocal?.current?.swiper?.autoplay?.stop()
   }

   const handleMouseLeave = () => {
      swiperRefLocal?.current?.swiper?.autoplay?.start()
   }

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
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <Swiper
                   autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  loopFillGroupWithBlank={false}
                  ref={swiperRefLocal}
                  initialSlide={1}
                  centeredSlides={true}
                  slidesPerView={3}
                  spaceBetween={30}
                  modules={[Pagination, Navigation,  Autoplay ]}
                  className='mySwiper'
               >
                  <SwiperSlide>
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
                                    href='https://github.com/qsjh2229/goodsshop'
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                                    href='https://qsjh2229.github.io/appletheater'
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                  </SwiperSlide>
              {/*     <SwiperSlide>
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
                  </SwiperSlide> */}
                
               </Swiper>
            </ul>
         </div>
      </div>
   );
};

export default ReactSlide;