import React from 'react';

const MovieS = () => {
   return (
      <div className='nonres-pbox'>
         <div className='pbox-imgwrap'> 
         <img className="fbbox3-pc-img"
                src={process.env.PUBLIC_URL + "/img/pimg/p-movie-pc.png"}
                alt="imac - 영화 사진"
              /> 
         </div>
         <div className='nonres-des-wrap'>
            <div className='span-box'>
                  <span>apple movie</span>
                  <span>리액트를 이용한 영화 사이트</span>
                  <div className="skill"> 
                <span>REACT</span>
              
                <span>SCSS</span>
                </div>
                <span>참여인원 : 1명</span>
                <span>  
                    영화 api를 이용해 리액트로 만든 영화 사이트 입니다. <br />
                    
                    
                </span>
                <div className="link">
                  <a target='_blank' href="https://qsjh2229.github.io/appletheater/"> 홈페이지 바로가기 </a>
                  <a  target='_blank' href="https://github.com/qsjh2229/appletheater"> 깃허브 바로가기 </a>
                </div>
            </div>
         </div>
      </div>
   );
};

export default MovieS;