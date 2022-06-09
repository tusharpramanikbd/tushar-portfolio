import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  const [translate, setTranslate] = useState('-translate-x-full')

  const barButtonClickHandler = () => {
    if (translate === '-translate-x-full') {
      setTranslate('translate-x-0')
    }
  }

  const crossButtonClickHandler = () => {
    if (translate === 'translate-x-0') {
      setTranslate('-translate-x-full')
    }
  }
  return (
    <>
      <nav className='h-20 p-4 grid items-center transition-all md:bg-orange-100'>
        <div className='container mx-auto md:grid md:grid-cols-2 md:items-center'>
          {/* Nav Header */}
          <div className='grid grid-cols-2 items-center'>
            <h1 className='text-xl font-bold'>Tushar Pramanik</h1>
            <button
              onClick={barButtonClickHandler}
              className='bg-transparent border-transparent text-yellow-500 text-3xl cursor-pointer justify-self-end mr-2 md:hidden transition duration-300 ease-linear hover:text-yellow-400'
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {/* Nav Links */}
          <ul className='hidden capitalize md:grid md:grid-cols-4 md:justify-items-center md:gap-x-4 text-gray-800 font-bold tracking-[.25rem]'>
            <NavbarLinks />
          </ul>
        </div>
      </nav>
      {/* End of Navbar */}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-full h-full bg-gray-300 z-10 grid place-items-center transition duration-300 ease-linear ${translate}`}
      >
        <div>
          <button
            onClick={crossButtonClickHandler}
            className='absolute top-4 right-6 text-4xl bg-transparent border-transparent text-red-500 transition duration-300 ease-linear hover:text-red-400'
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* Sidebar Links */}
          <ul className='text-center capitalize'>
            <NavbarLinks
              textSize='text-3xl'
              display='inline-block'
              marginBottom='mb-6'
              spacing='tracking-widest'
            />
          </ul>
          {/* Social Icons */}
          <ul className='grid grid-cols-3 justify-items-center mt-12 w-80'>
            <li>
              <a
                href='https://www.twitter.com'
                className='text-2xl transition duration-300 ease-linear hover:text-yellow-500'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                className='text-2xl transition duration-300 ease-linear hover:text-yellow-500'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                className='text-2xl transition duration-300 ease-linear hover:text-yellow-500'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Navbar
