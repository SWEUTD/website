import React, { Component } from 'react';

// material ui imports
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container'

// bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavItem from 'react-bootstrap/NavItem'

// my imports
import logo from '../assets/logo.png'
import { blue } from '@material-ui/core/colors';

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
});

class navbar extends Component {
    render() {
        const { classes } = this.props;
        const navbar = {backgroundColor: '#F16E10 !important'};
        return(
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                        <Navbar bg="dark" variant="dark" expand="lg">
                            <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            UTD SWE
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" style={navbar}>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/officers">Officers</Nav.Link>
                                    <NavDropdown title="What We Do" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                                        <NavDropdown.Item href="https://hansikasundaresan.github.io/LadiesinTech/">Ladies in Tech Mentorship Program</NavDropdown.Item>
                                        <NavDropdown.Item href="http://wehackutd.com">WEHack</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/join">Join</Nav.Link>
                                    <Nav.Link href="/portal">Member Portal</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>
                                <Nav pullRight>
                                    <NavItem eventKey={1} href="#">Hello</NavItem>
                                    <NavItem eventKey={2} href="#">World</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </AppBar>
                <div className={classes.toolbar} />
            </div>
        );
    }
}

export default withStyles(styles)(navbar);