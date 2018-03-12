import React from 'react'
import PropTypes from 'prop-types'
import ContainerImg from './ContainerImg'

const Portfolio = ({ imgs }) => {
  return (
    <section id='portfolio' className='main-center width-100'>
      <div className='width-85'>
        <div className='column cross-center pad-15'>
          <h2 className="uppercase">portfolio</h2>
          <span class="star">☆</span>
        </div>
        <div className='width-100 wrap main-between height-590'>
          {imgs.map((img) => <ContainerImg src={img.src} alt={img.alt} />)}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
