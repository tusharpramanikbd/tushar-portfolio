import React from 'react'

const Button = ({ text }) => {
  return (
    <a
      href='#contact'
      className='uppercase bg-yellow-500 text-gray-800 py-1.5 px-3 tracking-widest inline-block font-bold transition duration-300 ease-linear text-sm border-2 border-solid border-transparent cursor-pointer shadow-md rounded-lg hover:bg-yellow-400 mt-8'
    >
      {text}
    </a>
  )
}

export default Button
