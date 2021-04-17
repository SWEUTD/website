import React from "react";
import Slider from "./components/slider";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
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

const theme = createMuiTheme({
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
          <Route exact path="/calendar" component={calendar} />    
          <PropsRoute exact path="/seniorspanel" eventHeading="Sign in to 'Seniors Panel - If I were a Freshman' Event" eventPoints={1} eventName = "Seniors Panel - If I were a Freshman" eventDate = "4/13/2021" secretWord = "reflection" component={meetingform}/>
          <PropsRoute exact path="/wwcjp" eventHeading="Sign in to 'WWC X JP Morgan - Imposter Syndrome and Preparing for a Virtual Internship' Event" eventPoints={1} eventName = "WWC X JP Morgan - Imposter Syndrome and Preparing for a Virtual Internship" eventDate = "4/15/2021" secretWord = "advice" component={meetingform}/>
          <PropsRoute exact path="/bridgeland" eventHeading="Sign in to 'Bridgeland High School Panel' Event" eventPoints={1} eventName = "Bridgeland High School Panel" eventDate = "4/20/2021" secretWord = "SWE" component={meetingform}/>
          <PropsRoute exact path="/lennox" eventHeading="Sign in to 'Optimize your Summer with Lennox' Event" eventPoints={1} eventName = "Optimize your Summer with Lennox" eventDate = "4/21/2021" secretWord = "improvement" component={meetingform}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
