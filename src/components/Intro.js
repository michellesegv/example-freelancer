import React from 'react'
import PropTypes from 'prop-types'

const Intro = ({ _ }) => {
  return (
    <section id='intro' className='main-center width-100 height-700'>
      <div className='width-85'>
        <figure className='main-center pad-15'>
          <img src='https://user-images.githubusercontent.com/25906896/37291128-fe7d82a2-25db-11e8-847f-02b0a3e71d5c.png' alt='profile' />
        </figure>
        <div className='cross-center column'>
          <h1 className='uppercase font-42'>start bootstrap</h1>
          <div>
            <span className="lin"></span>
            <span className="star">☆</span>
            <span className="lin"></span>
          </div>
          <span className='font-15'>Web Developer - Graphic Artist - User Experience Designer</span>
        </div>
      </div>
    </section>
  )
}

export default Intro