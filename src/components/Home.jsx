import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to the National Boogaloo Registry</h2>
                    <p>Please browse around and join the coalition</p>
                </Jumbotron>
            </Container>
        )
    }
}