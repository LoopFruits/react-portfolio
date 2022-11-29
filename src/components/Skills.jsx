import React from 'react'
import ruby from '../images/Ruby.png'
import rails from '../images/RubyOnRails.png'
import cssss from '../images/Css.png'
import javascript from '../images/JavaScript.png'
import react from '../images/Reactjs.png'
import html from '../images/html.png'

const Skills = () => {

  const skill = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
  ]
  return (
    <div name="skill" className="bg-gradient-to-b from-red to-orange-500 h-screen w-full text-white" >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className='text-4xl font-bold border-b-4-border-black p-2 inline'>Skills</p>
          <p className='py-6'>These are the technologies I have worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} alt="" className="w-20 mx-auto"></img>
            <p className="mt-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills