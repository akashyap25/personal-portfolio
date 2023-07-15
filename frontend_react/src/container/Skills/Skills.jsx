import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Tooltip} from 'react-tooltip';
import {images} from '../../constants';
import './Skills.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const Skills = () => {
  const [experiences, setExperiences] = useState([
    {
      year: 2022,
      works: [
        {
          name: 'Web-team Member',
          company: 'DSC KIET',
        },
      ],
    },
    {
      year: 2023,
      works: [
        {
          name: 'Web Coordinator',
          company: 'Technocrats',
        },
      ],
    },
  ]);
  const [skills, setSkills] = useState([
    {
      name: 'JavaScript',
      bgColor: '#ffffff',
      icon: images.javascript,
    },
    {
      name: 'Node.js',
      bgColor: '#FFF',
      icon: images.node,
    },
    {
      name: "express",
      bgColor: '#FFF',
      icon: images.express,
    },
    {
      name: "react",
      bgColor: '#FFF',
      icon: images.react,
    },
    {
      name: "HTML",
      bgColor: '#FFF',
      icon: images.html,
    },
    {
      name: "CSS",
      bgColor: '#FFF',
      icon: images.css,
    },
    {
      name: "Mongodb",
      bgColor: '#FFF',
      icon: images.mongodb,
    },
    {
      name: "MySQL",
      bgColor: '#FFF',
      icon: images.mysql,
    },
    {
      name: "api",
      bgColor: '#FFF',
      icon: images.api,
    },
    {
      name: "Git",
      bgColor: '#FFF',
      icon: images.git,
    },
    {
      name: "Linux",
      bgColor: '#FFF',
      icon: images.linux,
    },
    {
      name: "C++",
      bgColor: '#FFF',
      icon: images.cpp,
    },
  ]);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
