import React from 'react'

const NavbarLinks = ({ textSize, display, marginBottom, spacing }) => {
  return (
    <>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='index.html'
        >
          home
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='about.html'
        >
          about
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='projects.html'
        >
          projects
        </a>
      </li>
      <li>
        <a
          className={`hover:text-yellow-500 transition duration-300 ease-linear ${textSize} ${display} ${marginBottom} ${spacing}`}
          href='contact.html'
        >
          contact
        </a>
      </li>
    </>
  )
}

export default NavbarLinks
