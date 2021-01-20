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

import Folsom_HS_Panel from "../assets/EventFlyers/Folsom_HS_Panel.png";
<<<<<<< HEAD
import SWE_Match_Presentation from "../assets/EventFlyers/SWE_Match_Presentation.png";

const upcomingEvents = [];

const flyers = [];
=======
import SWE_Match_Presentation from "../assets/EventFlyers/SWE_Match_Presentation.png"
import Kickoff_Flyer from "../assets/EventFlyers/Kickoff_Flyer.png";

const upcomingEvents = [
  {
    name: 'SWE Spring Kickoff',
    date: '1/25/2020 - 7:00 PM',
    description: "We hope y'all are as excited as we are for our spring semester kickoff on Monday January 25th at 7pm CST.  Come see what we have planned this semester and how you can get involved! Don't forget to make a member account on sweutd.com/portal. We hope to see you all there!",
    link: ''
  }
];

const flyers = [
	{
    image: Kickoff_Flyer,
    link: ''
  }
];
>>>>>>> events

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

<<<<<<< HEAD
const rows = [];
=======
const rows = [
  createData(upcomingEvents[0], flyers[0].image)
  ];
>>>>>>> events

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
<<<<<<< HEAD
							*/}
            <div align="center">
              <h1>Stay tuned for Upcoming Events for Spring 2021!</h1>
            </div>
          </Grid>
          {/*
=======
              */}
					</Grid>
					{
>>>>>>> events
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
				(<img src={row.flyer} width="60%" />) : null }
        </TableCell>
        </TableRow>
          ))}
        </TableBody>
      </Table>
<<<<<<< HEAD
			</TableContainer> */}
        </div>
      </div>
    );
  }
=======
			</TableContainer> }
				</div>
			</div>
		);
	}
>>>>>>> events
}

export default withStyles(styles)(events);
