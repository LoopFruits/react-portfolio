import React from 'react'
import PokeFinder from '../images/PokeFinder.png'
import MentalHealthWithoutBorders from '../images/MentalHealthWithoutBorders.png'


const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-violet-500 to-pink-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-black">Portfolio</p>
                <p className="py-6">Check out some of my work</p>
            </div>

            <div className="grid sm:gird-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                <div className="shadow-md shadow-gray-600 rounded-lg">
                    <img 
                    src={PokeFinder} 
                    alt="PokeFinder"
                    className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio

