import React from "react"
import Main from "./main/Main"
import Profile from "./Profile/Profile"
import Skill from "./Skill/Skill.jsx"



const Home = () => {
   return (
      <main>
       
         <Main />
         <a href="#profile"><Profile></Profile></a>
         <Skill></Skill>
      </main>
   )
}

export default Home
