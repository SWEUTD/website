// recordings.js

// component containing SWE event recordings

import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Card, CardActions, CardContent, CircularProgress, Divider, FormControl, Grid, MenuItem, InputLabel, Select, TextField } from '@material-ui/core';

import axios from 'axios';
import { authMiddleWare } from '../util/auth';

const styles = (theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	toolbar: theme.mixins.toolbar,
	root: {},
	details: {
		display: 'flex'
	},
	locationText: {
		paddingLeft: '15px'
	},
	buttonProperty: {
		position: 'absolute',
		top: '50%'
	},
	uiProgess: {
		position: 'fixed',
		zIndex: '1000',
		height: '31px',
		width: '31px',
		left: '50%',
		top: '35%'
	},
	progess: {
		position: 'absolute'
	},
	uploadButton: {
		marginLeft: '8px',
		margin: theme.spacing(1)
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	submitButton: {
		marginTop: '10px'
	}
});

class recordings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uiLoading: true
		};
	}

	// makes sure user is logged in
	componentWillMount = () => {
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('https://us-central1-swe-utd-portal.cloudfunctions.net/api/member')
			.then((response) => {
				console.log(response.data);
				this.setState({
					uiLoading: false
				});
			})
			.catch((error) => {
				if (error.response.status === 403) {
					this.props.history.push('/login');
				}
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
	};

	render() {
		const { classes } = this.props;
		if (this.state.uiLoading === true) {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</main>
			);
		} else {
			return (
				<div className={classes.content}>
					<div className={classes.toolbar} />
					<h1 class="movingItem">
						Check Back Soon!
					</h1>
				</div>
			);
		}
	}
}

export default withStyles(styles)(recordings);