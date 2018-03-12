import React from 'react'
import PropTypes from 'prop-types'

const ContainerImg = ({src, alt}) => {
  return (
    <figure className='col-lg-4'>
      <img className='img-fluid' src={src} alt={alt} />
    </figure>
  )
}

export default ContainerImg
