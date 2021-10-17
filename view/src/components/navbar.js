// navbar.js

// creates the navigation bar component

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

// logos
import logo from "../assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

class navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar} style={{zIndex : 12345678}}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="37"
                height="31"
                className="d-inline-block align-center"
              />{" "}
              SWE UTD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>
                  <NavDropdown.Item href="/officers">Officers</NavDropdown.Item>
                  <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="What We Do" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                  <NavDropdown.Item href="/weconference">
                    WE Conference
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/swematch">SWEMatch</NavDropdown.Item>
                  <NavDropdown.Item href="http://utdlitmp.com/">
                    Ladies in Tech
                  </NavDropdown.Item>
                  <NavDropdown.Item href="http://wehackutd.com">
                    WEHack
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Get Involved" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/join">Join</NavDropdown.Item>
                  <NavDropdown.Item href="/swestars">
                    SWE Stars
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/calendar">Calendar</Nav.Link>
                <Nav.Link href="/portal">Member Portal</Nav.Link>
                <Nav.Link href="/contact" id="basic-nav-dropdown">Subsribe to our mailing list!</Nav.Link>
              </Nav>
              <Navbar.Brand href="https://discord.gg/Tg4476YPSk" pullRight>
                <FontAwesomeIcon
                  icon={faDiscord}
                  size="lg"
                  className="imageLink"
                  style={{ color: "#DBC554" }}
                />{" "}
              </Navbar.Brand>
              <Navbar.Brand href="https://www.facebook.com/sweutd" pullRight>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="imageLink"
                  style={{ color: "#DBC554" }}
                />{" "}
              </Navbar.Brand>
              <Navbar.Brand href="https://www.instagram.com/sweutd/" pullRight>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="imageLink"
                  style={{ color: "#DBC554" }}
                />{" "}
              </Navbar.Brand>
              <Navbar.Brand
                href="https://www.linkedin.com/in/sweutd/"
                pullRight
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="imageLink"
                  style={{ color: "#DBC554" }}
                />{" "}
              </Navbar.Brand>
              <Navbar.Brand href="mailto:sweutd@gmail.com" pullRight>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="imageLink"
                  style={{ color: "#DBC554" }}
                />{" "}
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
