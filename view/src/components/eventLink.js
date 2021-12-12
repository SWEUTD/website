import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem
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
import { auth } from '../components/firebase';

import { BrowserRouter, Route } from "react-router-dom";
import meetingform from "../pages/meetingform";

class EventLinkCreater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            eventPath: "/",
            //eventHeading: "",
            eventPoints: 0,
            eventDate: "",
            //eventSecretWord: "",
            eventArray: []
        }
    }
  
    /*PropsRoute = ({ component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(routeProps) => {
            return renderMergedProps(component, routeProps, rest);
          }}
        />
      );
    };*/

    // function for handling when a field is modified
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onClick = (event) => {
    // <PropsRoute exact path="/path" eventHeading="Sign in to the ____ event" eventPoints={1} eventName = "Event Name" eventDate = "1/1/2020" secretWord = "secret" component={meetingform}/>
    // make a router component somehow and pass all the details

    //let newEvent = {};
    //newEvent.push(this.state.eventName, this.state.eventPath, this.state.eventPoints, this.state.eventDate, this.state.eventSecretWord);

    let newEvent = { eventName: this.state.eventName, eventPath: this.state.eventPath, /*eventHeading: this.state.eventHeading,*/ eventPoints: this.state.eventPoints, eventDate: this.state.eventDate/*, eventSecretWord: this.state.eventSecretWord*/}
    this.state.eventArray.push(newEvent);

    console.log("hello");
    console.log(this.state.eventArray);

    axios
      .post(
        'http://localhost:5000/swe-utd-portal/us-central1/api/updateEventList',
        newEvent
      )
      .then((response) => {
        localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
        /*this.setState({
          loginLoading: false,
        });*/
        this.props.history.push('/portal');
      })
      .catch((error) => {
        this.setState({
          errors: error.response,
          // loginLoading: false,
        });
      });
    
    this.setState({
      eventName: "",
            eventPath: "/",
            //eventHeading: "",
            eventPoints: 0,
            eventDate: "",
            //eventSecretWord: ""
    });
  };

    render() {
        return (
        <>
            <h1>Event Link Creator</h1>
            <h6>Enter the name of the event, event url (after https://swe.utd.com/), the date of the event, and event points and then click the button  
            to create an event link. All input should be valid as no error handling is done (yet). For each event generated, SWE point=1, the heading of the 
            sign in page will be generated from the event name, and there will not be any secret word needed to sign into events. Instead, the url 
            of the event will act as a secret word, and more complex urls will be used for the sign in forms.</h6>
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
                      type="date"
                      margin="dense"
                      name="eventDate"
                      variant="outlined"
                      value={this.state.eventDate}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.onClick}
                  >
                    Create event link
                  </Button>
                </Grid>
              </CardContent>
              <CardActions />
            </form>

            {this.state.eventArray == null ? (null) : 
            (
              <List>
              {this.state.eventArray.map((event) => (
                <ListItem>
                <Card className="movingItem" variant="outlined">
                  <CardContent>
                    <h3>
                      Event name : {event.eventName}
                    </h3>
                    <p>Url: https://sweutd.com{event.eventPath}</p>
                    <p>Date: {event.eventDate}</p>
                    <p>Points: {event.eventPoints}</p>
                  </CardContent>
                </Card>
              </ListItem>
              )
            )}
            </List>)}
        </>
        );
    }

}

export default EventLinkCreater;