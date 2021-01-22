import React, { Component } from "react";
import Collapsible from 'react-collapsible';

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import axios from "axios";
import { authMiddleWare } from "../util/auth";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  details: {
    width: "100%",
    display: "flex",
  }
});

class event extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        netid: "",
        classification: "",
        major: "",
        otherMajor: "",
        events: [],
        points: 0,
        previousPoints: [],
        currentSection: "",
        uiLoading: true,
        buttonLoading: false,
        imageError: "",
        height: 0
      };
    }

    render() {
      const { classes } = this.props;
      return (
        <main>
          <Card
            className={classes.details}
            className="movingItem"
            variant="outlined"
          >
            <CardContent>
              <a href="https://docs.google.com/document/d/1_P6LQMYM5nhvLS9loqj5tLTTVhgseGEj258ptaPb3Bg/edit?usp=sharing" class="myButton" target="_blank">COLLINS AEROSPACE </a>
              <br></br>
              <br></br>
              <a href= "https://docs.google.com/document/d/1lJBkXJaxMxI0JIqfVPEqLNq1TKrnUPdzDPogSxYyPAg/edit?usp=sharing" class="myButton" target="_blank">TEXTRON                                                                                                      </a>
              <br></br>
              <br></br>
              <a href= "https://docs.google.com/document/d/1GOA84kxsoYQe3nhMsaAUSOzZrJwG4ydPsA57sG9dW50/edit?usp=sharing" class="myButton" target="_blank">CITI</a>
              <br></br>
              <br></br>
              <a href= "https://docs.google.com/document/d/1IYM6a698A6uW5ozTvw4b05u5VNbHOJbElnpozgMaczo/edit?usp=sharing" class="myButton" target="_blank">L3HARRIS</a>              
            </CardContent>
          </Card>

        </main>
      )
    }
}

export default withStyles(styles)(event);



