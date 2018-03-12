import React from 'react'
import PropTypes from 'prop-types'

const ItemFooter = ({ title, children }) => {
  return (
    <div className='column cross-center width-33'>
      <h3 className='uppercase font-15'>{title}</h3>
      <span className='width-53 line-he '>
        {children}
      </span>
    </div>
  )
}

export default ItemFooter