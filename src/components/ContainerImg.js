import React from 'react'
import PropTypes from 'prop-types'

const ContainerImg = ({src, alt}) => {
  return (
    <figure className="cont-image">
      <img className="width-100" src={src} alt={alt} />
    </figure>
  )
}

export default ContainerImg
