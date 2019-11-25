import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">NBR</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    {/* TODO: Add search function when forum is up
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form> */}
                </Navbar>
        )
    }
}
