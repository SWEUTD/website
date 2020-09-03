// events.js

// page displaying event flyers

import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Divider, Grid, List, ListItem, ListSubheader } from '@material-ui/core'
import flyer from '../assets/EventFlyers/flyer.png'
import NavBar from '../components/navbar'

const upcomingEvents = [
	{
		name: 'Bob Ross Painting Social',
		date: '9/4/2020 5:30 PM - 7:30 PM',
		link: 'https://teams.microsoft.com/l/meetup-join/19%3a687fa9fbc9504449acf4b078af95f856%40thread.tacv2/1598904689303?context=%7b%22Tid%22%3a%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2c%22Oid%22%3a%22aa5e36e9-8e5b-4f97-8e0b-58e79a137a07%22%7d'
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
		link: 'https://teams.microsoft.com/l/meetup-join/19%3aa4a313ea39474a2eaa091d3f16cb192c%40thread.tacv2/1598930291176?context=%7b%22Tid%22%3a%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2c%22Oid%22%3a%22aa5e36e9-8e5b-4f97-8e0b-58e79a137a07%22%7d'
	},
	{
		name: 'UTD Gender Center, Dallas SWE Feminism Talk',
		date: '9/17/2020 6:30 PM',
		link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NGQ4ZDkxNmItMzhiYS00OTI1LTg2Y2ItMzg5YWNjMGI1ZDg0%40thread.v2/0?context=%7b%22Tid%22%3a%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2c%22Oid%22%3a%22587a8462-52c5-40cf-8825-6128295cbe3c%22%7d'
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
						{/* <Grid item md={4} xs={12} className={classes.gridItem}>
							<div>
								<br/>
								<a href="https://teams.microsoft.com/l/meetup-join/19%3ad48be07d98004295a4b8456acd03e507%40thread.tacv2/1598935212577?context=%7b%22Tid%22%3a%228d281d1d-9c4d-4bf7-b16e-032d15de9f6c%22%2c%22Oid%22%3a%22aa5e36e9-8e5b-4f97-8e0b-58e79a137a07%22%7d">
									<img className="movingItem"  src={flyer} verticalAlign="center" width = "100%"/>
								</a>
							</div>
						</Grid> */}

						<Grid item className={classes.gridItem}>
							<div align="center">
								<h1>Upcoming Events</h1>
								<br/>
								{upcomingEvents.map((event) => (
								<List alignItems="center">
									<h4>{event.name}</h4>
									<ListSubheader>{event.date}</ListSubheader>
									<Button href={event.link} align="center" variant="contained" color="primary">Join Meeting</Button>
									<br/>
									<br/>
									<Divider/>
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
