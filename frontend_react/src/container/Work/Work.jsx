import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
 
    const work_array = [
      {
        imgUrl: 'https://raw.githubusercontent.com/akashyap25/We-Care/master/services.png',
        projectLink: 'https://github.com/akashyap25/We-Care',
        codeLink: 'https://github.com/akashyap25/We-Care',
        title: 'We Care',
        description:
          'Developed a one-stop medical platform using ReactJS, ExpressJS, and MongoDB. Integrated APIs, enabling verified doctor’s appointments, bed booking, blood donors information, ambulance booking, vaccine availability, and AR-based health education.',
        tags: ['We Care'],
      },
      {
        imgUrl: 'https://shorturl.at/rtFU5',
        projectLink: 'https://github.com/akashyap25/chat-it',
        codeLink: 'https://github.com/akashyap25/chat-it',
        title: 'Chat it',
        description:
          'Developed a user-friendly real-time chatting app with secure user login functionality and robust database integration, ensuring seamless communication and data management.',
        tags: ['Chat it'],
      },
      {
        imgUrl: 'https://shorturl.at/buCU2',
        projectLink: 'https://akashyap25.github.io/Web/',
        codeLink: 'https://github.com/akashyap25/Web',
        title: 'Currency Converter',
        description:
          'Successfully created a currency converter website, offering accurate exchange rates for 57 currencies, providing users with convenient and reliable currency conversion capabilities.',
        tags: ['Currency Converter',],
      },
    ];
    

    setWorks(work_array);
    setFilterWork(work_array);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['We Care', 'Chat it', 'Currency Converter', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
