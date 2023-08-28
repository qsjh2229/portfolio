import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReactSlide = () => {
   return (
      <div>
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
                     </div>
                  </div>

                  <div className='yell-box'>
                     <span>1440px</span>
                  </div>
               </li>
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
                     </div>
                  </div>
                  <div className='yell-box'>
                     <span>1440px</span>
                  </div>
               </li>
               <li>
                  <div className='white-box'>
                     <img
                        src={process.env.PUBLIC_URL + "/img/pro-img/kor-1.JPG"}
                        alt=''
                     />
                     <span>한국 공예 진흥원 클론 코딩 </span>
                     <div className='yell-box'>
                        <span>1440px</span>
                     </div>
                     <div className='desbox'>
                        <div className='skill-box'>
                           <img src='../../img/JavaScript.svg' alt='' />
                           <img src='../../img/JQuery.svg' alt='' />
                        </div>
                        <span>
                           한국 공예 진흥원을 자바스크립트와 제이쿼리를 이용해
                           클론 코딩 하였습니다
                        </span>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
      </div>
   );
};

export default ReactSlide;