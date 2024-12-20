import React from 'react'

function Header() {
  return (
    <div className="bg-black text-white p-4 flex flex-wrap justify-between items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mx-2 flex-1 mb-2 sm:mb-0">
        Client & Server Side Data Fetching
      </h1>
      <p className="text-gray-300 text-sm sm:text-base text-center sm:text-right w-full sm:w-auto">
        Created by Talha Jamal
      </p>
    </div>
  )
}

export default Header