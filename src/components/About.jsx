import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-cyan-500 to-indigo-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline">About</p>
            </div>
            <p className="text-xl mt-20">
            As a seasoned engineer with a Kinesiology background, I combine advanced problem-solving with strong JavaScript and Ruby on Rails expertise to craft impactful software solutions. My excellent communication and collaboration skills drive innovation within teams. A committed lifelong learner, I continuously adapt to tech trends to meet user needs.
            </p>
            <br />
            {/* <p className="text-xl">
                 second paragraph for the future
            </p> */}
        </div>
    </div>
  )
}

export default About