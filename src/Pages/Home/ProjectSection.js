import React from 'react'
import Underline from '../Shared/Underline'
import img1 from '../../Images/bikerz-heaven.JPG'
import img2 from '../../Images/fruit-mama.JPG'
import img3 from '../../Images/doctor-smile.JPG'

const ProjectSection = () => {
  return (
    <section id='projects' className='py-20'>
      <div>
        <h2 className='text-2xl font-bold tracking-widest capitalize text-center'>
          latest works
        </h2>
        <Underline margintop='mt-2' />
      </div>

      <div className='container mx-auto md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        <article className='relative bg-yellow-200 rounded-md mb-4 md:mb-0 p-4 flex flex-col gap-y-4'>
          <div>
            <img src={img1} alt='single project' className='project-img' />
            <div className='project-info'>
              <h4 className='text-center mt-2 text-xl font-bold'>
                Bikerz Heaven
              </h4>
              <p className='mt-2'>
                <span className='font-bold'>Description:</span> This is a web
                app for Bike parts manufacturer management system.This website
                can be used to purchase the bike parts with stripe in bulk
                quantity. User can add review as well as delete order.
              </p>
              <h1>
                <span className='font-bold mt-2'>Technology Used:</span>{' '}
                ReactJS, HTML5, CSS3, Tailwind, DaisyUI, Google Firebase, React
                Firebase Hooks, React Toastify, React Router, Fontawesome, React
                Hook Form, Recharts, React Query, Stripe, Axios
              </h1>
            </div>
          </div>
          <div className='grid grid-cols-3 items-center justify-between mt-auto font-bold'>
            <a
              href='https://bikerz-heaven.web.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Link
            </a>
            <a
              className='justify-self-center'
              href='https://github.com/tusharpramanikbd/bikerz-heaven-client'
              target='_blank'
              rel='noreferrer'
            >
              Client Code
            </a>
            <a
              className='justify-self-end'
              href='https://github.com/tusharpramanikbd/bikerz-heaven-server'
              target='_blank'
              rel='noreferrer'
            >
              Server Code
            </a>
          </div>
        </article>

        <article className='relative bg-yellow-200 rounded-md mb-4 md:mb-0 p-4 flex flex-col gap-y-4'>
          <div>
            <img src={img2} alt='single project' className='project-img' />
            <div className='project-info'>
              <h4 className='text-center mt-2 text-xl font-bold'>Fruit Mama</h4>
              <p className='mt-2'>
                <span className='font-bold'>Description:</span> This is a fruit
                inventory management system.This website can be used to modify
                the quantity of the fruits, add fruits, delete fruits. New
                suppliers can also contact the website owner with the contact us
                section.
              </p>
              <h1>
                <span className='font-bold mt-2'>Technology Used:</span>{' '}
                ReactJS, HTML5, CSS3, React Bootstrap, Google Firebase, React
                Firebase Hooks, React Toastify, React Router, Fontawesome, React
                Hook Form, Recharts, React Query, React Helmet Async
              </h1>
            </div>
          </div>
          <div className='grid grid-cols-3 items-center justify-between mt-auto font-bold'>
            <a
              href='https://fruit-mama-client.web.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Link
            </a>
            <a
              className='justify-self-center'
              href='https://github.com/tusharpramanikbd/fruit-mama-client'
              target='_blank'
              rel='noreferrer'
            >
              Client Code
            </a>
            <a
              className='justify-self-end'
              href='https://github.com/tusharpramanikbd/fruit-mama-server'
              target='_blank'
              rel='noreferrer'
            >
              Server Code
            </a>
          </div>
        </article>

        <article className='relative bg-yellow-200 rounded-md mb-4 md:mb-0 p-4 flex flex-col gap-y-4'>
          <div>
            <img src={img3} alt='single project' className='project-img' />
            <div className='project-info'>
              <h4 className='text-center mt-2 text-xl font-bold'>
                Doctor Smile
              </h4>
              <p className='mt-2'>
                <span className='font-bold'>Description:</span> This is a
                dentist service website where you can book for various services.
                You can create account with email and password and verify email
                else you can signin with google. You can login with your email
                and password.
              </p>
              <h1>
                <span className='font-bold mt-2'>Technology Used:</span>{' '}
                ReactJS, HTML5, CSS3,React Bootstrap, Google Firebase, React
                Firebase Hooks, React Toastify, React Router.
              </h1>
            </div>
          </div>
          <div className='grid grid-cols-2 items-center justify-between mt-auto font-bold'>
            <a
              href='https://doctor-smile-app-9f0d2.web.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Link
            </a>
            <a
              className='justify-self-end'
              href='https://github.com/tusharpramanikbd/doctor-smile'
              target='_blank'
              rel='noreferrer'
            >
              Client Code
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProjectSection
