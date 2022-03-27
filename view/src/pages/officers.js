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

// Officer photos
import SWElogo from "../assets/OfficerPhotos/SWElogo.png";
import AarushiPandey from "../assets/OfficerPhotos2021/AarushiPandey.jpg";
import AnhNguyen from "../assets/OfficerPhotos2021/AnhNguyen.jpg";
import AreebaQazi from "../assets/OfficerPhotos2021/AreebaQazi.jpg";
import ArushiAgrawal from "../assets/OfficerPhotos2021/ArushiAgrawal.jpg";
import DeeshaKumbham from "../assets/OfficerPhotos2021/DeeshaKumbham.JPG";
import EshaBansal from "../assets/OfficerPhotos2021/EshaBansal.jpg";
import IfritMaruf from "../assets/OfficerPhotos2021/IfritMaruf.jpg";
import IshaniChowdhury from "../assets/OfficerPhotos2021/IshaniChowdhury.jpg";
import JeshnaGupta from "../assets/OfficerPhotos2021/JeshnaGupta.JPG";
import JennaKrueger from "../assets/OfficerPhotos2021/JennaKrueger.jpg";
import JessicaTruong from "../assets/OfficerPhotos2021/JessicaTruong.JPG";
import LaineyRogers from "../assets/OfficerPhotos2021/LaineyRogers.JPG";
import LenaMubarak from "../assets/OfficerPhotos2021/LenaMubarak.jpg";
import MaahaSakia from "../assets/OfficerPhotos2021/MaahaSakhia.jpg";
import MadisonKing from "../assets/OfficerPhotos2021/MadisonKing.jpg";
import ManshaFatima from "../assets/OfficerPhotos2021/ManshaFatima.jpg";
import MrunmayiSathaye from "../assets/OfficerPhotos2021/MrunmayiSathaye.jpg";
import NivethaNarayanan from "../assets/OfficerPhotos2021/NivethaNarayanan.jpg";
import NehaSapre from "../assets/OfficerPhotos2021/NehaSapre.jpg";
import NithyaJaisankar from "../assets/OfficerPhotos2021/IMG_7969.jpg";
import NithyaSree from "../assets/OfficerPhotos2021/NithyaSree.jpg";
import NithilaIllangovan from "../assets/OfficerPhotos2021/Nithila.jpg";
import NuhaSiddiqui from "../assets/OfficerPhotos2021/NuhaSiddiqui.jpg";
import ReshmiRanjith from "../assets/OfficerPhotos2021/ReshmiRanjith.JPG";
import ShreyaChauk from "../assets/OfficerPhotos2021/ShreyaChauk.jpg";
import SabaShaikh from "../assets/OfficerPhotos2021/SabaShaikh.jpg";
import SamridhiGanguly from "../assets/OfficerPhotos2021/SamriddhiGanguly.jpg";
import SarahTao from "../assets/OfficerPhotos2021/SarahTao.JPG";
import SreyaNagumalla from "../assets/OfficerPhotos2021/SreyaNagumalla.JPG";
import VamikaChatlani from "../assets/OfficerPhotos2021/VamikaChatlani.jpg";
import ZainebAhmad from "../assets/OfficerPhotos2021/ZainebAhmad.png";
import PushpaKumar from "../assets/OfficerPhotos2021/PushpaKumar.png";
import JerryAlexander from "../assets/OfficerPhotos2021/JerryAlexander.jpg";

const officerList = [
  {
    name: "Maaha Sakhia",
    image: MaahaSakia,
    position: "President",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/maaha-sakhia-183298196/",
  },
  {
    name: "Areeba Qazi",
    image: AreebaQazi,
    position: "Vice President of Internal Affairs",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/areebaqazi/",
  },
  {
    name: "Shreya Chauk",
    image: ShreyaChauk,
    position: "Vice President of External Affairs",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/shreyachauk/",
  },
  {
    name: "Nuha Siddiqui",
    image: NuhaSiddiqui,
    position: "Secretary",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/nuha-siddiqui/",
  },
  {
    name: "Arushi Agarwal",
    image: ArushiAgrawal,
    position: "Treasurer",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/agrawal-arushi/",
  },
  /*{
    name: "Afrida Tasnim",
    image: AfridaTasnim,
    position: "WEHack Director",
    committee: "Board",
    linkedin: "https://www.linkedin.com/in/afrida-tasnim/",
  },*/
  {
    name: "Ishani Chowdhury",
    image: IshaniChowdhury,
    committee: "Board, Design",
    position: "Design Chair",
  },
  {
    name: "Esha Bansal",
    image: EshaBansal,
    position: "Marketing Chair",
    committee: "Board, Marketing",
    linkedin: "https://www.linkedin.com/in/esha-bansal-a587811aa/",
  },
  {
    name: "Nithya Jaisankar",
    image: NithyaJaisankar,
    position: "Conference Chair",
    committee: "Board, Conference",
    linkedin: "https://www.linkedin.com/in/nithya-jaisankar/",
  },
  {
    name: "Jeshna Gupta",
    image: JeshnaGupta,
    position: "Industry Chair",
    committee: "Board, Industry",
    linkedin: "https://www.linkedin.com/in/jeshna-gupta/",
  },
  {
    name: "Neha Sapre",
    image: NehaSapre,
    position: "Outreach- SWErve Chair",
    committee: "Board, SWErves",
    linkedin: "https://www.linkedin.com/in/nehasapre/",
  },
  {
    name: "Ifrit Maruf",
    image: IfritMaruf,
    position: "Public Relations Chair",
    committee: "Board, Public Relations",
    linkedin: "https://www.linkedin.com/in/ifrit-maruf/",
  },
  {
    name: "Madison King",
    image: MadisonKing,
    position: "Mentorship Chair - LITMP",
    committee: "Board, Mentorship",
    linkedin: "https://www.linkedin.com/in/mbaileyking/",
  },
  /*{
    name: "Deesha Kumbham",
    image: DeeshaKumbham,
    position: "Conference Committee Chair",
    committee: "Board, Conference Committee",
    linkedin: "https://www.linkedin.com/in/deesha-kumbham-86b4b6196/",
  },*/
  
  {
    name: "Jenna Krueger",
    image: JennaKrueger,
    position: "Competition Chair",
    committee: "Board, Competition",
    linkedin: "",
  },
  {
    name: "Sarah Tao",
    image: SarahTao,
    position: "Competition Chair",
    committee: "Board, Competition",
    linkedin: "",
  },
  {
    name: "Aarushi Pandey",
    image: AarushiPandey,
    position: "Webmaster Chair",
    committee: "Board, Website Development",
    linkedin: "https://www.linkedin.com/in/aarushi-s-pandey/",
  },
  /*{
    name: "Saba Shaikh",
    image: SabaShaikh,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/saba-shaikh-3a1a27172/",
  },*/
  /*{
    name: "Nithya Jaisankar",
    image: NithyaJaisankar,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/nithya-jaisankar/",
  },*/
  {
    name: "Deesha Kumbham",
    image: DeeshaKumbham,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/deesha-kumbham-86b4b6196/",
  },
  {
    name: "Faiza Rahman",
    image: SWElogo,
    position: "Conference Committee Member",
    committee: "Conference",
    linkedin: "https://www.linkedin.com/in/faiza-rahman-585a15203/",
  },
  {
    name: "Shamitha Thumma",
    image: SWElogo,
    position: "Industry Committee Member",
    committee: "Industry",
    linkedin: "https://www.linkedin.com/in/shamitha-thumma/",
  },
  {
    name: "Kiara Vaz",
    image: SWElogo,
    position: "Industry Committee Member",
    committee: "Industry",
    linkedin: "https://www.linkedin.com/in/kiara-vaz/",
  },
  {
    name: "Lainey Rogers",
    image: LaineyRogers,
    position: "Industry Committee Member",
    committee: "Industry",
    linkedin: "",
  },
  {
    name: "Samridhi Ganguly",
    image: SamridhiGanguly,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/samridhi-ganguly-1304b2203/",
  },
  {
    name: "Jessica Truong",
    image: JessicaTruong,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/truongjessica-tx/",
  },
  {
    name: "Avani Garde",
    image: SWElogo,
    position: "Public Relations Committee Member",
    committee: "Public Relations",
    linkedin: "https://www.linkedin.com/in/avanigarde/",
  },
  {
    name: "Palak Bhargava",
    image: SWElogo,
    position: "Education Outreach Committee Member",
    committee: "SWErves",
    linkedin: "https://www.linkedin.com/in/palak-bhargava01/",
  },
  {
    name: "Stephanie Li",
    image: SWElogo,
    position: "Education Outreach Committee Member",
    committee: "SWErves",
    linkedin: "https://www.linkedin.com/in/syangli/",
  },
  {
    name: "Mrunmayi Sathaye",
    image: MrunmayiSathaye,
    position: "Blog Writer",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/mrunmayi-sathaye/",
  },
  {
    name: "Michelle Kuwahara",
    image: SWElogo,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/michelle-kuwahara/",
  },
  {
    name: "Priyanka Amalkar",
    image: SWElogo,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/priyanka-amalkar-9417811b7/",
  },
  /*{
    name: "Esha Bansal",
    image: EshaBansal,
    position: "Marketing Committee Member",
    committee: "Marketing",
    linkedin: "https://www.linkedin.com/in/esha-bansal-a587811aa/",
  },*/
  {
    name: "Anh Nguyen",
    image: AnhNguyen,
    position: "Website Development Committee Member",
    committee: "Website Development",
    linkedin: "https://www.linkedin.com/in/anhnguyen1902/",
  },
  {
    name: "Nithya Sree",
    image: NithyaSree,
    position: "Videographer, Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/mansha-fatima-2a485412b/",
  },
  {
    name: "Nivetha Narayanan",
    image: NivethaNarayanan,
    position: "Graphic Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/ishani-chowdhury/",
  },
  {
    name: "Nithila Illangovan",
    image: NithilaIllangovan,
    position: "Graphic Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/nithila-ilangovan-5678471a7/",
  },
  {
    name: "Sreya Nagumalla",
    image: SreyaNagumalla,
    position: "Graphic Design Committee Member",
    committee: "Design",
    linkedin: "https://www.linkedin.com/in/sreya-nagumalla-135404168/",
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
  {
    name: "Jerry Alexander",
    image: JerryAlexander,
    position: "ECS Assistant Dean for Student Development",
    committee: "Faculty Advisors",
    linkedin: "https://www.linkedin.com/in/internguy/",
  }  
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
    borderRadius: "50%",
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
                    className="movingItem"
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
