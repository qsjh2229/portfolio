import React from "react";

const PreArr = () => {
  return (
    <div className="res-box">
         <div className="pre-img-box">
         <div className="sec-img">
          <img src={process.env.PUBLIC_URL + "/img/pro-img/arr-6.png"} alt="" />
        </div>
         <div className=" first-img">
          <img src={process.env.PUBLIC_URL + "/img/pro-img/arr-3.png"} alt="" />
        </div>
       
        
      </div>
      <div className="pre-txt-box">
        <div className="skill-box">
        <div className="imac">
          <img
            src={process.env.PUBLIC_URL + "/img/pro-img/imac-arr.png"}
            alt="imac - 아르르 쇼핑몰 사진"
          />
        </div>
        <div className="icon">
        <div className="des-txt">자바스크립트와 미디어쿼리를 이용해 아르르 쇼핑몰의 메인 페이지를 디자인 해 보았습니다.</div>
            <img src={process.env.PUBLIC_URL + "/img/JavaScript.svg"} alt="자바스크립트" />
            <img src={process.env.PUBLIC_URL + "/img/JQuery.svg"} alt="제이쿼리" />
          </div>
        
         
        </div>
     
      </div>
   
    </div>
  );
};

export default PreArr;
