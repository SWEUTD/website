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
                <div key={data.firstName}>
                  <h1>{data.firstName}</h1>
          </div>	
             )	
           }
           return null
        }) }
    </>
  );
}

export default CountryList