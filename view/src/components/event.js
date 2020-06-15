import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardActions, CardContent, Container, Divider, Button, Box, Grid, TextField } from '@material-ui/core';
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
	gridItem: {
		display: 'flex',
		width: '100%'
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: '100%'
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
			.get('https://us-central1-swe-utd-portal.cloudfunctions.net/api/member')
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
						this.props.history.push('/website/login');
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
			.post('https://us-central1-swe-utd-portal.cloudfunctions.net/api/member', formRequest)
			.then(() => {
				this.setState({ buttonLoading: false });
			})
			.catch((error) => {
				if (error.response.status === 403) {
					this.props.history.push('/website/login');
				}
				console.log(error);
				this.setState({
					buttonLoading: false
				});
			});
	};

	render() {
		const { classes } = this.props;
		const history = this.state.events.map((item, key) =>
			<div fullWidth>
				<br/>
				<table width="100%">
					<tr>
						<td align="left">{item.eventName}</td>
						<td align="left">{item.eventDate}</td>
						<td align="right">{item.eventPoints} pt</td>
					</tr>
				</table>
			<br />
			</div>
		);

		let rewardStatus;
		let nextLevel;
		if(this.state.points < 3) {
			nextLevel = 3 - this.state.points
			rewardStatus = 
				<div>
					<h4 align="center">You are {nextLevel} points away from becoming a SWE Star!</h4>
					<Divider />
					<br />
					<h5>Reach the bronze tier and unlock:</h5>
					<p>★ SWE gift bag</p>
				</div>
		}
		else if (this.state.points < 5) {
			nextLevel = 5 - this.state.points
			rewardStatus =
				<div>
					<h1 align="center">You are a Bronze SWE Star!</h1>
					<Divider/>
					<br />
					<h4 align="center">You are {nextLevel} points away from the silver tier</h4>
					<br />
					<Divider />
					<br/>
					<h5>Reach the silver tier and unlock:</h5>
					<p>★ Exclusive invite to our end-of-summer celebration</p>
					<Divider/>
					<br />
					<h5>You have unlocked:</h5>
					<p>★ SWE gift bag</p>
				</div>
		}
		else if (this.state.points < 7) {
			nextLevel = 7 - this.state.points
			rewardStatus =
				<div>
					<h1 align="center">You are a Silver SWE Star!</h1>
					<Divider/>
					<br />
					<h4 align="center">You are {nextLevel} points away from the gold tier</h4>
					<br />
					<Divider />
					<br/>
					<h5>Reach the gold tier and unlock:</h5>
					<p>★ Social Media Shoutout</p>
					<Divider/>
					<br />
					<h5>You have unlocked:</h5>
					<p>★ Exclusive invite to our end-of-summer celebration</p>
					<p>★ SWE gift bag</p>
				</div>
		}
		else {
			rewardStatus =
				<div>
					<h1 align="center">You are a Gold SWE Star!</h1>
					<Divider/>
					<br />
					<h4 align="center">You have reached the SWE gold tier! Congratulations!</h4>
					<br/>
					<Divider/>
					<br />
					<h5>You have unlocked:</h5>
					<p>★ Social Media Shoutout</p>
					<p>★ Exclusive invite to our end-of-summer celebration</p>
					<p>★ SWE gift bag</p>
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
				<div>
				<div className={classes.toolbar} />
				<br/>
				<Grid container
					spacing={2}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
					style={{height: '100vh'}}
				>
					<Grid className={classes.gridItem} style={{height: '90vh', flexDirection: 'column'}} item md={6} xs={12}>
						<Card style={{height: '20vh'}} className="movingItem" variant="outlined" fullWidth>
							<CardContent align="center" style={{padding:'10px'}}>
								<br/>
								<h1>
									{this.state.points} SWE points
								</h1>
							</CardContent>
						</Card>
						<br/>
						<Card style={{height: '70vh'}} alignItems="stretch"  className="movingItem" variant="outlined" style={{padding:'10px'}}>
							<CardContent height="100%" align="left" fullWidth>
								{rewardStatus}
							</CardContent>
						</Card>
					</Grid>
					<Grid style={{height: '90vh'}} className={classes.gridItem} item md={6} xs={12}>
						<Card height="100%" className="movingItem" variant="outlined" style={{padding:'10px'}}>
							<CardContent height="100%" align="center">				
							<h1 align="center">
								Your Attendance History
							</h1>
									{history}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				</div>
			);
		}
	}
}

export default withStyles(styles)(event);