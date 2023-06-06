import React, {useEffect, useState} from 'react'
import {motion }from 'framer-motion'
import {images} from '../../constants';
import { AppWrap } from '../../wrapper';
import "./About.scss";

function About() {
   

  const abouts= [
    {title:'Full Stack Development', Description:"I am a good full stack developer", imgUrl: images.about01},
    {title:'Backend Development', Description:"I am a good backend developer", imgUrl: images.about04},
    {title:'MERN Stack', Description:"I am a MERN stack developer", imgUrl: images.about02},
    {title:'Problem Solving', Description:"I am a good problem solver", imgUrl:images.about03}
  ]

  return (
    <div app__about>
      <h2 className="head-text ">
        I know that 
        <span> Good Portfolio</span>
        <br/>
        means
        <span> Good Developer</span>
      </h2>

      <div className="app__profiles">
       {abouts.map((about,index) => (
         <motion.div
         whileInView={{opacity:1}}
         whileHover={{scale:1.1}}
         transition={{duration:'0.5', type:'tween' }}
         className='app__profile-item'
         key={about.title + index}
         >
         <img src={about.imgUrl} alt={about.title} />
         <h2 className='bold-text' style={{ marginTop:20 }}> {about.title}</h2>
         <p className='p-text' style={{ marginTop:10 }}> {about.Description}</p>
       
         </motion.div>
       ))}
      </div>
    </div>
  )
} 

export default AppWrap(About, 'about');
