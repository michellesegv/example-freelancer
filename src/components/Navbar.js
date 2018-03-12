import React from 'react'
import PropTypes from 'prop-types'
import ItemNavbar from './ItemNavbar'

const Navbar = ({items}) => {
  return (
    <header className='main-center height-100 width-100 js-header'>
      <div className='width-85 main-between cross-center'>
        <span className='uppercase pad-15 font-17 js-title'>
          <a href='#'>start bootstrap</a>
        </span>
        <nav>
          <ul className='row'>
            {items.map((item, i) => <ItemNavbar item={item} key={i} />)}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
