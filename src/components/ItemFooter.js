import React from 'react'
import PropTypes from 'prop-types'

const ItemFooter = ({ title, children }) => {
  return (
    <div className='col-lg-4 text-center pd'>
      <h3 className='text-uppercase'>{title}</h3>
      <span className=''>
        {children}
      </span>
    </div>
  )
}

export default ItemFooter