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
];

const flyers = [
	
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
								<h1>Stay tuned for Upcoming Events for Spring 2021!</h1>
							</div>
					</Grid>
					{/*
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
	}*/}
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
