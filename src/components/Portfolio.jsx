import React from 'react'
import PokeFinder from '../images/PokeFinder.png'
import MentalHealthWithoutBorders from '../images/MentalHealthWithoutBorders.png'
import Doppelganger from'../images/Doppelganger.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src:PokeFinder,
            href: 'https://github.com/EthanIsola/PokeFinder'
        },
        {
            id: 2,
            src:Doppelganger,
            href:'https://doppelganger-six.vercel.app/'
        },
        {
            id: 3,
            src:MentalHealthWithoutBorders,
            href:'https://github.com/LoopFruits/phase-3-frontend'
        },
        
    ]

  return (
    <div name="portfolio" className="w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline ">Portfolio</p>
                <p className="py-6">Check out some of my work</p>
            </div>


        

            <div className="grid sm:gird-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id,src,href}) => (
                <div 
                    key ={id}
                    className="shadow-md shadow-gray-600 rounded-lg">
                    <img 
                    src={src} 
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                        <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
                        <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio

