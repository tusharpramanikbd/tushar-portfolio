import React from 'react'
import SocialIcons from '../Shared/SocialIcons'
import profileImage from '../../Images/1.jpg'
import Underline from '../Shared/Underline'
import Button from '../Shared/Button'

const Header = () => {
  return (
    <header className='bg-orange-100'>
      <div className='container mx-auto min-h-[calc(100vh-5rem)] grid place-items-center md:grid-cols-2'>
        <article>
          <Underline marginleft='ml-0' marginbottom='mb-2' />
          <h1 className='capitalize tracking-widest leading-5 text-3xl md:text-5xl font-bold mt-4'>
            i'm tushar
          </h1>
          <h1 className='capitalize tracking-widest leading-5 mt-4 font-bold text-gray-500 md:text-xl'>
            MERN stack developer
          </h1>
          <Button text='Hire Me' />
          <ul className='grid grid-cols-3 justify-items-start mt-8 gap-[-2.75rem]'>
            <SocialIcons />
          </ul>
        </article>
        <article className='hidden md:block relative lg:before:absolute lg:before:border-4 lg:before:rounded-lg lg:before:border-solid lg:before:border-yellow-500 lg:before:top-7 lg:before:left-7 lg:before:w-full lg:before:h-full'>
          <img
            className='max-w-sm max-h-[30rem] object-cover rounded-lg relative'
            src={profileImage}
            alt='Tushar Pramanik'
          />
        </article>
      </div>
    </header>
  )
}

export default Header
