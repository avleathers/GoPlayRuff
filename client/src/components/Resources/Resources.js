
import React, { Component } from "react";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// My files below
import CustomizedInputBase from "../CustomizedInputBase";
import axios from "axios";

const styles = theme => ({
  appBar: {
    position: "relative",
    background: 'linear-gradient(to left bottom, #66bb6a,#2e7d32, #66bb6a)'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    // backgroundColor: theme.palette.background.paper
    background: 'linear-gradient(to right bottom, #e8f5e9, #81c784, #e8f5e9)',
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Resources extends Component {
  state = {
    restaurants: []
  };

  //Use URL to get the restaurant data
  componentDidMount() {
    axios
      .get("/go/restaurants")
      .then(res => {
        const restaurants = res.data;
        console.log(res.data);
        this.setState({ restaurants });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* <CameraIcon className={classes.icon} /> Make this a collapsible menu */}
            <Typography variant="h6" color="inherit" noWrap>
              Dog-Friendly Resources
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Dog friendly places to go!
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                Select where to go in or near that location to see 20 websites by picture,
                restaurant name and summary. Go directly to the website via View button.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    {/* <Button variant="contained" color="primary"> */}
                    <CustomizedInputBase />
                  </Grid>
                  <Grid item />
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {this.state.restaurants.map(card => (
                <Grid item key={card} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image= {card.thumbnail}
                       // eslint-disable-line max-len
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography>
                        {card.summary}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        <a href={card.website} target="_blank">View </a> 
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        {/* <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
           Built by dog lovers to spend more time with their dogs!
          </Typography>
        </footer> */}
        {/* End footer */}
      </React.Fragment>
    );
  }
}

// Resources.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Resources);
