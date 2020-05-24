import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'

import NavBar from '../components/navbar'

const styles = (theme) => ({
	
});

class about extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBar />
				<Container className={classes.container}>
					<h1>About</h1>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(about);