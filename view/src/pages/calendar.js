// calendar.js

// calendar page

import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import NavBar from '../components/navbar'
import Calendar from 'react_google_calendar'

// list of imported Google Calendars
const calendar_configuration = {
    api_key: process.env.REACT_APP_CALENDAR_KEY,  // must be setup in terminal
    calendars: [
      {
        name: 'Community Outreach Events',
        url: '69gnk398bfu24fassk546qgmc8@group.calendar.google.com',
        color: 'red'
      },
      {
        name: 'Corporate Events',
        url: '85556o7d5bvkvilesn659mekkc@group.calendar.google.com',
        color: 'red'
      },
      {
        name: 'Events',
        url: 'qo4rmsgksc6pe3bfa9sso4f42s@group.calendar.google.com',
        color: 'red'
      },
      {
        name: 'WE Hack',
        url: 'sja9rbblc0h3toc3ldbdnuqbn8@group.calendar.google.com'
      },
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

const styles = (theme) => ({

});

class calendar extends Component {
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
        <Container width="80%" className="movingItem">
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