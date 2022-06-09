import React from 'react'

const Underline = ({ marginleft, marginbottom }) => {
  return (
    <div
      className={`w-20 h-1 mb-5 bg-yellow-500 mx-auto ${marginleft} ${marginbottom}`}
    ></div>
  )
}

export default Underline
