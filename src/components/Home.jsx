import React, { Component } from 'react'
import { Row, Image } from 'react-bootstrap';
import backdropImage from '../images/explosion.gif';
import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <Row className="backdrop_wrapper">
                <Image id="backdrop" src={backdropImage}/>
                <div className="text-center">
                    <h2 className='title'>Welcome to the National Boogaloo Registry</h2>
                    <p>Please browse around and join the coalition</p>
                </div>
            </Row>
        )
    }
}
