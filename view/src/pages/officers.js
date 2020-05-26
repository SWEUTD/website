import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Card, CardActions, CardContent, Divider, Button, Box, Grid, TextField, Typography } from '@material-ui/core';
import NavBar from '../components/navbar'

import AfridaTasnim from '../assets/OfficerPhotos/AfridaTasnim.jpg'
import AngelleNazareno from '../assets/OfficerPhotos/AngelleNazareno.jpg'
import AnkitaBantey from '../assets/OfficerPhotos/AnkitaBantey.jpg'
import ArushiAgrawal from '../assets/OfficerPhotos/ArushiAgrawal.jpg'
import CadyBaltz from '../assets/OfficerPhotos/CadyBaltz.jpg'
import CaitlinTibbetts from '../assets/OfficerPhotos/CaitlinTibbetts.jpg'
import DeeshaKumbham from '../assets/OfficerPhotos/DeeshaKumbham.jpg'
import JanroseSamson from '../assets/OfficerPhotos/JanroseSamson.jpg'
import MaahaSakia from '../assets/OfficerPhotos/MaahaSakia.jpg'
import MedhaAiyah from '../assets/OfficerPhotos/MedhaAiyah.jpg'
import MichaelaPerez from '../assets/OfficerPhotos/MichaelaPerez.jpg'
import ShivaniGandhi from '../assets/OfficerPhotos/ShivaniGandhi.jpg'
import SindhuBoppudi from '../assets/OfficerPhotos/SindhuBoppudi.jpg'



const styles = (theme) => ({
	
});

class officers extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBar />
				<CssBaseline />
				<Container className={classes.container}>
					<br />
					<Card className={classes.root} variant="outlined" align="center">
						<CardContent>
							<div className={classes.details}>
								<div>
									<Typography className={classes.locationText} gutterBottom variant="h4">
										Meet Our Team
									</Typography>
								</div>
							</div>
							<div className={classes.progress} />
						</CardContent>
					</Card>
					<br />
					<Grid container
					spacing={5}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
				>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={MedhaAiyah} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Medha Aiyah</h6>
									<h6>President</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={AnkitaBantey} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Ankita Bantey</h6>
									<h6>Vice President</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={MaahaSakia} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Maaha Sakia</h6>
									<h6>Treasurer</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={ArushiAgrawal} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Arushi Agrawal</h6>
									<h6>Secretary</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={ShivaniGandhi} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Shivani Gandhi</h6>
									<h6>Marketing Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={AngelleNazareno} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Angelle Nazareno</h6>
									<h6>Design Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={JanroseSamson} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Janrose Samson</h6>
									<h6>Community Outreach Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={SindhuBoppudi} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Sindhu Boppudi</h6>
									<h6>Industry Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={DeeshaKumbham} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Deesha Kumbham</h6>
									<h6>Conference Committee Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={MichaelaPerez} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Michaela Perez</h6>
									<h6>Operations Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={CaitlinTibbetts} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Caitlin Tibbetts</h6>
									<h6>Competition Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={CadyBaltz} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Cady Baltz</h6>
									<h6>Membership Chair</h6>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs="6" sm="3">
							<Card variant="outlined">
								<CardContent align="center">
									<img src={AfridaTasnim} width="80%" />
									<br />
									<br />
									<Divider />
									<br />
									<h6>Afrida Tasnim</h6>
									<h6>WEHack Co-Director</h6>
								</CardContent>
							</Card>
						</Grid>

					</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(officers);