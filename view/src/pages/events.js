// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import NavBar from "../components/navbar";
import CapitalOne from "../assets/CapitalOne.jpg"


// import SWE_Match_Presentation from "../assets/EventFlyers/SWE_Match_Presentation.png"

const upcomingEvents = [

  /*{
    name: "SWE x WITB: Behavioral Interview Workshop",
    date: 'Date(s): 11/16. Time: 3:00 PM - 4:00 PM CST',
    location: 'SSA 14.245',
    description: "Need to brush up on your soft skills? We will go over tips and tricks so you can ace your behavioral interview!",
    link: 'https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NzU3NWVmMDctMDE1NC00NTllLTlhYmEtNjM0MDVjNGQ4Mzcw%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%2522%252c%2522Oid%2522%253a%2522b60eb0e6-02c9-4a59-b0d1-644cbed52573%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=3a9a5e1b-ddb0-456d-9e24-ee551106f9ca&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true',
  },
  {
    name: "Technical Interview Prep with Paycom",
    date: 'Date/Time: November 17th, 5:30 - 6:30 PM',
    location: '',
    description: "Panelists: Robert Smith (software developer manager) and Amber McGee (recruiter)",
    link: 'https://tinyurl.com/paycomxswe'
  }*/
 
];

const flyers = [
  
  /*{
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  },*/
  
  
];


const styles = (theme) => ({
  gridItem: {
    display: "flex",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  table: {
    minWidth: "50%",
    maxWidth: "70%",
  },
  imgResponsive: {
    width: "200 px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

function createData(event, flyer) {
  return { event, flyer };
}


const rows = [
  /*createData(upcomingEvents[0], flyers[0].image),
  createData(upcomingEvents[1], flyers[1].image),*/
 
];

class events extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true });
    }, 0);
  }

  render() {
    const { headerReady } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Events</p>
        </div>
        <div className="fullscreen">
          <Grid
            container
            spacing={2}
            height="100%"
            width="100%"
            alignItems="stretch"
            justify="space-evenly"
            className={classes.gridItem}
            style={{ "padding-top": "40px" }}
          >
            {/*
					 <Grid container
						item md={8} xs={12}
							spacing={2}
							height="100%"
							width="100%"
							alignItems="stretch"
							justify="space-evenly"
							className={classes.gridItem}
							style={{padding:'40px'}}
						>
							{flyers.map((flyer) => (
							<Grid item md={4} xs={12} className={classes.gridItem}>
								<div>
									<br/>
									<a href={flyer.link}>
										<img className="movingItem"  src={flyer.image} verticalAlign="center" width = "100%"/>
									</a>
								</div>
							</Grid>
							))}
						</Grid> 
              */}
					<div align="center">
              <h1>Upcoming Events</h1>
              <br/>
              <h3>Happy holidays! Look out for upcoming events here!</h3>
              
            </div>
          </Grid>
					

					<TableContainer component={Paper} align="center">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell align="center" width="45%"><h2></h2></TableCell>
            <TableCell align="center" width="55%"><h2></h2></TableCell>
          </TableRow>
		    </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.event.name}>
      <TableCell component="th" scope="row" align="center">
			  <br/>
				<h4><strong>{row.event.name}</strong></h4>
				<ListSubheader><strong>{row.event.date}</strong></ListSubheader>
        <ListSubheader><strong>{row.event.location}</strong></ListSubheader>
				{row.event.description != '' ?
				(<div><h5 align="left" >{row.event.description}</h5><br /> </div>) : null }
				{row.event.link != '' && row.event.link != null
				? (<div>
				<a href={row.event.link}><strong>Attend Here!</strong></a>
				<br/>
				<br/>
				</div>)
				: null
				}
      


			</TableCell>
			  <TableCell component="th" scope="row" align="center">
			  {row.flyer != '' ?
				(<img src={row.flyer} width="60%" />) : null }
        </TableCell>
        </TableRow>
          ))}
        </TableBody>
      </Table>

			</TableContainer> 
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(events);