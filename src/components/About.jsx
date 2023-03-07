import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-cyan-500 to-indigo-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline">About</p>
            </div>
            <p className="text-xl mt-20">
            As an experienced engineer with a background in Kinesiology, I have a strong foundation in problem-solving and analytical thinking. With expertise in JavaScript and Ruby on Rails based programming, I'm able to develop software solutions that drive positive results for companies. I possess excellent communication and teamwork skills that enable me to collaborate with colleagues to create innovative and creative ideas. As a lifelong learner, I'm passionate about staying up to date with the latest tech trends to create software that meets user needs.
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