import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import NavBar from '../components/navbar'

import Calendar from 'react_google_calendar'
 
const calendar_configuration = {
    api_key: 'AIzaSyBiOhSoxcQNDHgeta3pxPz-KBGSLbvhxEM',
    calendars: [
      {
        name: 'Community Outreach Events', // whatever you want to name it
        url: '69gnk398bfu24fassk546qgmc8@group.calendar.google.com' // your calendar URL
      },
      {
        name: 'Corporate Events', // whatever you want to name it
        url: '85556o7d5bvkvilesn659mekkc@group.calendar.google.com' // your calendar URL
      },
      {
        name: 'Events', // whatever you want to name it
        url: 'qo4rmsgksc6pe3bfa9sso4f42s@group.calendar.google.com' // your calendar URL
      },
      {
        name: 'WE Hack', // whatever you want to name it
        url: 'sja9rbblc0h3toc3ldbdnuqbn8@group.calendar.google.com' // your calendar URL
      },
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

const styles = (theme) => ({
	
});

class calendar extends Component {
	// needed for header animation
    constructor(props) {
        super(props);
        this.state = { headerReady: false, events: [] };
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
                    <p className="heading">Calendar</p>
                </div>
                <Container width="80%">
                    <Calendar
                    events={this.state.events}
                    config={calendar_configuration}
                    popup='true'
                     />
                     <br/>
                </Container>
			</div>
		);
	}
}
export default withStyles(styles)(calendar);