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
              <Route exact path="/SWEUTD-Website/login" component={login}/>
              <Route exact path="/SWEUTD-Website/" component={home}/>
              <Route exact path="/SWEUTD-Website/portal" component={portal}/>
              <Route exact path="/SWEUTD-Website/about" component={about}/>
              <Route exact path="/SWEUTD-Website/officers" component={officers}/>
              <Route exact path="/SWEUTD-Website/swestars" component={swestars}/>
              <Route exact path="/SWEUTD-Website/events" component={events}/>
              <Route exact path="/SWEUTD-Website/swematch" component={swematch}/>
              <Route exact path="/SWEUTD-Website/weconference" component={weconference}/>
              <Route exact path="/SWEUTD-Website/join" component={join}/>
              <Route exact path="/SWEUTD-Website/contact" component={contact}/>
              <Route exact path="/SWEUTD-Website/calendar" component={calendar}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;