import React from 'react'
import "./SkillLabel.css"

export default function SkillLabel({img, name}) {
  return (
    <div className='skill-label flex items-center'>
      <img src={`/icons/${img}.png`} className='w-[30px]'/>
      <div className='ml-[10px]'>{name}</div>
    </div>
  )
}
