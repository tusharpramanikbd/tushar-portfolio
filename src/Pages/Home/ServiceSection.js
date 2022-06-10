import React from 'react'
import Underline from '../Shared/Underline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodepen,
  faSketch,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons'
import './ServiceSection.css'

const ServiceSection = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='text-2xl font-bold tracking-widest capitalize text-center'>
        <h2>services</h2>
        <Underline margintop='mt-2' />
      </div>
      <div className='container mx-auto md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        <article className='bg-white py-12 px-6 mb-8 md:mb-0 rounded-md text-center transition duration-300 ease-linear shadow-lg service'>
          <FontAwesomeIcon className='text-4xl mb-6' icon={faCodepen} />
          <h4 className='text-xl font-bold capitalize'>web development</h4>
          <div className='underline'></div>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            rem odio harum eveniet impedit laudantium id fuga ex repellendus.
            Consectetur.
          </p>
        </article>

        <article className='bg-white py-12 px-6 mb-8 md:mb-0 rounded-md text-center transition duration-300 ease-linear shadow-lg service'>
          <FontAwesomeIcon className='text-4xl mb-6' icon={faSketch} />
          <h4 className='text-xl font-bold capitalize'>web design</h4>
          <div className='underline'></div>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            rem odio harum eveniet impedit laudantium id fuga ex repellendus.
            Consectetur.
          </p>
        </article>

        <article className='bg-white py-12 px-6 mb-8 md:mb-0 rounded-md text-center transition duration-300 ease-linear shadow-lg service'>
          <FontAwesomeIcon className='text-4xl mb-6' icon={faAndroid} />
          <h4 className='text-xl font-bold capitalize'>app development</h4>
          <div className='underline'></div>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            rem odio harum eveniet impedit laudantium id fuga ex repellendus.
            Consectetur.
          </p>
        </article>
      </div>
    </section>
  )
}

export default ServiceSection
