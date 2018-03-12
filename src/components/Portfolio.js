import React from 'react'
import PropTypes from 'prop-types'
import ContainerImg from './ContainerImg'

const Portfolio = ({ imgs }) => {
  return (
    <section id='portfolio' className='pd text-center'>
      <h2 className='text-uppercase font-weight-bold'>portfolio</h2>
      <span class='star'>☆</span>
      <div className='container'>
        <div className='row'>
	        {imgs.map((img) => <ContainerImg src={img.src} alt={img.alt} />)}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
