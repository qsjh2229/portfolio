import React from 'react';

const PreBlet = () => {
    return (
        <div className='nonres-pbox'>
        <div className='pbox-imgwrap'> 
        <img className="fbbox3-pc-img al-img"
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