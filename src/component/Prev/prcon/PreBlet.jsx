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
                   영화 api를 이용해 리액트로 만든 영화 사이트 입니다.
                   
               </span>
               <div className="link">
                 <a href="https://goodsshop-five.vercel.app/"> 홈페이지 바로가기 </a>
                 <a href="https://goodsshop-five.vercel.app/"> 깃허브 바로가기 </a>
               </div>
           </div>
        </div>
     </div>
    );
};

export default PreBlet;