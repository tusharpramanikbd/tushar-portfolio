import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavbarLinks from './NavbarLinks'
import './Navbar.css'
import SocialIcons from './SocialIcons'

const Navbar = () => {
  const [translate, setTranslate] = useState('-translate-x-full')
  const [fixedNavbar, setFixedNavbar] = useState('')

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 80) {
        setFixedNavbar('navbar-fixed')
      } else {
        setFixedNavbar('')
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

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
      <nav
        className={`h-20 p-4 grid items-center transition duration-300 ease-linear md:bg-orange-100 ${fixedNavbar}`}
      >
        <div className='container mx-auto md:grid md:grid-cols-auto md:items-center'>
          {/* Nav Header */}
          <div className='grid grid-cols-2 items-center'>
            <h1 className='text-xl font-bold tracking-widest leading-5'>
              Tushar <span className='text-yellow-500'>Pramanik</span>
            </h1>
            <button
              onClick={barButtonClickHandler}
              className='bg-transparent border-transparent text-yellow-500 text-3xl cursor-pointer justify-self-end mr-2 md:hidden transition duration-300 ease-linear hover:text-yellow-400'
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {/* Nav Links */}
          <ul className='hidden capitalize md:grid md:grid-cols-7 md:items-center md:justify-items-center md:gap-x-4 text-gray-800 font-bold tracking-[.25rem]'>
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
            <SocialIcons />
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Navbar
