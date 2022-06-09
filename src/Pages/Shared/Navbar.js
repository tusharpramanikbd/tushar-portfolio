import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='h-20 p-4 grid items-center transition-all md:bg-orange-100'>
      <div className='container mx-auto md:grid md:grid-cols-2 md:items-center'>
        {/* Nav Header */}
        <div className='grid grid-cols-2 items-center'>
          <h1 className='text-xl font-bold'>Tushar Pramanik</h1>
          <button className='bg-transparent border-transparent text-yellow-500 text-3xl cursor-pointer justify-self-end mr-2 md:hidden'>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {/* Nav Links */}
        <ul className='hidden capitalize md:grid md:grid-cols-4 md:justify-items-center md:gap-x-4 text-gray-800 font-bold tracking-[.25rem]'>
          <li>
            <a
              className='hover:text-yellow-500 transition duration-300 ease-linear'
              href='index.html'
            >
              home
            </a>
          </li>
          <li>
            <a
              className='hover:text-yellow-500 transition duration-300 ease-linear'
              href='about.html'
            >
              about
            </a>
          </li>
          <li>
            <a
              className='hover:text-yellow-500 transition duration-300 ease-linear'
              href='projects.html'
            >
              projects
            </a>
          </li>
          <li>
            <a
              className='hover:text-yellow-500 transition duration-300 ease-linear'
              href='contact.html'
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
