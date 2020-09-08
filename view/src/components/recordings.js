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
					<Grid container
					spacing={5}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
					>
						<Grid className={classes.gridItem} item sm="12" md="6">
							<iframe src="https://web.microsoftstream.com/embed/video/ded9e85d-93ed-4775-b782-52a1f31eb1bb?autoplay=false&amp;showinfo=true" style={{border:"none"}}></iframe>
							<h6>AT&amp;T Success in a Virtual Environment - 9/1/2020</h6>
						</Grid>
						<Grid className={classes.gridItem} item sm="12" md="6">
							<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSYy2zWDUDc4FiB89J-gLFDbnyJwPD-b-2i3peHB2bQPPHsA97xK9ZfOs0sSbNhizqYW4RCNGtUbJPC/embed?start=true&loop=true&delayms=9000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
							<h6>SWE Kickoff Slides - 8/31/2020</h6>
						</Grid>
						<Grid className={classes.gridItem} item sm="12" md="6">
							<iframe src="https://web.microsoftstream.com/embed/video/eab0eb2b-638b-4975-a055-0262bbb7d8ed?autoplay=false&amp;showinfo=true" style={{border:"none"}}></iframe>
							<h6>SWE Kickoff Slides - 8/31/2020</h6>
						</Grid>
					</Grid>
				</div>
			);
		}
	}
}

export default withStyles(styles)(recordings);
