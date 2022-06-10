import React from 'react'
import Underline from '../Shared/Underline'

const Skills = () => {
  return (
    <section id='skills' className='py-20 bg-[#FCEEC5]'>
      <div className='mx-auto md:w-9/12 lg:w-6/12 px-4 md:px-0'>
        <div>
          <h2 className='text-2xl font-bold tracking-widest capitalize text-center'>
            skills
          </h2>
          <Underline margintop='mt-2' />
        </div>

        <h1 className='text-xl font-bold'>Expertise:</h1>
        <h1 className='text-justify'>
          JavaScript, ES6, React, React Router, React Hooks, Context API, HTML5,
          CSS3, Bootstrap 5, Tailwind, DaisyUI.
        </h1>
        <h1 className='text-xl font-bold mt-4'>Comfortable:</h1>
        <h1 className='text-justify'>
          Node.js, Express.js, REST API, Nodemon, MongoDB, JWT, Firebase,
          TypeScript.
        </h1>
        <h1 className='text-xl font-bold mt-4'>Familiar:</h1>
        <h1 className='text-justify'>
          Node Mailer, Stripe, Redux, C, C++, C#, Java, Android Application
          Development, MySQL.
        </h1>
        <h1 className='text-xl font-bold mt-4'>Tools:</h1>
        <h1 className='text-justify'>
          VS Code, React DevTools, Github, Chrome DevTools, Firefox DevTools,
          Heroku, Netlify, Postman.
        </h1>
      </div>
    </section>
  )
}

export default Skills
