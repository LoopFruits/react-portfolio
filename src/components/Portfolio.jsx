import React from 'react'
import Fizz from '../images/Fizz.png'
import Doppelganger from'../images/Doppelganger.jpg'
import myResume from '../images/myResume.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src:Fizz,
            href: 'https://fizzi.vercel.app/'
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


        

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id,src,href,title}) => (
                    <a key={id} href={href} target="_blank" rel="noopener noreferrer" className="group">
                        <div className="shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <img src={src} alt={title} className="w-full h-64 object-cover rounded-lg group-hover:opacity-90"/>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio

