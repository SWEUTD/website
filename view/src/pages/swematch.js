import React, { Component } from 'react';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import NavBar from '../components/navbar'

const styles = (theme) => ({
	
});

class swematch extends Component {
	// needed for header animation
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
		            <p className="heading">SWEMatch</p>
                </div>
				<Container className={classes.container}>
					<p align="center" class="movingItem">Come back for more information soon!</p>
				</Container>
			</div>
		);
	}
}
export default withStyles(styles)(swematch);