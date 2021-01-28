import { Component } from 'react'
import react from 'react'
import Carousel from 'react-bootstrap/Carousel'

import law from '../../Assets/law.jpg'
import justice from '../../Assets/justice.jpg'
import liberty from '../../Assets/liberty.jpg'

import './HomeCarousal.css'

export default class HomeCarousal extends Component {

  render(){
      return (
        <Carousel>
            <Carousel.Item style={{height: '500px', overflow: 'hidden'}}>
            <img
                className="d-block w-100"
                src={liberty}
                alt="First slide"
                style={{height: '300px !important'}}
            />
            </Carousel.Item>
            <Carousel.Item style={{height: '500px', overflow: 'hidden'}}>
            <img
                className="d-block w-100"
                src={law}
                alt="Third slide"
                style={{height: '300px !important'}}
            />
            </Carousel.Item>
            <Carousel.Item style={{height: '500px', overflow: 'hidden'}}>
            <img
                className="d-block w-100"
                src={justice}
                alt="Third slide"
                style={{height: '300px !important'}}
            />
            </Carousel.Item>
        </Carousel>
    );
  }
  
}
