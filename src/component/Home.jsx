import React from "react"
import Main from "./main/Main"
import Profile from "./Profile/Profile"
import Skill from "./Skill/Skill.jsx"
import Project from "./Project/Project.jsx"
import Preview from "./Prev/Preview"



const Home = () => {
   return (
      <main>
       
         <Main />
        <Profile></Profile>
         <Skill></Skill>
         <Project/>
          <Preview/>
      </main>
   )
}

export default Home
