import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";
import axios from "axios";
import MediaQuery from "react-responsive";

import Blog from "../assets/Blog.png";

const styles = (theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  }
});

// wrapper for items
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemRows: [], avatar: "", profileLink: "" };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sweutd";

    // , "Access-Control-Allow-Headers":"*"
    // "Access-Control-Allow-Origin": "*" , 
    //, { headers: {"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"}, }
  async componentDidMount() {
    await axios
      .get(this.mediumURL)
      .then(async (res) => await res.data)
      .then((data) => {
        // create two-dimensional array with 3 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        res.forEach((item, i) => {
          item["avatar"] = this.state.avatar; // push avatar inside the json
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });

        this.setState({ itemRows: itemRows });
      });
  }
  render() {
    const { itemRows } = this.state;
    const containerStyle = {
      backgroundColor: "#5A5377",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const headerStyle = {
      backgroundColor: "#ffffff",
      color: "#f5f5f5",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '15px',
    };

    return (
      <div>
        <MediaQuery minDeviceWidth={900}>
          <Grid
              className={styles.gridItem}
              style={{
                backgroundColor: "white",
                color: "white",
                padding: "30px 50px",
                margin: "0",
                maxWidth: "100%",
              }}
              item
              md={10}
              xs={12}
            >
              <ul align="center">
            <li><a href="https://sweutd.medium.com/" target="_blank"><img src={Blog} width="40%"/></a> </li>
            </ul>
            </Grid>
          </MediaQuery>
        
        
      <Grid container spacing={1} style={containerStyle} >
      <br/><br/>
        {itemRows.map((row, id) =>
          row.map((item, key) => <PostCard {...item} key={key} />)
        )}
      </Grid>
      </div>
    );
  }
}
export default Slider;

// <div style={headerStyle}>
// </div>