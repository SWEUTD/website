// officers.js

// page containing officer photos and information

import React, { Component } from "react";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardContent,
  Container,
  Divider,
  Button,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Officer photoss
import SWElogo from "../assets/OfficerPhotos/SWElogo.png";
import AreebaQazi from "../assets/OfficerPhotos2022/AreebaQazi.JPG";
import AvaniGarde from "../assets/OfficerPhotos2022/AvaniGarde.JPG";
import EshaBansal from "../assets/OfficerPhotos2022/EshaBansal.JPG"
import FaizaRahman from "../assets/OfficerPhotos2022/FaizaRahman.JPG";
import IfritMaruf from "../assets/OfficerPhotos2022/IfritMaruf.JPG";
import NehaSapre from "../assets/OfficerPhotos2022/NehaSapre.JPG";
import NithyaK from "../assets/OfficerPhotos2022/NithyaK.JPG";
import PalakBhargava from "../assets/OfficerPhotos2022/PalakBhargava.JPG";
import PriyankaAmalkar from "../assets/OfficerPhotos2022/PriyankaAmalkar.JPG";
import ShagunDalal from "../assets/OfficerPhotos2022/ShagunDalal.JPG";
import ShamithaThumma from "../assets/OfficerPhotos2022/ShamithaThumma.JPG";
import VarshaG from "../assets/OfficerPhotos2022/VarshaG.JPG";
import JennaKrueger from "../assets/OfficerPhotos2021/JennaKrueger.jpg";
import SwaritaKelwada from "../assets/OfficerPhotos2022/SwaritaKelwada.JPG";
import PurvaPawar from "../assets/OfficerPhotos2022/PurvaPawar.JPG";
import SatvikaRavi from "../assets/OfficerPhotos2022/SatvikaRavi.JPG";
import AditiMungale from "../assets/OfficerPhotos2022/AditiMungale.JPG";

import ZainebAhmad from "../assets/OfficerPhotos2021/ZainebAhmad.png";
import PushpaKumar from "../assets/OfficerPhotos2021/PushpaKumar.png";
import JerryAlexander from "../assets/OfficerPhotos2021/JerryAlexander.jpg";

const officerList = [

  {
    name: "Ifrit Maruf",
    image: IfritMaruf,
    position: "President",
    committee: "Exec",
    linkedin: "https://www.linkedin.com/in/ifrit-maruf/",
  },

  {
    name: "Neha Sapre",
    image: NehaSapre,
    position: "Vice President",
    committee: "Exec",
    linkedin: "https://www.linkedin.com/in/nehasapre/",
  },
  {
    name: "Esha Bansal",
    image: EshaBansal,
    position: "Secretary",
    committee: "Exec",
    linkedin: "https://www.linkedin.com/in/esha-bansal-a587811aa/",
  },
  {
    name: "Satvika Ravi",
    image: SatvikaRavi,
    position: "Treasurer",
    committee: "Exec",
    linkedin: "https://www.linkedin.com/in/satvika-ravi-0926911ab/",
  },
  
  {
    name: "Jenna Krueger",
    image: JennaKrueger, 
    position: "SWEMatch Co-Chair",
    committee: "SWE Match",
    linkedin: "https://www.linkedin.com/in/jenna-krueger-2024-bmen/",
  },

  {
    name: "Varsha George",
    image: VarshaG, 
    position: "SWEMatch Co-Chair",
    committee: "SWE Match",
    linkedin: "https://www.linkedin.com/in/varsha-george/",
  },
  
  {
    name: "Swarita Kelwada", //crop her picture and fix linkedin??
    image: SwaritaKelwada,
    position: "WEHack Director",
    committee: "WEHack",
    linkedin: "https://www.linkedin.com/in/swarita-kelwada-2278a4172/",
  },
  {
    name: "Faiza Rahman",
    image: FaizaRahman,
    position: "Conference and Banquet Chair",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/faiza-rahman-585a15203/",
  },
  {
    name: "Shamitha Thumma",
    image: ShamithaThumma,
    position: "Industry Chair",
    committee: "Industry",
    linkedin: "https://www.linkedin.com/in/shamitha-thumma/",
  },
  {
    name: "Avani Garde",
    image: AvaniGarde,
    position: "Ladies in Tech Mentoring Program Chair",
    committee: "LITMP",
    linkedin: "https://www.linkedin.com/in/avanigarde/",
  },
  {
    
    name: "Purva Pawar", 
    image: PurvaPawar    ,
    position: "Community Events Chair",
    committee: "Community Events",
    linkedin: "https://www.linkedin.com/in/purvapawar/",
  },
  {
    name: "Shagun Dalal",
    image: ShagunDalal,
    position: "Webmaster Chair",
    committee: "Website",
    linkedin: "https://www.linkedin.com/in/shagundalal/",
  },
  
  {
    name: "Priyanka Amalkar",
    image: PriyankaAmalkar,
    position: "Public Relations Chair",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/priyanka-amalkar-9417811b7/",
  },
  {
    name: "Aditi Mungale",
    image: AditiMungale,
    position: "Education Outreach Chair",
    committee: "Education Outreach",
    linkedin: "https://www.linkedin.com/in/aditi-mungale/",
  },
  
  {
    name: "Dr. Pushpa Kumar",
    image: PushpaKumar,
    position: "Faculty Advisor",
    committee: "Faculty Advisors",
  },
  {
    name: "Zaineb Ahmad",
    image: ZainebAhmad,
    position: "SWE UTD Section Counselor",
    committee: "Faculty Advisors",
  },
   
];

const styles = (theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  image: {
    width: "80%",
    borderRadius: "8px", // 50% intially w/ circles
  },
  officerHeading: {},
});

class officers extends Component {
  constructor(props) {
    super(props);
    this.state = { headerReady: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true, committeeSelection: "ALL" });
    }, 0);
  }

  render() {
    const { headerReady, committeeSelection } = this.state;
    const { classes } = this.props;
    const boards = [
      "ALL",
      ...new Set(
        officerList
          .filter((item) => !item.committee.includes(",")) // if on multiple commitees, don't want to show it as a seperate choice
          .map((item) => item.committee)
      ),
    ];

    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">Meet Our Officers</p>
        </div>
        <Container className={classes.container}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            fullWidth="true"
            orientation={window.innerWidth < 900 ? "vertical" : "horizontal"}
          >
            {boards.map((committeeName) => (
              <Button
                variant={
                  committeeName === committeeSelection
                    ? "contained"
                    : "outlined"
                }
                onClick={() =>
                  this.setState({
                    ...this.state,
                    committeeSelection: committeeName,
                  })
                }
              >
                {committeeName}
              </Button>
            ))}
          </ButtonGroup>
          <div
            className="officerHeading"
            style={({ height: "50px" }, { padding: "20px" })}
          >
            <h2>
              <center>{committeeSelection}</center>
            </h2>
          </div>
          <Grid
            container
            spacing={5}
            alignItems="stretch"
            justify="space-evenly"
          >
            {officerList
              .filter((person) => {
                if (committeeSelection == "ALL") return person;
                else return person.committee.includes(committeeSelection);
              })
              .map((officer) => (
                <Grid className={classes.gridItem} item xs="6" sm="3">
                  <Card
                    className={classes.card}
                    //className="movingItem"
                    variant="outlined"
                  >
                    <CardContent align="center">
                      <img src={officer.image} className={classes.image} />
                      <br />
                      <br />
                      <Divider />
                      <br />
                      <h6>{officer.name}</h6>
                      <h6>{officer.position}</h6>
                      <a href={officer.linkedin} target="_blank">
                        {officer.linkedin && (
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="imageLink"
                            size="lg"
                            style={{ color: "#5A5377" }}
                          />
                        )}
                      </a>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
        <br />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(officers);

