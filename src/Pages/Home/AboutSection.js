import React from 'react'
import Underline from '../Shared/Underline'
import aboutImg from '../../Images/2.jpg'

const AboutSection = () => {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto grid md:grid-cols-2 md:items-center gap-y-12 gap-x-8 px-8 md:px-0'>
        <article className='justify-self-center relative lg:before:absolute lg:before:border-4 lg:before:rounded-lg lg:before:border-solid lg:before:border-yellow-500 lg:before:top-7 lg:before:right-7 lg:before:w-full lg:before:h-full'>
          <img
            className='block w-full max-w-sm max-h-[30rem] object-cover rounded-lg relative'
            src={aboutImg}
            alt='about img'
          />
        </article>
        <article className='md:self-center'>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold tracking-widest capitalize'>
              about
            </h2>
            <Underline margintop='mt-2' marginleft='ml-0' />
          </div>
          <p className='text-gray-500 text-justify lg:w-10/12'>
            A highly motivated programming enthusiast with one year experience
            on Android Application Development and has JavaScript and React
            expertise. A hungry coder who has experience working under pressure
            and is always eager to learn more. Always try to solve complex
            problems so that easy problems seem easier. A team player with the
            mentality to learn from seniors as well as juniors.
          </p>
          <p className='text-gray-500 mt-4 text-justify lg:w-10/12'>
            My target is to become a good MERN stack developer. I have the
            knowledge of HTML5, CSS3, Vanilla JavaScript, React JS. I have
            completed several projects with React JS and used Node.js and
            Express.js as backend . I have used React Router and Context API on
            several projects. I have good knowledge on frequently used React
            Hooks like, useState(), useReducer(), useEffect(), useRef(), etc. I
            have used Google Firebase to authenticate and host the client site
            and Heroku for backend. I have worked with several third party
            libraries like Axios, Rechart, React Firebase Hooks, Toastify, React
            Form, React Query, React Helmet Async, React Day Picker, Stripe,
            etc. I have worked with Bootstrap and Tailwind along with their
            component library React Bootstrap and DaisyUI.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
