import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'experience'
    },
    {
      id: 3,
      link: 'about'
    },
    {
      id: 4,
      link: 'portfolio'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
          <h1 className="text-5xl font-signature ml-2">Kenneth</h1>
      </div>

      <ul className="flex">
    
        {links.map(link => (
          <li key ={link.id}className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Home</li>
        ))}
      
        
      </ul>
    </div>
  )
}

export default NavBar