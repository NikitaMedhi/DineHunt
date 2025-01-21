import React from 'react'
import logo from './logo.jpeg'

export default function Header({ onSearchInputChange }) {
  const handleInputChange = (event) => {
    onSearchInputChange(event.target.value)
  }
  return (
    <div className='w-full bg-[#D8F3DC]'>
      {/* Navbar */}
      <nav className="  px-6">
        {/* Flex Container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}

          <div className="pt-2 flex items-center ">
            <img src={logo} alt="logo" className='w-16 h-16 mr-4 rounded-full' />

            <h2 className=' whitespace-nowrap font-bold text-[#1B4332] text-3xl'>DineHunt</h2>
          </div>

          {/* Search Bar */}
          <div className='max-w-md  w-full m-5'>
            <button className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[#1B4332] overflow-hidden" id='searchbar'>
              <div className="grid place-items-center h-full w-12 text-[#CFE1B9]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-[#FFFFFF] pr-2 bg-[#1B4332] "
                type="text"
                id="search"
                placeholder=" I'm Feeling Hungry..."
                onChange={handleInputChange}
                onSubmit={handleInputChange} />

            </button>
          </div>






        </div>
      </nav>
    </div>
  )
}
