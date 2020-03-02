import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col, } from 'react-bootstrap'

import bg5 from './images/circuit-boards/1.jpg'
import bg6 from './images/circuit-boards/2.jpg'
import bg7 from './images/circuit-boards/3.jpg'

// import FA from 'react-fontawesome'

import About          from './About'
import ContactUs2     from './ContactUs2'
import Industries     from './Industries'
import MainBanner     from './MainBanner'
import { Map }        from './Map'
import OurProcessSimple from './OurProcessSimple'
import Services       from './Services'
import Team           from './Team'
import Technology     from './Technology'
import Testimonials   from './Testimonials'
import Pricing        from './Pricing'

class Home extends React.Component {
  render () {
    // console.log('+++ render home:', this.props)

    return (
      <div id="homeContent" >
        <MainBanner />
        <About />
        <Services />
        <Technology />
        <OurProcessSimple />
        { /* <Team /> */ }
        <Testimonials />{ /* and Clients */ }
        { /* <Pricing /> */ }
        <ContactUs2 />
        <Map />
      </div>
    )
  }
}

export default Home
