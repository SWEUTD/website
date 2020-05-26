import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import NavBar from '../components/navbar'

const styles = (theme) => ({
	
});

class events extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBar />
				<CssBaseline />
				<Container className={classes.container}>
					<h1>events</h1>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(events);