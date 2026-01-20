import React from 'react'

const Footer = () => {
  return (
    <div>
       
        <footer className="w-full  bg-green-950 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Left Section */}
        <div className="text-white font-medium">
          © 2026 CiBo. All rights reserved.
        </div>

        {/* Right Section: Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sujeet-kumar-yadav-4074aa3a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-3xl bg-black p-3  hover:text-white transition"
          >
             linkedin
          </a>

          <a
            href="https://github.com/sujeet524890"
            target="_blank"
            rel="linkedin.com/in/sujeet-kumar-yadav-4074aa3a5"
            className= "text-white rounded-3xl bg-black p-3  hover:text-white transition"
          >
          GitHub
          </a>

          {/* <a
            href="mailto:sujeeten1@gmail.com"
            className="text-white rounded-3xl bg-blue-500 p-3  hover:text-white transition"
          >
            Gmail
            
          </a> */}
        </div>

      </div>
    </footer>
      
    </div>
  )
}

export default Footer
