import React from "react"
import { AiFillGithub } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
import "./Page.scss";
import pic from "../../img/pic.png"; // 이미지 경로를 import

const Profile = () => {
   return (
      <section  id="profile" className='profile-sec'>
         <div className='p-lbox'>
            <h1>
               Frontend <br />
               Developer
            </h1>
            <div className='imgbox'>
            <img src={pic} alt="프로필 이미지" /> 
            </div>
         </div>
         <div className='p-rbox'>
            <div className='edu-box'>
               <h2>EDUCATION</h2>
              
               <div className="edu-trbox">
                     <tr>
                        <td>2016</td>
                        <td> 안산공업고등학교</td>
                        <td>시각디자인학과졸업</td>
                     </tr>
                     <tr>
                        <td>2023</td>
                        <td>남서울대학교</td>
                        <td> 유리세라믹 디자인학과졸업</td>
                     </tr>
                     <tr>
                        <td>2023</td>
                        <td>더휴먼아카데미</td>
                        <td>
                           React, vue 프레 임춰크 기반 프론트엔드 개발 앙성 수료
                        </td>
                     </tr>
               </div>
              
            </div>
            <div className='sns-box'>  
            <h2>SNS</h2>
            <ul>
               <li>
                  <a href="https://www.instagram.com/chae_ook/">
                    <BsInstagram className="insta" />
                  </a>
                  
               </li>
             <li>
                  <a href="https://github.com/qsjh2229?tab=repositories">
                     <AiFillGithub  className="git"/> 
                     </a>
             </li>
            </ul>
            </div>
            <div className='contact-box'>
            <h2>CONTACT</h2>
            <div className="con-trbox">
              <tr> 
                 <td>Phone</td>
                 <td>010 - 9802 - 3066</td>
               </tr>
              <tr> 
                 <td>E-mail</td>
                 <td>qaz03256@naver.com</td>
              </tr>
              <tr>
                 <td>Instagram</td>
                 <td>chae_ook</td>
              </tr>

            </div>
            </div>
            <span className="des-big">꾸준히 성실하게 매일 나아가는 윤채욱 입니다</span>
         </div>
      </section>
   )
}

export default Profile
