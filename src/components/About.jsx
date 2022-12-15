import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-cyan-500 to-indigo-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-5 border-black">About</p>
            </div>
            <p className="tex-xl mt-20">
            Experienced in JavaScript and Ruby on Rails based programming with a background in Personal Training. My experience of living in Spain gives me unique skills in cross-cultural collaboration. I Possess strong skills in communication and teamwork that help companies drive positive results with innovative and creative ideas. Passionate about learning and staying up to date with tech.
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