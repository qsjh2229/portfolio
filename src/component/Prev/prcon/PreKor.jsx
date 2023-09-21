import React from 'react';

const PreKor = () => {
   return (
      <div className='nonres-pbox'>
        <div className='pbox-imgwrap'> 
        <img className="fbbox3-pc-img"
               src={process.env.PUBLIC_URL + "/img/pimg/p-office-pc.png"}
               alt="imac - 영화 사진"
             /> 
        <img className="fbbox3-pc-img"
               src={process.env.PUBLIC_URL + "/img/pimg/p-office-LAB.png"}
               alt="imac - 영화 사진"
             /> 
        </div>
        <div className='nonres-des-wrap'>
           <div className='span-box'>
                 <span>한국 공예 문화 진흥원</span>
                 <span>관공서 클론 코딩</span>
                 <span></span>
                 <div className="skill"> 
               
               <span>JAVASCRIPT</span>
               <span>CSS</span>
             
               <span>JAVASCRIPT</span>
               </div>
               <span>참여인원 : 1명</span>
               <span>  
               한국 공예 문화 진흥원을 자바스크립트와 CSS를 이용해 클론 코딩 하였습니다.
                   
               </span>
               <span>  
  
               </span>
               <div className="link">
                 <a  target='_blank'
                                    href='https://qsjh2229.github.io/government-office/'> 홈페이지 바로가기 </a>
                 <a  target='_blank'
                                    href='https://github.com/qsjh2229/government-office'> 깃허브 바로가기 </a>
               </div>
           </div>
        </div>
     </div>
   );
};

export default PreKor;