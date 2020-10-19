

import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

//images
import logo from '../assets/logo.png'
import Award from '../assets/SilverAward.png'

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
});

class footer extends Component {
    render() {
        return(
            <div>
                <h5>Society of Women Engineers @ UT Dallas</h5>
                    <p>
                        The SWE Mission Awards recognize SWE groups that embody SWE core values and demonstrate continuous improvement and growth as they work to achieve the Society’s strategic goals. 
                        UT-Dallas SWE is proud to have been awarded a 2020 Collegiate Silver award.
                    </p>
                <img src={Award} width="15%"/>
            </div>
        );
    }
}

export default withStyles(styles)(footer);