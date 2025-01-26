import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-[#2D6A4F]'>
      <div className='container flex flex-col justify-between px-6 py-10 mx-auto space-y-8'>

        {/* Home, Restaurants, Contact, Locations - Horizontal Line */}
        <div className='flex justify-center space-x-12 text-[#E9F5DB] font-bold text-lg'>
          <a href="#" className='hover:text-[#B7E4C7]'>Home</a>
          <a href="#" className='hover:text-[#B7E4C7]'>Restaurants</a>
          <a href="#" className="hover:text-[#B7E4C7]">Locations</a>
          <a href="#" className='hover:text-[#B7E4C7]'>Contact</a>
        </div>

        {/* Social Links Icons */}
        <div className="flex justify-center space-x-6">
          <a href="#">
            <img src="DineHunt/img/icon-facebook.svg" alt="Facebook" className="h-8" />
          </a>
          <a href="#">
            <img src="DineHunt/img/icon-twitter.svg" alt="Twitter" className="h-8" />
          </a>
          <a href="#">
            <img src="DineHunt/img/icon-instagram.svg" alt="Instagram" className="h-8" />
          </a>
          <a href="#">
            <img src="DineHunt/img/icon-youtube.svg" alt="YouTube" className="h-8" />
          </a>
        </div>


      </div>
    </footer>
  );
}
