import React from "react";
import Slider from "./components/slider";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import {createTheme} from "@material-ui/core";
import login from "./pages/login";
import home from "./pages/home";
import portal from "./pages/portal";
import about from "./pages/about";
import officers from "./pages/officers";
import swestars from "./pages/swestars";
import events from "./pages/events";
import swematch from "./pages/swematch";
import weconference from "./pages/weconference";
import contact from "./pages/contact";
import join from "./pages/join";
import calendar from "./pages/calendar";
import meetingform from "./pages/meetingform";
import EventForm from "./pages/eventForm";
import educationoutreach from "./pages/educationoutreach";

const theme = createTheme({
  palette: {
    primary: {
      light: "#DBC554", // swe gold
      main: "#5A5377", // swe purple
      dark: "#A9A8A9", // swe gray
      contrastText: "#fff",
    },
    background: {
      default: "#5A5377",
    },
  },
});

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/" component={home} />
          <Route exact path="/portal" component={portal} />
          <Route exact path="/about" component={about} />
          <Route exact path="/officers" component={officers} />
          <Route exact path="/swestars" component={swestars} />
          <Route exact path="/events" component={events} />
          <Route exact path="/swematch" component={swematch} />
          <Route exact path="/weconference" component={weconference} />
          <Route exact path="/join" component={join} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/checkin/:eventId" component={EventForm} /> 
          <Route exact path="/calendar" component={calendar} /> 
          <Route exact path="/educationoutreach" component={educationoutreach} />
          <PropsRoute exact path="/cards" eventHeading="Sign in to Volunteering: Coloring Books for Children's Health" eventPoints={1} eventName="Volunteering: Coloring Books for Children's Health" eventDate="4/7/2022" secretWord="art" component={meetingform}/>
          <PropsRoute exact path="/easter" eventHeading="Sign in to Easter Campus Scavenger Hunt Social" eventPoints={1} eventName="Easter Campus Scavenger Hunt Social" eventDate="4/5/2022" secretWord="egg" component={meetingform}/>
          <PropsRoute exact path="/collab" eventHeading="Sign in to SWE x WWC Speed Networking" eventPoints={1} eventName="SWE x WWC Speed Networking" eventDate="4/5/2022" secretWord="meeting" component={meetingform}/>
          <PropsRoute exact path="/at&t" eventHeading="Sign in to AT&T: How to Stay Connected!" eventPoints={1} eventName="AT&T: How to Stay Connected!" eventDate="4/6/2022" secretWord="network" component={meetingform}/>
          <PropsRoute exact path="/kickoff" eventHeading="Sign in to the SWE Fall 2022 Kickoff!" eventPoints={1} eventName = "SWE Fall 2022 Kickoff" eventDate = "9/1/2022" secretWord = "kick" component={meetingform}/>
          <PropsRoute exact path="/SWEkickoff" eventHeading="Sign in to the SWE Spring 2023 Kickoff!" eventPoints={1} eventName = "SWE Spring 2023 Kickoff" eventDate = "1/26/2023" secretWord = "happy" component={meetingform}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
