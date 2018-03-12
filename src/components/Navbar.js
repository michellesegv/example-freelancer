import React from 'react'
import PropTypes from 'prop-types'
import ItemNavbar from './ItemNavbar'

const Navbar = ({items}) => {
  return (
    <header className='pd'>
      <nav className='navbar'>
        <a className='navbar-brand font-weight-bold text-uppercase' href='#'>start bootstrap</a>
        <div>
          <ul className='list-inline'>
		        {items.map((item, i) => <ItemNavbar item={item} key={i} />)}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
