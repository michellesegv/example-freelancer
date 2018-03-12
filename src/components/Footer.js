import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) => {
  return (
    <footer id='footer'>
      <div className="foot width-100 main-center">
        <div className="width-85 main-around">
          {children}
        </div>
      </div>
      <div className="copy">
        <span>Copyright &#x24B8; Your Website 2018 | Coded by Ruth Salvador & Michelle Seguil</span>
      </div>
    </footer>
  )
}

export default Footer