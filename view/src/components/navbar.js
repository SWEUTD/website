import React, { Component } from 'react';

// material ui imports
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container'

// bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
                        <Navbar bg="primary" variant="dark" expand="lg">
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
                                <Nav.Link href="/events">Events</Nav.Link>
                                <Nav.Link href="/join">Join</Nav.Link>
                                <Nav.Link href="/portal">Portal</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
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