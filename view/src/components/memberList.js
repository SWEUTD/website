// component for displaying all members and their points

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
import axios from "axios";
import { authMiddleWare } from "../util/auth";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  details: {
    display: "flex",
  },
  locationText: {
    paddingLeft: "15px",
  },
  gridItem: {
    display: "flex",
    width: "100%",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  progess: {
    position: "absolute",
  },
  uploadButton: {
    marginLeft: "8px",
    margin: theme.spacing(1),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  submitButton: {
    marginTop: "10px",
  },
});

class memberList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNames: [],
      lastNames: [],
      points: [],
      previousPoints: [],
    };
  }
  
  // gets info on all the members
  componentWillMount = () => {
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get("https://us-central1-swe-utd-portal.cloudfunctions.net/api/member") // change this link
      .then((response) => {
        console.log(response.data);
        this.setState({
          firstNames: response.data.firstName,
          lastNames: response.data.lastName,
          points: response.data.points,
          previousPoints: response.data.previousPoints || {},
        });
      })
  }
} 

export default withStyles(styles)(memberList);
