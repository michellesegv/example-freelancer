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
      <Navbar items={['intro', 'portfolio', 'footer']} />
      <Intro />
      <Portfolio imgs={[{ src: 'https://lh5.googleusercontent.com/DyvYNsTWKYJNjnskCdBCO8mQncommsD6c4Ps9gVSOt8Qp8sR6YJ9Cku5kk9qzOWwewyUaFHFt1NMyyWuNHMP=w1366-h662-rw', alt: 'Cabaña' }, { src: 'https://lh5.googleusercontent.com/UY42kpZQQ5oIpHh5NPQ_8_xs74psDpd1C840rfiR-9Um7VtPEy_K4Qbr14Bq-jn17oo194ZgSgJyoJJ9S4wq=w1366-h662-rw', alt: 'Pastel' }, { src: 'https://lh6.googleusercontent.com/tkunzY8wYKlmEYlNRiRYuv0nsk316bkQLLWRdYDwmdqy7YsA51ExTLeqSgUvM_4yWqWNOdvEycEJXMOOHfjs=w1366-h662-rw', alt: 'Circo' }, { src: 'https://lh5.googleusercontent.com/_56zg2uxnX6VwuH1D_YLzB70Z2yqjgQpoOLOIIBR-AVXdzDD06FQwoW7BLimopOCb5WyTVvgXjt5eMdRfKn7=w1366-h662-rw', alt: 'Game' }, { src: 'https://lh6.googleusercontent.com/vcg6JMkZMqw3knLQAqsuG1MYTrdwxV42c4o4pWSZCqSWnvwjDhnhbNUzHY0Lmb_MeSLKuPK-VC3q4aryTusG=w1366-h662-rw', alt: 'Seguridad' }, { src: 'https://lh3.googleusercontent.com/FnYDn8HJKXYOWcnLcVo66BuG_sm8-d2RkdUlXTWq_UI6bkx02DvSLMWQzORWndmUhgk_1cDP7nrXA5mlDDla=w1366-h662-rw', alt: 'Submarino' }]} />
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