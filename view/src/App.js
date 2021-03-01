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
          <PropsRoute exact path="/at&t" eventHeading="Sign in to AT&T Panel: Create Your Own Path to Success Event" eventPoints={1} eventName = "AT&T Panel: Create Your Own Path to Success" eventDate = "3/2/2021" secretWord = "girl" component={meetingform}/>
          <PropsRoute exact path="/career" eventHeading="Sign in to Navigating a Virtual Career Fair Panel Event" eventPoints={1} eventName = "Navigating a Virtual Career Fair Panel" eventDate = "3/10/2021" secretWord = "meet" component={meetingform}/>
          <PropsRoute exact path="/pi" eventHeading="Sign in to Pi Day Social" eventPoints={1} eventName = "Pi Day Social" eventDate = "3/12/2021" secretWord = "sweet" component={meetingform}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
