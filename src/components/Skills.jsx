import React from 'react'
import ruby from '../images/ruby.svg'

const Skills = () => {

  const skill = [
    {
      id: 1,
      src: ruby,
      title: 'Ruby',
      style: 'shadow-red-500'
    },
  ]
  return (
    <div name="skills" className="h-screen w-full bg-gradient-to-b from-red to-orange-500">
      <img src={ruby} alt="Ruby" className="w-20 mx-auto"/>
      <p className="mt-4">Ruby</p>
    </div>
  )
}

export default Skills