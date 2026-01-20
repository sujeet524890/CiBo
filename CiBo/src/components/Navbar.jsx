import React from 'react'

const Navbar = () => {
  scrollTo(0,0)
  return (
    <div>
        <nav className="w-full bg-green-950 shadow-sm fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center  sm:h-16 ">

          {/* Left Section: Logo + Name */}
          <div className="flex items-center gap-1">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              className="h-30 w-30 sm:mx-25 sm:h-25 items-center sm:w-30 object-contain "
            />
            {/* <span className="text-xl  font-bold text-red-600">CiBo</span> */}
          </div>

          {/* Right Section: Text */}
          <div className=" sm:mt-0 text-center mb-4 ">
            <span className="text-white font-bold text-base sm:text-lg">
              What should we cook today?
            </span>
          </div>

        </div>
      </div>
    </nav>
      
    </div>
  )
}

export default Navbar
