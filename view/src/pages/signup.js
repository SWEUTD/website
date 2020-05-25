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

import NavBar from '../components/navbar'

import axios from 'axios';
import { FormControl, InputLabel, Menu } from '@material-ui/core';

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	progess: {
		position: 'absolute'
	}
});

class signup extends Component {
	constructor(props) {
		super(props);

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
			loading: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
			});
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		if(this.state.major != "Other")
			this.state.otherMajor = "";
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
			.post('/signup', newMemberData)
			.then((response) => {
				localStorage.setItem('AuthToken', `${response.data.token}`);
				this.setState({ 
					loading: false,
				});	
				this.props.history.push('/portal');
			})
			.catch((error) => {
				this.setState({
					errors: error.response.data,
					loading: false
				});
			});
	};

	

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Container component="main" maxWidth="xs">
				<NavBar />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
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
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={this.handleSubmit}
                            disabled={loading || 
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
							{loading && <CircularProgress size={30} className={classes.progess} />}
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link href="login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(signup);