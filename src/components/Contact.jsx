import React from 'react'


const Contact = () => {
  return (
    <div 
    name="contact" 
    className="w-full h-screen  p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline ">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me </p>
            </div>
            <div className="flex justify-center items-center"> 
              <form action="https://getform.io/f/bb7915ea-48a0-4a68-95b7-9aaa23511436" method="POST" className="flex flex-col w-full md:w-1/2">
                <input 
                type="text" 
                name="name" 
                placeholder="Joe Random" 
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>

                <input 
                type="text" 
                name="email" 
                placeholder="Example@gmail.com" 
                className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>

                <textarea 
                name="message" 
                rows="10" 
                placeholder="Example Text Here"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                >
                </textarea>
                 {/* submits the form data and allows users to contact me. */}
                <button className="text-white bg-blue-500 shadow-lg shadow-blue-500/50 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 drop-shadow-md hover:drop-shadow-xl">
                  Let's talk
                </button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
