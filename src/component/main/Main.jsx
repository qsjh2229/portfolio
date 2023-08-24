import React, { useEffect, useState } from "react"
import "./Main.scss";
import Menu from"../Menu"


const Main = () => {
 const [cAnimate,setCAnimate]=useState(true)
 
  useEffect(() => {
    if (cAnimate) {
      setTimeout(function () {
        // 시간이 지나면 애니메이션 클래스를 변경하고 상태 업데이트
        setCAnimate(false);
      }, 4500);
    }
  }, [cAnimate]);

   return (
      <section className='main-sec'>
          <Menu className='menu-com' />
         
        <div className="main-title-box">
            <span className="main-title-1"> Frontend </span>
            <span className="main-title-2"> Developer </span>
            <span className="main-title-3"> Portfolio !!</span>
        </div>
       <div className="ci-box">
           <div className="circle-1">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-2">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-3">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-4">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className={`circle-5 ${cAnimate ? "cAnimate" : "c-5animate2"}`}>
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-6">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-7">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-8">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-9">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-10">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
           <div className="circle-11">
              <div className="eye-1"></div>
              <div className="eye-2"></div>
           </div>
       </div>

      </section>
   )
}

export default Main
