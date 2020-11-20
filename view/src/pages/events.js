// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import NavBar from "../components/navbar";

import Folsom_HS_Panel from "../assets/EventFlyers/Folsom_HS_Panel.png";
import SWE_Match_Presentation from "../assets/EventFlyers/SWE_Match_Presentation.png"

const upcomingEvents = [
	{
		name: 'SWE Match Presentation Night',
		date: '11/20/2020 - 7:00 PM',
		description: "Hey y'all! SWE Match is a virtual engineering competition run by SWE UTD! We have our Fall Presentation Night coming up on Friday, November 20th at 7 PM on Teams! The competitors have been working super hard this semester on their impactful projects, so this is a night you will not want to miss!",
		link: 'https://teams.microsoft.com/l/meetup-join/19%3a5b52916c6b544a9eba19736b1b82f4cc%40thread.tacv2/1605305403583?context=%7b%22Tid%22%3a%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2c%22Oid%22%3a%22c8b45e33-89cb-466e-91f4-ac79324cea15%22%7d'
	},
	{
		name: 'Folsom HS Panel',
		date: '11/20/2020 - 1:30 PM',
		description: "Join us for a discussion with Folsom HS SWE section in California to discuss ways to persevere and succeed in a male-dominated career and what these high school students could expect in college as an engineering and computer science major.",
		link: ''
	}
];

const flyers = [
	{
		image: SWE_Match_Presentation,
		link: ''
	},
	{
		image: Folsom_HS_Panel,
		link: ''
	}
	
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
  }
});

function createData(event, flyer) {
	return { event, flyer };
  }

const rows = [
	createData(upcomingEvents[0], flyers[0].image),
	createData(upcomingEvents[1], flyers[1].image),
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
				<h4>{row.event.name}</h4>
				<ListSubheader>{row.event.date}</ListSubheader>
				{row.event.description != '' ?
				(<div><h5 align="left">{row.event.description}</h5><br /> </div>) : null }
				{row.event.link != '' && row.event.link != null
				? (<div>
				<Button href={row.event.link} align="center" variant="contained" color="primary" position="relative" zIndex="-3000">Join Meeting</Button>
				<br/>
				<br/>
				</div>)
				: null
				}
			  </TableCell>
			  <TableCell component="th" scope="row" align="center">
			  {row.flyer != '' ?
				(<img src={row.flyer} width="55%" />) : null }
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
