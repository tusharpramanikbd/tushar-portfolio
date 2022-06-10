import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SocialIcons = ({ textColor }) => {
  return (
    <>
      <li>
        <a
          href='https://www.facebook.com/tusharpramanik93'
          target='_blank'
          rel='noreferrer'
          className={`text-2xl transition duration-300 ease-linear hover:text-yellow-500 ${textColor}`}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          href='https://github.com/tusharpramanikbd'
          target='_blank'
          rel='noreferrer'
          className={`text-2xl transition duration-300 ease-linear hover:text-yellow-500 ${textColor}`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/tushar-pramanik/'
          target='_blank'
          rel='noreferrer'
          className={`text-2xl transition duration-300 ease-linear hover:text-yellow-500 ${textColor}`}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </>
  )
}

export default SocialIcons
