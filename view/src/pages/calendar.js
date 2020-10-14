// calendar.js

// calendar page

import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import NavBar from '../components/navbar'

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
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%239E69AF&amp;ctz=America%2FChicago&amp;src=c3dldXRkQGdtYWlsLmNvbQ&amp;color=%238E24AA&amp;showTabs=0&amp;showPrint=0&amp;showTz=1&amp;showTitle=0&amp;showNav=1&amp;title" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </Container>
	
			</div>
		);
	}
}
export default withStyles(styles)(calendar);
