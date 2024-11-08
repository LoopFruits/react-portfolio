import React from 'react'
import PokeFinder from '../images/PokeFinder.png'
import Doppelganger from'../images/Doppelganger.jpg'
import myResume from '../images/myResume.jpg'


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
            src:myResume,
            href:'https://kennethresume.netlify.app/'
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
                {portfolios.map(({id,src,href,title,description}) => (
                <div 
                    key ={id}
                    className="w-full h-64 object-cover rounded-t-lg">
                    <img src={src} alt=""className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-gray-500 mt-2">{description}</p>
                        <div className="flex space-x-4 mt-4">
                            <a href={href} className="px-6 py-3 bg-blue-500 text-white rounded-md transition-all duration-200 hover:bg-blue-600">Demo</a>
                            <a href={href} className="px-6 py-3 bg-blue-500 text-white rounded-md transition-all duration-200 hover:bg-blue-600">Code</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio

