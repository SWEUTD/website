// events.js

// page displaying event flyers

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Divider, Grid, List, ListSubheader } from "@material-ui/core";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import NavBar from "../components/navbar";
import Footer from '../components/footer'

import IBM_TST from "../assets/EventFlyers/IBM_TST.png";

const upcomingEvents = [
	{
		name: 'IBM TST - A Day in the Life',
		date: '11/16/2020 - 4:30 PM',
		description: "SWE and IBM's Technical Sales Track will be featuring 4 experienced professionals who will be talking about their career paths and roles at IBM to give some insight on the job scope of various roles. Panelists include Cloud Architect (Data and AI), Software Engineer (Cloud and Cognitive Software), Client Technical Manager (System z), Project Manager (Services). All from STEM backgrounds, they will be describing their roles and answering questions so that you can learn about possible future opportunities. Register here: https://www.eventbrite.com/e/swe-utd-ibm-technical-sales-track-tickets-126137607981.",
		link: ''
	},
	{
		name: 'Friendsgiving Social',
		date: '11/19/2020 - 4:00 PM',
		description: "Come join us to celebrate the end of the semester and Thanksgiving! Don't miss a chance to meet fellow engineers/computer scientists from our co-hosts SHPE and other tech orgs.",
		link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D2d083053fc%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C77361f5a3adf4e06325c08d8851c4af9%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637405703858160604%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=jHu%2FiW1JZiMFWmHx186NbWoIX52S78pYzZLx%2B1iw3pg%3D&reserved=0'
	},
	{
		name: 'Folsom HS Panel',
		date: '11/20/2020',
		description: "Join us for a discussion with Folsom HS SWE section in California to discuss ways to persevere and succeed in a male-dominated career and what these high school students could expect in college as an engineering and computer science major.",
		link: ''
	}
];

const flyers = [
	{
		image: IBM_TST,
		link: ''
	},
	{
		image: '',
		link: ''
	},
	{
		image: '',
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
  }
});

function createData(event, flyer) {
	return { event, flyer };
  }

const rows = [
	createData(upcomingEvents[0], flyers[0].image),
	createData(upcomingEvents[1], flyers[1].image),
	createData(upcomingEvents[2], flyers[2].image),
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

						<Grid item md={3} xs={12} className={classes.gridItem}>

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
            <Grid item md={3} xs={12} className={classes.gridItem}>
              <div align="center">
                <h1>Upcoming Events</h1>
                <br />
                {upcomingEvents.map((event) => (
                  <List alignItems="center">
                    <h4>{event.name}</h4>
                    <ListSubheader>{event.date}</ListSubheader>
                    <h5>{event.description}</h5>
                    <br />
                    {event.link != "" && event.link != null ? (
                      <div>
                        <Button
                          href={event.link}
                          align="center"
                          variant="contained"
                          color="primary"
                        >
                          Join Meeting
                        </Button>
                        <br />
                        <br />
                      </div>
                    ) : null}
                    <Divider />
                  </List>
                ))}
              </div>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(events);
