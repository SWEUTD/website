import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import { Card, CardActions, CardContent, Divider, Box, } from '@material-ui/core';

import NavBar from '../components/navbar'

import axios from 'axios';
import { FormControl, InputLabel, Menu } from '@material-ui/core';

const styles = (theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	login: {
		margin: theme.spacing(3, 0, 2)
	},
	signup: {
		margin: theme.spacing(3, 0, 2)
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	progess: {
		position: 'absolute'
	}
});

class login extends Component {
	constructor(props) {
		super(props);

		this.state = { headerReady: false };

		this.state = {
			email: '',
			password: '',
			errors: [],
			loginLoading: false
		};

		this.state = {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			classification: '',
			major: '',
			netid: '',
			email: '',
			password: '',
			confirmPassword: '',
			errors: [],
			signupLoading: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI != undefined)
		{
			if(nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
				});
			}
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleLogin = (event) => {
		event.preventDefault();
		this.setState({ loginLoading: true });
		const memberData = {
			email: this.state.email,
			password: this.state.password
		};
		axios
			.post('https://us-central1-swe-utd-portal.cloudfunctions.net/api/login', memberData)
			.then((response) => {
				localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
				this.setState({ 
					loginLoading: false,
				});		
				this.props.history.push('/website/portal');
			})
			.catch((error) => {				
				this.setState({
					errors: error.response.data,
					loginLoading: false
				});
			});
	};

	handleSignup = (event) => {
		event.preventDefault();
		this.setState({ signupLoading: true });
		if(this.state.major != "Other")
			this.state.otherMajor = "";
		this.state.netid = this.state.netid.toLowerCase();
		const newMemberData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phoneNumber: this.state.phoneNumber,
			classification: this.state.classification,
			major: this.state.major,
			otherMajor: this.state.otherMajor,
			netid: this.state.netid,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		};
		axios
			.post('https://us-central1-swe-utd-portal.cloudfunctions.net/api/signup', newMemberData)
			.then((response) => {
				localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
				this.setState({ 
					signupLoading: false,
				});	
				this.props.history.push('/website/portal');
			})
			.catch((error) => {
				this.setState({
					errors: error.response.data,
					signupLoading: false
				});
			});
	};

	// needed for header animation
      componentDidMount() {
        setTimeout(() => {
          this.setState({ headerReady: true });
        }, 0);
    }
    render() {
        const { headerReady } = this.state;
		const { classes } = this.props;
		const { errors, loginLoading, signupLoading } = this.state;
		return (
			<div>
				<NavBar />
				<div className={classNames('header', { 'ready': headerReady })}>
					<p className="heading">Access the Portal to View Your SWE Points</p>
				</div>
				<Container width="75%">
					<Grid container
						spacing={10}
						height="100%"
						width="80%"
						alignItems="stretch"
						justify="space-evenly"
					>
						<Grid item sm={6} xs={12}>
							<div className={classes.paper}>
								<Typography component="h1" variant="h5">
									Login
								</Typography>
								<br/>					
								<form className={classes.form} noValidate>
								<Grid container spacing={2}>						
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										autoFocus
										helperText={errors.email}
										error={errors.email ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										helperText={errors.password}
										error={errors.password ? true : false}
										onChange={this.handleChange}
									/>
									<Button
										type="login"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.login}
										onClick={this.handleLogin}
										disabled={loginLoading || !this.state.email || !this.state.password}
									>
										Sign In
										{loginLoading && <CircularProgress size={30} className={classes.progess} />}
									</Button>
									{errors.general && (
										<Typography variant="body2" className={classes.customError}>
											{errors.general}
										</Typography>
									)}
									</Grid>
								</form>	
							</div>
						</Grid>
						<Grid item sm={6} xs={12}>
							<div className={classes.paper}>
								<Typography component="h1" variant="h5">
									Sign up
								</Typography>
								<br/>
								<form className={classes.form} noValidate>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="firstName"
												label="First Name"
												name="firstName"
												autoComplete="firstName"
												helperText={errors.firstName}
												error={errors.firstName ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="lastName"
												label="Last Name"
												name="lastName"
												autoComplete="lastName"
												helperText={errors.lastName}
												error={errors.lastName ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="phoneNumber"
												label="Phone Number"
												name="phoneNumber"
												autoComplete="phoneNumber"
												helperText={errors.phoneNumber}
												error={errors.phoneNumber ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<FormControl 
												fullWidth 
												variant="outlined"
												required
											>
											<InputLabel>Classification</InputLabel>
												<Select
													id="classification"
													label="Classification"
													name="classification"
													autoComplete="classification"
													helperText={errors.classification}
													error={errors.classification ? true : false}
													onChange={this.handleChange}
													>
														<MenuItem selected value="Freshman">Freshman</MenuItem>
														<MenuItem value="Sophomore">Sophomore</MenuItem>
														<MenuItem value="Junior">Junior</MenuItem>
														<MenuItem value="Senior">Senior</MenuItem>
														<MenuItem value="Graduate Student">Graduate Student</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="netid"
												label="NetID"
												name="netid"
												autoComplete="netid"
												helperText={errors.netid}
												error={errors.netid ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm = {6}>
											<FormControl 
												fullWidth 
												variant="outlined"
												required
											>
											<InputLabel>Major</InputLabel>
												<Select
													id="major"
													label="Major"
													name="major"
													autoComplete="major"
													helperText={errors.major}
													error={errors.major ? true : false}
													onChange={this.handleChange}
													>
														<MenuItem selected value="Biomedical Engineering">Biomedical Engineering</MenuItem>
														<MenuItem value="Computer Engineering">Computer Engineering</MenuItem>
														<MenuItem value="Computer Science">Computer Science</MenuItem>
														<MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
														<MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
														<MenuItem value="Software Engineering">Software Engineering</MenuItem>
														<MenuItem value="Other">Other</MenuItem>
														
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} sm = {6}>
											<TextField
												variant="outlined"
												fullWidth
												id="otherMajor"
												label="Other Major"
												name="otherMajor"
												autoComplete="otherMajor"
												helperText={errors.otherMajor}
												error={errors.otherMajor ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>
										
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="email"
												label="Email Address"
												name="email"
												autoComplete="email"
												helperText={errors.email}
												error={errors.email ? true : false}
												onChange={this.handleChange}
											/>
										</Grid>

										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												name="password"
												label="Password"
												type="password"
												id="password"
												autoComplete="current-password"
												onChange={this.handleChange}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												name="confirmPassword"
												label="Confirm Password"
												type="password"
												id="confirmPassword"
												autoComplete="current-password"
												onChange={this.handleChange}
											/>
										</Grid>
									</Grid>
									<Button
										type="signup"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.signup}
										onClick={this.handleSignup}
										disabled={signupLoading || 
											!this.state.email || 
											!this.state.password ||
											!this.state.confirmPassword || //?
											!this.state.firstName || 
											!this.state.lastName ||
											!this.state.classification || 
											!this.state.major || 
											!this.state.netid || 
											!this.state.phoneNumber}
									>
										Sign Up
										{signupLoading && <CircularProgress size={30} className={classes.progess} />}
									</Button>
								</form>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(login);