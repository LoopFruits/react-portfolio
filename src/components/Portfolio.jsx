import React from 'react'
import PokeFinder from '../images/PokeFinder.png'
import MentalHealthWithoutBorders from '../images/MentalHealthWithoutBorders.png'


const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-violet-500 to-pink-800 w-full text-white md:h-screen">
        <div>
            <p>Portfolio</p>
            <p>Check out some of my work</p>
        </div>
        <div>
            <div>
                <img src={PokeFinder} alt="PokeFinder"></img>
                <div>
                    <button>Demo</button>
                    <button>Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio