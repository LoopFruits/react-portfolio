import React from 'react'
import ProfilePic from '../images/Profilepic.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-sky-500 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white"> I'm a Font End Developer</h2>
                <p className="text-gray-500 py-4 max-w-md"> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, omnis!
                </p>
                <div>
                    <Link 
                        to="portfolio" smooth duration={500}
                        className="group transition ease-in-out delay-150 group-hover:rotate-90 hover:-translate-y-1 hover:scale-110 duration-300 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-orange-500 cursor-pointer">
                        Portfolio 
                        
                        <span className="hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={30} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={ProfilePic} alt="Kenneth Jordan's" 
                className="rounded-2xl mx-auto w-2/3 md:w-full shadow-2xl "></img>
            </div>
        </div>
    </div>
  )
}

export default Home