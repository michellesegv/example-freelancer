import React from 'react'
import PropTypes from 'prop-types'

const ItemNavbar = ({ item, i }) => {
  return (
    <li key= {i} className='list-inline-item text-uppercase font-weight-bold'><a className='nav-link' href={`#${item}`}>{item}</a></li>
  )
}

export default ItemNavbar
