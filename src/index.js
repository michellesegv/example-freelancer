import './base.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import ItemFooter from './components/ItemFooter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar items={ ['intro', 'portfolio', 'footer'] } />
      <Intro />
      <Portfolio imgs={ [
        { src: 'https://user-images.githubusercontent.com/25906896/37288626-c3485b40-25d5-11e8-8e4e-6c6671573498.png', alt: 'cabin' },
        { src: 'https://user-images.githubusercontent.com/25906896/37288782-248ab5a6-25d6-11e8-8282-cb56b4a7884d.png', alt: 'cake' },
        { src: 'https://user-images.githubusercontent.com/25906896/37288846-44becca4-25d6-11e8-969a-9e686dd905ff.png', alt: 'circus' },
        { src: 'https://user-images.githubusercontent.com/25906896/37288873-517cd80a-25d6-11e8-9e25-9455f4265e8c.png', alt: 'game' },
        { src: 'https://user-images.githubusercontent.com/25906896/37288935-7b5169a2-25d6-11e8-815a-4624e95f1acd.png', alt: 'safe' },
        { src: 'https://user-images.githubusercontent.com/25906896/37288957-8979c100-25d6-11e8-933b-5ec047541536.png', alt: 'submarine' }
        ]} />
      <Footer>
        <ItemFooter title={'location'}>
          3481 Melrose Place Beverly Hills, CA 90210
        </ItemFooter>
        <ItemFooter title={'around the web'}>
          The web is awesom <a href="#">Follow Me</a>.
        </ItemFooter>
        <ItemFooter title={'about freelancer'}>
          Freelance is a free to use, open source Bootstrap theme created by <a href='#'>Start Bootstrap</a>.
        </ItemFooter>
      </Footer>
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
)