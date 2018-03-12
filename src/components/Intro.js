import React from 'react'
import PropTypes from 'prop-types'

const Intro = ({ _ }) => {
  return (
    <section className='home pd text-center'>
      <figure>
        <img src='https://user-images.githubusercontent.com/25906896/37291128-fe7d82a2-25db-11e8-847f-02b0a3e71d5c.png' alt='profile' />
      </figure>
      <h1 className='text-uppercase font-weight-bold'>start bootstrap</h1>
      <div>
        <p className="star">☆</p>
        <p className='font-15'>Web Developer - Graphic Artist - User Experience Designer</p>
      </div>
    </section>
  )
}

export default Intro