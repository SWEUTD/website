import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  Box,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";

import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

/*const styles = {
  scrollable: {
    width: "100%",
    height: "100px",
    margin: "0",
    padding: "0",
    overflow: "scroll",
  },
  tr: {
    height: "10px !important",
  },
  "tr td": {
     height: "auto !important",
  }
}*/

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const CountryList = ({countryList=[]}) => {
  const [open, setOpen] = React.useState([]);
  //const classes = useRowStyles();
  return (
    <>
    <TableContainer component={Paper} align="center">
          <Table aria-label="collapsible table">
            <TableBody>
    { countryList.map((data,index) => {
             if (data) {
               // data.open = false;
              return (
                //<div>
                <React.Fragment>
                <TableRow>
                <TableCell>
                  <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell
                  component="tr"
                  width="30%"
                  scope="row"
                  align="left"
                >
                  <b>{data.firstName} {data.lastName}</b>
                  </TableCell>
                  
                  <TableCell
                  component="tr"
                  width="10%"
                  scope="row"
                  align="left"
                >
                  {data.points} pt
                </TableCell>

                <TableCell
                  component="tr"
                  width="20%"
                  scope="row"
                  align="left"
                >
                  {data.email}
                </TableCell>

                </TableRow>

                <TableRow>

                <TableCell /*component="tr" scope="row" align="left"*/ style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody align="right">
                { data.events == null ?
                  (null) : ( 
                    data.events.map((event) => (
                      <p>{event.eventName}</p>
                  )))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>

              </TableRow>
              </React.Fragment>
                	
             )	
           }
           return null
        }) }
        
        </TableBody>
        </Table>
        </TableContainer>
    </>
  );
}

export default CountryList