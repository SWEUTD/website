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
import samplemeeting from './pages/sample-meeting-signinpage'

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

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
          <Switch>
              <Route exact path="/website/login" component={login}/>
              <Route exact path="/website/" component={home}/>
              <Route exact path="/website/portal" component={portal}/>
              <Route exact path="/website/about" component={about}/>
              <Route exact path="/website/officers" component={officers}/>
              <Route exact path="/website/swestars" component={swestars}/>
              <Route exact path="/website/events" component={events}/>
              <Route exact path="/website/swematch" component={swematch}/>
              <Route exact path="/website/weconference" component={weconference}/>
              <Route exact path="/website/join" component={join}/>
              <Route exact path="/website/contact" component={contact}/>
              <Route exact path="/website/calendar" component={calendar}/>
              <Route exact path="/website/samplemeeting" component={samplemeeting}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;