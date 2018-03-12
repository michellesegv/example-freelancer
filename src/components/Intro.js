import React from 'react'
import PropTypes from 'prop-types'

const Intro = ({ _ }) => {
  return (
    <section id='intro' className='main-center width-100 height-700'>
      <div className='width-85'>
        <figure className='main-center pad-15'>
          <img src='https://lh5.googleusercontent.com/FlFuCqLY1rJ5cheLxmCgwiKfbAAqbqDHCsFQ98yD7-4Do0YS-J9t2aXCpmFv_AKWV2VsoyKq721XaCyGE5J7=w1366-h662' alt='profile' />
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