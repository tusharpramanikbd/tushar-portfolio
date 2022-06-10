import React from 'react'
import { useForm } from 'react-hook-form'
import Underline from '../Shared/Underline'

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  return (
    <section id='contact' className='py-20 bg-gray-100'>
      <div className='w-full mx-auto'>
        <div>
          <h2 className='text-2xl font-bold tracking-widest capitalize text-center'>
            contact me
          </h2>
          <Underline margintop='mt-2' />
        </div>
        <form
          className='mt-4 rounded-lg drop-shadow-lg bg-white w-11/12 md:w-9/12 lg:w-6/12 p-4 md:p-8 mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Your full name'
              className='input input-bordered w-full'
              {...register('fullName', {
                required: {
                  value: true,
                  message: 'Full Name is required',
                },
              })}
            />
            <label className='label'>
              {errors.fullName?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.fullName.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Your email address'
              className='input input-bordered w-full'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              })}
            />
            <label className='label'>
              {errors.email?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Message</span>
            </label>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='Your Message'
              {...register('message', {
                required: {
                  value: true,
                  message: 'Message is required',
                },
              })}
            ></textarea>
            <label className='label'>
              {errors.message?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.message.message}
                </span>
              )}
            </label>
          </div>

          <input
            className='btn btn-primary w-full'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
