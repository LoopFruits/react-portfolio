import React from 'react'
import Ruby from '../images/Ruby.png'

const Skills = () => {

  const skill = [
    {
      id: 1,
      src: Ruby,
      title: 'Ruby',
      style: 'shadow-red-500'
    },
  ]
  return (
    <div name="skills" className="h-screen w-full bg-gradient-to-b from-red to-orange-500">
      <img src={Ruby} alt="Ruby" className="w-20 mx-auto"/>
      <p className="mt-4">Ruby</p>
    </div>
  )
}

export default Skills