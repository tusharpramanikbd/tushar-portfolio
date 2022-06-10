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
          href='https://www.twitter.com'
          className={`text-2xl transition duration-300 ease-linear hover:text-yellow-500 ${textColor}`}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          href='https://www.twitter.com'
          className={`text-2xl transition duration-300 ease-linear hover:text-yellow-500 ${textColor}`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href='https://www.twitter.com'
          className={`text-2xl transition duration-300 ease-linear hover:text-yellow-500 ${textColor}`}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </>
  )
}

export default SocialIcons
