import React from 'react'
import "./Skills.css"
import SkillLabel from './SkillLabel/SkillLabel'
import { animate, motion } from 'framer-motion'

export default function Skills() {

    const frontEnd = [
        {
            img: "react",
            name: "React Js"
        },
        {
            img: "redux",
            name: "Redux"
        },
        {
            img: "html-5",
            name: "HTML"
        },
        {
            img: "css",
            name: "CSS"
        },
        {
            img: "js",
            name: "JavaScript"
        },
        {
            img: "bootstrap",
            name: "Bootstrap"
        },
        {
            img: "Tailwind",
            name: "Tailwind"
        },
    ]

    const backEnd = [
        {
            img: "node-js",
            name: "Node Js"
        },
        {
            img: "Express",
            name: "Express Js"
        },
        {
            img: "GraphQL",
            name: "Graph QL"
        },
        {
            img: "MongoDB",
            name: "MongoDB"
        },
        {
            img: "PostgresSQL",
            name: "PostgreSQL"
        },
        
    ]

    const languages = [
        {
            img: "Python",
            name: "Python"
        },
        {
            img: "TypeScript",
            name: "TypeScript"
        },
        {
            img: "js",
            name: "JavaScript"
        },
        {
            img: "Java",
            name: "Java"
        },
        {
            img: "C",
            name: "C"
        },
        {
            img: "Csharp",
            name: "C#"
        },
    ]

    const other = [
        {
            img: "AWS",
            name: "AWS"
        },
        {
            img: "cloudinary",
            name: "Cloudinary"
        },
        {
            img: "Unity",
            name: "Unity"
        },
        {
            img: "Linux",
            name: "Linux"
        },
        {
            img: "Git",
            name: "Git"
        },
        {
            img: "Google Cloud",
            name: "Google Cloud"
        },
    ]


    const variants = {
        initial: {
            y: 30
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className='skills-container'>
            <div className='skills-title'>
                <div>Skills</div>
                <p>Here are some of my skills.</p>
            </div>
            <motion.div variants={variants} className='skills-boxs' initial="initial" whileInView="animate" >
                <motion.div variants={variants} className='skill-box'>
                    <div className='skill-box-name'>Frontend</div>
                    <div className='skill-box-skills'>{frontEnd.map((skill, index) => <SkillLabel key={index} img={skill.img} name={skill.name} />)}</div>
                </motion.div>
                <motion.div variants={variants}  className='skill-box'>
                    <div className='skill-box-name'>Backend</div>
                    <div className='skill-box-skills'>{backEnd.map((skill, index) => <SkillLabel key={index} img={skill.img} name={skill.name} />)}</div>
                </motion.div>
                <motion.div variants={variants}  className='skill-box'>
                    <div className='skill-box-name'>Programming languages</div>
                    <div className='skill-box-skills'>{languages.map((skill, index) => <SkillLabel key={index} img={skill.img} name={skill.name} />)}</div>
                </motion.div>
                <motion.div variants={variants}  className='skill-box'>
                    <div className='skill-box-name'>Other</div>
                    <div className='skill-box-skills'>{other.map((skill, index) => <SkillLabel key={index} img={skill.img} name={skill.name} />)}</div>
                </motion.div>
            </motion.div>
        </div>
    )
}
