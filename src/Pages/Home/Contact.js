import React, { useRef } from 'react'
import Underline from '../Shared/Underline'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Contact = () => {
  const form = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_jprmxmk',
        'template_hchg1q5',
        form.current,
        'tShebNNT3fepDy5CH'
      )
      .then(
        (result) => {
          toast.success('Your email is received')
          console.log(result.text)
          form.current.reset()
        },
        (error) => {
          toast.error('Error: Please try again')
          console.log(error.text)
        }
      )
  }

  return (
    <section id='contact' className='py-20 bg-orange-100'>
      <div className='w-full mx-auto'>
        <div>
          <h2 className='text-2xl font-bold tracking-widest capitalize text-center'>
            contact me
          </h2>
          <Underline margintop='mt-2' />
        </div>
        <form
          ref={form}
          className='mt-4 rounded-lg drop-shadow-lg bg-white w-11/12 md:w-9/12 lg:w-6/12 p-4 md:p-8 mx-auto'
          onSubmit={onSubmit}
        >
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Full Name</span>
            </label>
            <input
              type='text'
              name='fullName'
              placeholder='Your full name'
              className='input input-bordered w-full'
              required
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Your email address'
              className='input input-bordered w-full'
              required
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Message</span>
            </label>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='Your Message'
              name='message'
              required
            ></textarea>
          </div>

          <input
            className='btn btn-primary w-full mt-4'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
