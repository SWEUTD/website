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

const styles = (theme) => ({
	
});

class contact extends Component {
	// needed for header animation
    constructor(props) {
        super(props);
		this.state = { headerReady: false };
		this.state = {
			errors: [],
			contactLoading: false
		};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({ headerReady: true });
        }, 0);
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
    render() {
		const { headerReady } = this.state;
		const { errors, contactLoading } = this.state;
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBar />
				<div className={classNames('header', { 'ready': headerReady })}>
		            <p className="heading">Contact Us</p>
                </div>
				<Container width="50%">
					<div>			
						<Grid container
							spacing={10}
							height="100%"
							width="80%"
							alignItems="stretch"
							justify="space-evenly"
						>
							<Grid item sm={6} xs={12}>
								<form className={classes.form} noValidate>		
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="name"
										label="Name"
										name="name"
										autoComplete="name"
										autoFocus
										helperText={errors.name}
										error={errors.name ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="email"
										label="Email"
										type="email"
										id="email"
										autoComplete="email"
										helperText={errors.email}
										error={errors.email ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="subject"
										label="Subject"
										type="subject"
										id="subject"
										autoComplete="subject"
										helperText={errors.subject}
										error={errors.subject ? true : false}
										onChange={this.handleChange}
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										multiline
										rows={6}
										name="message"
										label="Message"
										type="message"
										id="message"
										autoComplete="message"
										helperText={errors.message}
										error={errors.message ? true : false}
										onChange={this.handleChange}
									/>
									<br/>
									<br/>
									<Button
										type="contact"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.contact}
										onClick={this.handleContact}
										disabled={contactLoading || !this.state.email || !this.state.name || !this.state.subject || !this.state.message}
									>
										Send
										{contactLoading && <CircularProgress size={30} className={classes.progess} />}
									</Button>
									{errors.general && (
										<Typography variant="body2" className={classes.customError}>
											{errors.general}
										</Typography>
									)}
								</form>	
							</Grid>
						</Grid>
					</div>

				</Container>
			</div>
		);
	}
}
export default withStyles(styles)(contact);