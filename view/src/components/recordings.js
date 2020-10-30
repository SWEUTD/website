// recordings.js

// component containing SWE event recordings

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { CircularProgress, Grid } from "@material-ui/core";

import axios from "axios";
import { authMiddleWare } from "../util/auth";

const videos = [
	{
		link: 'https://youtube.com/embed/UY3S_uQLyik',
		title: 'Beginner Game Development with Construct 3 by SWE - 10/27/2020', 
	},
	{
		link: 'https://www.youtube.com/embed/duLCzciTHro',
		title: 'Technical Interviews 101 - 10/26/2020', 
	},
	{
		link: 'https://www.youtube.com/embed/eDUQArp7SK8',
		title: 'Git It Together Workshop - 10/5/2020', 
	},
	{
		link: 'https://youtube.com/embed/mDiIx_zEtSk',
		title: 'Steps After the Career Fair - 9/14/2020', 
	},
	{
		link: 'https://youtube.com/embed/gfsL_gt_4uA',
		title: 'Personal Website Workshop - 9/10/2020', 
	},
	{
		link: 'https://youtube.com/embed/IlkwJMCpS8w',
		title: 'Debunking Recruiting Myths - 9/9/2020', 
	},
	{
		link: 'https://youtube.com/embed/YXqaIhw1aTo',
		title: 'LinkedIn 101 - 9/8/2020'
	},
	{
		link: 'https://youtube.com/embed/MvPGDGnla04',
		title: 'Pitch Yourself 101 - 9/7/2020'
	},
	{
		link: 'https://youtube.com/embed/mJAWac2KPFE',
		title: 'AT&T Success in a Virtual Environment - 9/1/2020'
	},
	{
		link: 'https://www.youtube.com/embed/7bCIpC4gprM',
		title: 'SWE Kickoff - 8/31/2020'
	},
	{
		link: 'https://docs.google.com/presentation/d/e/2PACX-1vSYy2zWDUDc4FiB89J-gLFDbnyJwPD-b-2i3peHB2bQPPHsA97xK9ZfOs0sSbNhizqYW4RCNGtUbJPC/embed?start=true&loop=true&delayms=9000',
		title: 'SWE Kickoff Slides - 8/31/2020'
	}
];

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  root: {},
  details: {
    display: "flex",
  },
  locationText: {
    paddingLeft: "15px",
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

class recordings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uiLoading: true,
    };
  }

  // makes sure user is logged in
  componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get("https://us-central1-swe-utd-portal.cloudfunctions.net/api/member")
      .then((response) => {
        console.log(response.data);
        this.setState({
          uiLoading: false,
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };

  render() {
    const { classes } = this.props;
    if (this.state.uiLoading === true) {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </main>
      );
    } else {
      return (
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <div style={{ padding: 20 }}>
            <Grid
              container
              spacing={5}
              height="100%"
              width="100%"
              alignItems="stretch"
              justify="space-evenly"
            >
              {videos.map((video) => (
                <Grid className={classes.gridItem} item sm="12" md="4">
                  <iframe
                    src={video.link}
                    style={{ border: "none" }}
                    frameborder="0"
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                  ></iframe>
                  <h6>{video.title}</h6>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      );
    }
  }
}

export default withStyles(styles)(recordings);
