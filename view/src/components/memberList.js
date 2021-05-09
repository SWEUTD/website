import React from 'react';
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
} from "@material-ui/core";

import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";

const styles = {
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
}

const CountryList = ({countryList=[]}) => {
  return (
    <>
    <TableContainer component={Paper} align="center">
          <Table aria-label="simple table">
            <TableBody>
    { countryList.map((data,index) => {
             if (data) {
              return (
                //<div>
                <TableRow>
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

                <TableCell
                  component="tr"
                  width="40%"
                  //max-height="100px"
                  scope="row"
                  align="left"
                  //height="auto !important"
                  //class={styles.scrollable}
                  //style={{height: 10}}
                  //style={{margin: "-100px"}}
                >
                  { data.events == null ?
                  (null) : ( 
                    data.events.map((event) => (
                      <p>{event.eventName}</p>
                  )))}
                </TableCell>

              </TableRow>
                
          //</div>	
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