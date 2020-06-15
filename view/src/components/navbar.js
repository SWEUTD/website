import React, { Component } from 'react';

// material ui imports
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';

// bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// my imports
import logo from '../assets/logo.png'

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
});

class navbar extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                        <Navbar bg="dark" variant="dark" expand="lg">
                            <Navbar.Brand href="/website/">
                            <img
                                alt=""
                                src={logo}
                                width="37"
                                height="31"
                                className="d-inline-block align-center"
                            />{' '}
                            UTD SWE
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/website/about">About</Nav.Link>
                                    <NavDropdown title="What We Do" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/website/events">Events</NavDropdown.Item>
                                        <NavDropdown.Item href="/website/weconference">WE Conference</NavDropdown.Item>
                                        <NavDropdown.Item href="/website/swematch">SWEMatch</NavDropdown.Item>
                                        <NavDropdown.Item href="https://hansikasundaresan.github.io/LadiesInTech/">Ladies in Tech</NavDropdown.Item>
                                        <NavDropdown.Item href="http://wehackutd.com">WEHack</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/website/calendar">Calendar</Nav.Link>
                                    <Nav.Link href="/website/join">Join</Nav.Link>
                                    <Nav.Link href="/website/portal">Member Portal</Nav.Link>
                                    <Nav.Link href="/website/officers">Officers</Nav.Link>
                                    <Nav.Link href="/website/swestars">SWE Stars</Nav.Link>
                                    <Nav.Link href="/website/contact">Contact</Nav.Link>
                                </Nav>
                                <Navbar.Brand href="https://www.facebook.com/sweutd" pullRight>
                                    <FontAwesomeIcon icon={faFacebook} size="lg" className="imageLink" style={{ color: '#DBC554' }}/>{' '}
                                </Navbar.Brand>
                                <Navbar.Brand href="https://www.instagram.com/sweutd/" pullRight>
                                    <FontAwesomeIcon icon={faInstagram} size="lg" className="imageLink" style={{ color: '#DBC554' }}/>{' '}
                                </Navbar.Brand>
                                <Navbar.Brand href="https://www.linkedin.com/in/sweutd/" pullRight>
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="imageLink" style={{ color: '#DBC554' }}/>{' '}
                                </Navbar.Brand>
                                <Navbar.Brand href="mailto:sweutd@gmail.com" pullRight>
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="imageLink"style={{ color: '#DBC554' }}/>{' '}
                                </Navbar.Brand>
                            </Navbar.Collapse> 
                    </Navbar>
                </AppBar>
                <div className={classes.toolbar} />
            </div>
        );
    }
}

export default withStyles(styles)(navbar);