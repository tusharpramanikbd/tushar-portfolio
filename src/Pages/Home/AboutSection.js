import React from 'react'
import Button from '../Shared/Button'
import Underline from '../Shared/Underline'
import aboutImg from '../../Images/2.jpg'

const AboutSection = () => {
  return (
    <section className='py-20'>
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
          <p className='text-gray-500 text-justify lg:w-9/12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consectetur quo voluptatem ipsa hic culpa ipsam placeat fuga est, ab
            quaerat velit tempora nesciunt a natus nemo perferendis incidunt
            quia voluptates quod. Quos deserunt perferendis repellat cum
            dignissimos? Labore, dignissimos.
          </p>
          <p className='text-gray-500 mt-4 text-justify lg:w-9/12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consectetur quo voluptatem ipsa hic culpa ipsam placeat fuga est, ab
            quaerat velit tempora nesciunt a natus nemo perferendis incidunt
            quia voluptates quod. Quos deserunt perferendis repellat cum
            dignissimos? Labore, dignissimos.
          </p>
          <div className='text-center lg:w-9/12'>
            <Button text='About Me' />
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
