import React, {useEffect, useState} from 'react'
import {motion }from 'framer-motion'
import {images} from '../../constants';
import { AppWrap } from '../../wrapper';
import "./About.scss";

function About() {
   

  const abouts= [
    {title:'Full Stack Developer', Description:"As a full-stack developer, I specialize in using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to build robust and scalable web applications. With MERN, I can seamlessly handle data storage, server-side logic, and dynamic front-end interfaces, ensuring a smooth user experience.", imgUrl: images.about01},
    {title:'Backend Developer', Description:"As a backend developer, I specialize in designing and implementing robust server-side solutions to power web applications. With expertise in programming languages such as Node.js and frameworks like Express.js, I create efficient APIs, handle data storage and retrieval, and ensure seamless integration between the frontend and backend systems.", imgUrl: images.about04},
    {title:'Database manager', Description:"I possess expertise in SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, excelling in designing, optimizing, and managing databases for efficient data storage, retrieval, and scalability. With a focus on maintaining data integrity and performance, I ensure seamless database operations and provide reliable solutions for diverse business needs.", imgUrl: images.about02},
    {title:'Problem Solver', Description:"As a problem solver on LeetCode and Codeforces, I excel in utilizing data structures and algorithms (DSA) to efficiently solve challenging coding problems. With a strong understanding of DSA concepts and optimization techniques, I consistently strive to improve my problem solving skills and stay updated with the latest algorithmic trends.", imgUrl:images.about03}
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
