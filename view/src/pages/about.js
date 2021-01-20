// about.js

// about page

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import MediaQuery from "react-responsive";

// images
import Statistics from "../assets/statistics.png";
import SponsorA from "../assets/AT&T.png";
import SponsorB from "../assets/CBRE.png";
import SponsorC from "../assets/XILINX.png";
import Award from "../assets/SilverAward.png";

// video
import WhySWE from "../assets/WhySWE.mp4";
import ReactPlayer from "react-player";

const styles = (theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    padding: "30px",
  },
  image: {
    width: "80%",
    borderRadius: "50%",
  },
  listItem: {
    fontSize: 20,
    marginLeft: 50,
  },
});

class about extends Component {
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
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">
            About the UT-Dallas Society of Women Engineers
          </p>
        </div>
        <Grid
          container
          height="100%"
          width="100%"
          alignItems="stretch"
          justify="space-evenly"
          className="movingItem"
        >
          <Grid
            className={classes.gridItem}
            style={{ backgroundColor: "#A9A8A9", color: "white" }}
            item
            xs={12}
          >
            <ReactPlayer url={WhySWE} playing={false} controls={true} />
          </Grid>
          <Grid
            className={classes.gridItem}
            style={{
              backgroundColor: "white",
              color: "white",
              padding: "50px",
            }}
            item
            md={6}
            xs={12}
          >
            <img src={Statistics} width="100%" />
          </Grid>
          <Grid
            className={classes.gridItem}
            style={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "50px",
            }}
            item
            md={6}
            xs={12}
          >
            <div className={classes.card}>
              <h4>
                The Society of Women Engineers (SWE) stimulates women to achieve
                full potential in careers as engineers and leaders, expand the
                image of the engineering profession as a positive force in
                improving the quality of life, and demonstrate the value of
                diversity.
              </h4>
              <br />
              <h4>
                SWE at UTD values service, professional development, and
                networking. Consequently, we host various development and
                recruitment events with companies in the Dallas/ Fort Worth
                area, identify relevant volunteer opportunities, and provide
                members with an opportunity to be sponsored to attend the SWE
                annual conference.
              </h4>
            </div>
          </Grid>
          <Grid
            className={classes.gridItem}
            style={{
              backgroundColor: "#DBC554",
              textAlign: "center",
              padding: "50px",
            }}
            item
            xs={12}
          >
            <div align="center">
              <h1>Awards</h1>
              <br />
              <h3>SWE Mission Award 2020 - Silver</h3>
              <h4>
                The SWE Mission Awards recognize SWE groups that embody SWE core
                values and demonstrate continuous improvement and growth as they
                work to achieve the Society’s strategic goals. UT-Dallas SWE is
                proud to have been awarded a 2020 Collegiate Silver award.
              </h4>
              <br />
              <MediaQuery minDeviceWidth={1224}>
                <img src={Award} width="22%" align="center" />
                <br />
                <Grid container direction="row" style={{ padding: "50px" }}>
                  <Grid item xs={4}>
                    <ul align="left">
                      <h4>SWE Core Values:</h4>
                      <li className={classes.listItem}>Integrity</li>
                      <li className={classes.listItem}>
                        Inclusive Environment
                      </li>
                      <li className={classes.listItem}>Mutual Support</li>
                      <li className={classes.listItem}>
                        Professional Excellence
                      </li>
                      <li className={classes.listItem}>Trust</li>
                    </ul>
                  </Grid>
                  <Grid item xs={8}>
                    <div width="50%">
                      <h4>SWE Strategic Goals:</h4>
                      <h5>Professional Excellence</h5>
                      <h5>
                        Goal 1: SWE will be the premier resource for females in
                        engineering and technology seeking growth and
                        advancement at all stages of their careers.
                      </h5>
                      <h5>Globalization</h5>
                      <h5>
                        Goal 2: SWE will be recognized as a global, inclusive
                        organization, empowering females in engineering and
                        technology regardless of geography or career stage.
                      </h5>
                      <h5>Advocacy</h5>
                      <h5>
                        Goal 3: SWE will be the preeminent advocate for females
                        throughout the engineering and technology pipeline
                      </h5>
                      <h5>Diversity &amp; Inclusion</h5>
                      <h5>
                        Goal 4: SWE will champion diversity in the engineering
                        and technology professions and will promote an inclusive
                        environment.
                      </h5>
                    </div>
                  </Grid>
                </Grid>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1224}>
                <img src={Award} width="50%" align="center" />
                <br />
              </MediaQuery>
              <br />
              <h3>Outstanding Jonsson School Student Organization Award</h3>
              <br />
            </div>
          </Grid>
          <Grid
            className={classes.gridItem}
            style={{ backgroundColor: "white" }}
            item
            xs={12}
          >
            <div align="center">
              <br />
              <h1>Our Sponsors</h1>
              <h2>
                We give special thanks to our sponsors: AT&amp;T, CBRE, and
                Xilinx
              </h2>
              <img src={SponsorA} width="25%" />
              <img src={SponsorB} width="25%" />
              <img src={SponsorC} width="25%" />
              <h4>
                Interested in sponsoring the UT-Dallas section of SWE?{" "}
                <a class="yellowBG" href="/contact">
                  Let us know!
                </a>
              </h4>
              <br />
              <br />
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}
export default withStyles(styles)(about);
