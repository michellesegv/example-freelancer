import React from 'react'
import PropTypes from 'prop-types'

const ItemNavbar = ({ item, i }) => {
  return (
    <li key= {i} className='uppercase pad-15 font-09 js-nav'><a href={`#${item}`}>{item}</a></li>
  )
}

export default ItemNavbar
