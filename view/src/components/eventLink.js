import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";

import {
  Button,
  CardActions,
  FormControl,
  MenuItem,
  FormControlLabel,
  Switch,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import axios from "axios";
import { authMiddleWare } from "../util/auth";

class EventLinkCreater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            eventPath: "/",
            eventHeading: "",
            eventPoints: 0,
            eventDate: "",
            eventSecretWord: ""
        }
    }

    // function for handling when a field is modified
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked,
    });
  };

    render() {
        return (
        <>
            <h1>Event link creater</h1>
            <form autoComplete="off" noValidate>
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Event Name"
                      margin="dense"
                      name="eventName"
                      variant="outlined"
                      value={this.state.eventName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField
                      fullWidth
                      label="Event Path"
                      margin="dense"
                      name="eventPath"
                      variant="outlined"
                      value={this.state.eventPath}
                      onChange={this.handleChange}
                     />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Event Heading"
                      margin="dense"
                      name="eventHeading"
                      variant="outlined"
                      value={this.state.eventHeading}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Event Points"
                      margin="dense"
                      name="eventPoints"
                      type="number"
                      variant="outlined"
                      value={this.state.eventPoints}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Event Date"
                      margin="dense"
                      name="eventDate"
                      variant="outlined"
                      value={this.state.eventDate}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Event Secret Word"
                      margin="dense"
                      name="eventSecretWord"
                      variant="outlined"
                      value={this.state.eventSecretWord}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Button
                    type="signup"
                    fullWidth
                    variant="contained"
                    color="primary"
                    //className={classes.signup}
                    //onClick={this.handleSignup}
                    /*disabled={
                      signupLoading ||
                      !this.state.email ||
                      !this.state.password ||
                      !this.state.confirmPassword || //?
                      !this.state.firstName ||
                      !this.state.lastName ||
                      !this.state.classification ||
                      !this.state.major ||
                      !this.state.netid ||
                      !this.state.phoneNumber
                    }*/
                  >
                    Create event link
                    {/*signupLoading && (
                      <CircularProgress size={30} className={classes.progess} />
                    )*/}
                  </Button>
                </Grid>
              </CardContent>
              <CardActions />
            </form>
        </>
        );
    }

}

export default EventLinkCreater;