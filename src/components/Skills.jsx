import React from 'react'
import ruby from '../images/Ruby.png'
import rails from '../images/RubyOnRails.png'
import css from '../images/CSS.png'
import javascript from '../images/JavaScript.png'
import react from '../images/Reactjs.png'
import html from '../images/html.png'
import postgresql from '../images/postgresql.png'

const Skills = () => {

  const skill = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-violet-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: ruby,
      title: 'Ruby',
      style: 'shadow-red-500'
    },
    {
      id: 6,
      src: rails,
      title: 'Ruby On Rails',
      style: 'shadow-red-500'
    },
    {
      id: 7,
      src: postgresql,
      title: 'PostgreSQL',
      style: 'shadow-green-500'
    },
    
  ]
  return (
    <div name="skills" className="h-screen w-full text-white" >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className='text-4xl font-bold  p-2 inline'>Skills</p>
          <p className='py-6'>These are the technologies I have worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {
            skill.map(({id,title,src,style}) =>(
              <div 
              key={id}
             className={`shadow-md  duration-500 hover:animate-headShake py-2 rounded-lg  ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto"></img>
            <p className="mt-4">{title}</p>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills