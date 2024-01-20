import React from "react";

const Goods = () => {
  return (
 <>
        <div className="res-pbox">
          <div className="res-lebox">
            <div className="res-flex-box fbbox1">
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods1-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods2-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods3-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods4-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods5-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods6-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods2-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
            </div>
            <div className="res-flex-box fbbox2">
            <img className="tb-img"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-tablet2.png"}
                alt="목업 샷 쇼핑몰"
              />
    
              <img className="fbbox2-m-img"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods2-mobile.png"}
                alt="목업 샷 쇼핑몰"
              /> 
              <img className="fbbox3-l-img"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-lab.png"}
                alt="목업 샷 쇼핑몰"
              /> 
            </div>
            <div className="res-flex-box fbbox3">
            <img className="fbbox3-pc-img"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-pc.png"}
                alt="목업 샷 쇼핑몰"
              /> 
              <img className="fbbox3-l-img"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-tablet.png"}
                alt="목업 샷 쇼핑몰"
              /> 
            </div>
            <div className="res-flex-box fbbox4">
            <img className="fbbox4-1"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-tablet1.png"}
                alt="목업 샷 쇼핑몰"
              /> 
            <img className="fbbox4-2"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods-tablet.png"}
                alt="목업 샷 쇼핑몰"
              /> 
            <img  className="fbbox4-3"
                src={process.env.PUBLIC_URL + "/img/pimg/p-goods5-mobile.png"}
                alt="목업 샷 쇼핑몰"
              />
              </div>
          </div>
          <div className="res-descbox">
          
            <div className="prev-des">
               
                <span>MUE</span>
                <span>리액트를 이용한 인테리어 쇼핑몰</span>
                <div className="skill"> 
                <span>REACT</span>
                <span>FIGMA</span>
                <span>SCSS</span>
                </div>
                <span>참여인원 : 1명</span>
                {/* <span>  
                    리액트를 이용해 인테리어 쇼핑몰을 만들었습니다. <br />
                    리액트 스와이퍼를 이용해 슬라이드를 구현했고, 리액트 훅스를 사용해 상세페이지 및 서브 페이지를 구현 했습니다.
                </span> */}
                <div className="link">
                  <a href="https://goodsshop-five.vercel.app/" target="_blank"> 홈페이지 바로가기 </a>
                  <a href="https://github.com/qsjh2229/goodsshop" target="_blank"> 깃허브 바로가기 </a>
                </div>
            </div>
          </div>
        </div>
       
 </>
  );
};

export default Goods;
