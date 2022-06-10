import React from 'react'

const NavbarLinks = ({ textSize, display, marginBottom, spacing }) => {
  return (
    <>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='#header'
        >
          home
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='#about'
        >
          about
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='#services'
        >
          services
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='#projects'
        >
          projects
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='#skills'
        >
          skills
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='#contact'
        >
          contact
        </a>
      </li>
      <li>
        <a
          href='https://drive.google.com/file/d/1dQkuIwdOVuUuv_8E37_jQrFeQCU8JM2c/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          <button class='btn btn-outline'>Download Resume</button>
        </a>
      </li>
    </>
  )
}

export default NavbarLinks
