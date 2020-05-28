import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardActions, CardContent, Divider, Button, Box, Grid, TextField } from '@material-ui/core';

import clsx from 'clsx';

import axios from 'axios';
import { authMiddleWare } from '../util/auth';

const styles = (theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	toolbar: theme.mixins.toolbar,
	details: {
		display: 'flex'
	},
	locationText: {
		paddingLeft: '15px'
	},
	card: {
		backgroundColor: '#A9A8A9'
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

class event extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			netid: '',
			classification: '',
			major: '',
			otherMajor: '',
			events: [],
			points: 0,
			uiLoading: true,
			buttonLoading: false,
			imageError: ''
		};
	}

	componentWillMount = () => {
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/member')
			.then((response) => {
				console.log(response.data);
				this.setState({
					firstName: response.data.memberInfo.firstName,
					lastName: response.data.memberInfo.lastName,
					email: response.data.memberInfo.email,
					phoneNumber: response.data.memberInfo.phoneNumber,
					classification: response.data.memberInfo.classification,
					major: response.data.memberInfo.major,
					otherMajor: response.data.memberInfo.otherMajor,
					netid: response.data.memberInfo.netid,
					events: response.data.memberInfo.events,
					points: response.data.memberInfo.points,
					uiLoading: false
				});
			})
			.catch((error) => {
				if(error.response != undefined)
				{
					if (error.response.status === 403) {
						this.props.history.push('/login');
					}
				}
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleImageChange = (event) => {
		this.setState({
			image: event.target.files[0]
		});
	};

	updateFormValues = (event) => {
		event.preventDefault();
		this.setState({ buttonLoading: true });
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		if(this.state.major != "Other")
			this.state.otherMajor = "";
		const formRequest = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			classification: this.state.classification,
			major: this.state.major,
			otherMajor: this.state.otherMajor,
			phoneNumber: this.state.phoneNumber,
			events: this.state.events,
			points: this.state.points
		};
		
		axios
			.post('/member', formRequest)
			.then(() => {
				this.setState({ buttonLoading: false });
			})
			.catch((error) => {
				if (error.response.status === 403) {
					this.props.history.push('/login');
				}
				console.log(error);
				this.setState({
					buttonLoading: false
				});
			});
	};

	render() {
		const { classes, ...rest } = this.props;

		const header = 
			<div fullWidth>
				<Typography className={classes.locationText} gutterBottom variant="h4" fullWidth>
					Your Attendance History
				</Typography>
			</div>
		
		const history = this.state.events.map((item, key) =>
			<div fullWidth>
			<br />
				<Divider />
			<br />
				<p class="alignleft">{item.eventName}</p>
				<p class="aligncenter">{item.eventDate}</p>
				<p class="alignright">{item.eventPoints} pt</p>
			<br />
			</div>
		);

		
		
		let rewardStatus;
		let nextLevel;
		if(this.state.points < 3) {
			nextLevel = 3 - this.state.points
			rewardStatus = 
				<div>
					<Typography className={classes.locationText} gutterBottom variant="h4" align="center">You are {nextLevel} points away from being a SWE Star!</Typography>
					<Divider />
					<br />
					<p>Reach the bronze tier and unlock:</p>
					<ul>
						<li>SWE Gift Bag</li>
					</ul>
				</div>
		}
		else if (this.state.points < 5) {
			nextLevel = 5 - this.state.points
			rewardStatus =
				<div fullWidth>
					<Typography className={classes.locationText} gutterBottom variant="h4" align="center">You are a SWE Star!</Typography>
					<Divider />
					<br />
					<p>You are {nextLevel} points away from the silver tier</p>
					<p>Reach the silver tier and unlock:</p>
					<ul>
						<li>Exclusive invite to our end-of-summer celebration!</li>
					</ul>
				</div>
		}
		else if (this.state.points < 7) {
			nextLevel = 7 - this.state.points
			rewardStatus =
				<div>
					<Typography className={classes.locationText} gutterBottom variant="h4" align="center">You are a SWE Star!</Typography>
					<br />
					<p>Reach the gold tier and unlock:</p>
					<ul>
						<li>Social Media Shoutout</li>
					</ul>
				</div>
		}

		if (this.state.uiLoading === true) {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</main>
			);
		} else {
			return (
				<main className={classes.content}>
				<div className={classes.toolbar} />

				<Grid container
					spacing={5}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
				>
					<Grid item md={6} xs={12}>
						<Card className={classes.card} variant="outlined" fullWidth>
							<CardContent align="center" fullWidth>
								<Typography className={classes.locationText} gutterBottom variant="h4">
									{this.state.points} SWE points
								</Typography>
							</CardContent>
						</Card>
						<br />
						<Card className={classes.card} variant="outlined" fullWidth>
							<CardContent align="left" fullWidth>
								{rewardStatus}
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={6} xs={12}>
						<Card className={classes.card} variant="outlined" style={{height:"100%"}} fullWidth>
							<CardContent align="center" fullWidth>				
									{header}
									{history}
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				</main>
			);
		}
	}
}

export default withStyles(styles)(event);