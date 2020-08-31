// events.js

// page displaying event flyers

import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, Divider, Grid, List, ListItem, ListSubheader } from '@material-ui/core'
import kickoff from '../assets/EventFlyers/kickoff.png'

import NavBar from '../components/navbar'

const upcomingEvents = [
	{
		name: 'Success in a Virtual Environment - AT&T',
		date: '9/1/2020 12:00 PM', 
	},
	{
		name: 'Bob Ross Painting Social',
		date: '9/4/2020 5:30 PM - 7:30 PM', 
	},
	{
		name: 'Bob Ross Painting Social',
		date: '9/4/2020 5:30 PM - 7:30 PM', 
	},
	{
		name: 'Professional Development Series',
		date: '9/7/2020 - 9/10/2020', 
	},
	{
		name: 'Private Networking Sessions',
		date: '9/15/2020 - 9/18/2020', 
	},
	{
		name: 'Career Fair Follow-Up',
		date: '9/14/2020 2:00 PM', 
	},
	{
		name: 'UTD Gender Center, Dallas SWE Feminism Talk',
		date: '9/17/2020 6:30 PM', 
	},
	{
		name: 'UTD Gender Center, Dallas SWE Feminism Talk',
		date: '9/17/2020 6:30 PM', 
	}
];

const styles = (theme) => ({
	gridItem: {
		display: 'flex'
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: '100%'
	}
});

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
				<div className={classNames('header', { 'ready': headerReady })}>
		            <p className="heading">Events</p>
                </div>
				<div className="fullscreen">
					<Grid container
						spacing={2}
						height="100%"
						width="100%"
						alignItems="stretch"
						justify="space-evenly"
						className={classes.gridItem}
						style={{padding:'40px'}}
					>
						<Grid item md={4} xs={12} className={classes.gridItem}>
							<div>
								<h1>Next SWE Event:</h1>
								<br/>
								<a href="https://teams.microsoft.com/l/meetup-join/19%3a46bb0aaae7f94d35a5bdce5975dc5327%40thread.v2/0">
									<img className="movingItem"  src={kickoff} verticalAlign="center" width = "100%"/>
								</a>
							</div>
						</Grid>

						<Grid item className={classes.gridItem}>
							<div>
								<h1>Upcoming Events</h1>
								{upcomingEvents.map((event) => (
								<List>
									<ListItem>{event.name}</ListItem>
									<ListSubheader>{event.date}</ListSubheader>
								</List>
								))}
							</div>
						</Grid>
					</Grid>
				</div>

			</div>
		);
	}
}

export default withStyles(styles)(events);
