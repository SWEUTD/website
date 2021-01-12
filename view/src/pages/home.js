// home.js

// Homepage

import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Slideshow from '../components/slideshow.js'
import NavBar from '../components/navbar'

const styles = (theme) => ({

});

class home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBar />
				<Slideshow/>
			</div>
		);
	}
}

export default withStyles(styles)(home);
