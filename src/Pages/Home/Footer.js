import React from 'react'
import SocialIcons from '../Shared/SocialIcons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='pb-4 bg-[#222] grid place-items-center'>
      <ul className='grid grid-cols-3 justify-items-start mt-8 gap-8 mb-6'>
        <SocialIcons textColor='text-yellow-300' />
      </ul>
      <p className='text-gray-500 text-sm md:text-xl capitalize'>
        &copy; <span>{currentYear}</span> Tushar Pramanik. all right reserved
      </p>
    </footer>
  )
}

export default Footer
