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
const CountryList = ({countryList=[]}) => {
  return (
    <>
    { countryList.map((data,index) => {
             if (data) {
              return (
                <div>
                  <p>{data.firstName} {data.lastName}</p>
                
          </div>	
             )	
           }
           return null
        }) }
    </>
  );
}

export default CountryList