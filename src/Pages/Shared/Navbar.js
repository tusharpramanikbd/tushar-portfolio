import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='h-20 p-4 grid items-center transition-all'>
      <div className='container mx-auto'>
        {/* Nav Header */}
        <div className='grid grid-cols-2 items-center'>
          <h1 className='text-xl font-bold'>Tushar Pramanik</h1>
          <button className='bg-transparent border-transparent text-yellow-500 text-3xl cursor-pointer justify-self-end mr-4'>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
