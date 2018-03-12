import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) => {
  return (
    <footer id='footer' className='pd'>
      <div className='container pd'>
        <div className='row'>
          {children}
        </div>
      </div>
      <div className='text-center'>
        <span>Copyright &#x24B8; Your Website 2018 | Coded by Ruth Salvador & Michelle Seguil</span>
      </div>
    </footer>
  )
}

export default Footer