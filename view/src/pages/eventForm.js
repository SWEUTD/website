import React, { Component } from "react";
import { Button, Container, CircularProgress } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import { authMiddleWare } from "../util/auth";
import NavBar from "../components/navbar";
import axios from "axios";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signin: {
    margin: theme.spacing(3, 0, 2),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progess: {
    position: "absolute",
  },
});

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerReady: false,
      eventProcessing: true,
      eventData: null,
      errors: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI != undefined) {
      if (nextProps.UI.errors) {
        this.setState({
          errors: nextProps.UI.errors,
        });
      }
    }
  }

  componentWillMount = async () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    try {
      const findEventResp = await axios.get(
        //"https://us-central1-swe-utd-portal.cloudfunctions.net/api/eventLookup",
        "http://localhost:5000/swe-utd-portal/us-central1/api/eventLookup",
        { params: { eventId: this.props.match.params.eventId } }
      );
      await axios.post(
        "http://localhost:5000/swe-utd-portal/us-central1/api/newEvent",
        //"https://us-central1-swe-utd-portal.cloudfunctions.net/api/newEvent",
        findEventResp.data.eventInfo
      );
      this.setState({ eventProcessing: false, eventData: findEventResp.data });
    } catch (error) {
      if (error.response != undefined) {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
      }
      if (error.response.status === 409) {
        this.setState({
          eventProcessing: false,
          errors: error.response.data.general,
        });
      }
    }
  };

  // needed for header animation
  componentDidMount() {
    setTimeout(() => {
      this.setState({ headerReady: true });
    }, 0);
  }

  render() {
    const { headerReady, eventData, eventProcessing, errors } = this.state;
    const { history } = this.props;
    return (
      <div>
        <NavBar />
        <div className={classNames("header", { ready: headerReady })}>
          <p className="heading">{this.props.eventHeading}</p>
        </div>
        <Container width="75%">
          {eventProcessing && <CircularProgress />}
          {!eventProcessing && eventData && (
            <>
              <h2>Successfully checked into {eventData.eventName}</h2>
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push("/portal")}
              >
                View Profile
              </Button>
            </>
          )}
          {errors && (
            <h3 style={{ marginBottom: 20 }}>{errors}</h3>
          )}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(EventForm);
