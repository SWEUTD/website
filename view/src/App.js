import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import login from './pages/login';
import home from './pages/home';
import portal from './pages/portal';
import about from './pages/about'
import officers from './pages/officers'
import swestars from './pages/swestars'
import events from './pages/events'
import swematch from './pages/swematch'
import weconference from './pages/weconference'
import contact from './pages/contact'
import join from './pages/join'
import calendar from './pages/calendar'
import meetingform from './pages/meetingform'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#DBC554', // swe gold
			main: '#5A5377',  // swe purple
			dark: '#A9A8A9',  // swe gray
			contrastText: '#fff'
    },
    background: {
      default: "#5A5377"
    }
	}
});

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
          <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/" component={home}/>
              <Route exact path="/portal" component={portal}/>
              <Route exact path="/about" component={about}/>
              <Route exact path="/officers" component={officers}/>
              <Route exact path="/swestars" component={swestars}/>
              <Route exact path="/events" component={events}/>
              <Route exact path="/swematch" component={swematch}/>
              <Route exact path="/weconference" component={weconference}/>
              <Route exact path="/join" component={join}/>
              <Route exact path="/contact" component={contact}/>
              <Route exact path="/calendar" component={calendar}/>
              <PropsRoute exact path="/awsday2" eventHeading="AWS Series Day 2" eventPoints={1} eventName = "AWS Series Day 2" eventDate = "8/04/2020" secretWord = "summer" component={meetingform}/>
              <PropsRoute exact path="/awsday3" eventHeading="AWS Series Day 3" eventPoints={1} eventName = "AWS Series Day 3" eventDate = "8/05/2020" secretWord = "server" component={meetingform}/>
              <PropsRoute exact path="/awsday4" eventHeading="AWS Series Day 4" eventPoints={1} eventName = "AWS Series Day 4" eventDate = "8/06/2020" secretWord = "amazon" component={meetingform}/>
              <PropsRoute exact path="/awsday5" eventHeading="AWS Series Day 5" eventPoints={1} eventName = "AWS Series Day 5" eventDate = "8/07/2020" secretWord = "web" component={meetingform}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;