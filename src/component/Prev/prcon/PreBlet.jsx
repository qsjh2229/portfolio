import React from 'react';

const PreBlet = () => {
    return (
        <div className='nonres-pbox'>
        <div className='pbox-imgwrap'> 
        <img className="fbbox3-pc-img"
               src={process.env.PUBLIC_URL + "/img/pimg/p-ballet-pc.png"}
               alt="imac - 영화 사진"
             /> 
        </div>
        <div className='nonres-des-wrap'>
           <div className='span-box'>
                 <span>ballet theater</span>
                 <span>아메리칸 발레 시어터 리디자인</span>
                 <div className="skill"> 
               <span>FIGMA</span>
               <span>CSS</span>
             
               <span>JAVASCRIPT</span>
               </div>
               <span>참여인원 : 1명</span>
               <span>  
                  아메리칸 발레 시어터 리디자인
                   
               </span>
               <span>  
                 피그마를 이용해 디자인을 하고 자바스크립트를 이용해 스크롤 애니메이션과 슬라이드를 구현 하였습니다
               </span>
               <div className="link">
                 <a  target='_blank'
                                    href='https://qsjh2229.github.io/ballet/'> 홈페이지 바로가기 </a>
                 <a  target='_blank'
                                    href='https://github.com/qsjh2229/ballet'> 깃허브 바로가기 </a>
               </div>
           </div>
        </div>
     </div>
    );
};

export default PreBlet;