import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import missyRustyPic from "./Assets/MissyRusty.jpg";
import lorisLabsPic from "./Assets/LorisLabs.jpg";
import taePoodlePic from "./Assets/TaePoodle.jpg";
import colinWheatenPic from "./Assets/ColinWheaten.jpg";
import CreateAccount from "../CreateAccount";
import SignIn from "../SignIn";
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    appBar: {
        display: 'flex',
        position: 'sticky',
        background: 'linear-gradient(to left bottom, #66bb6a,#2e7d32, #66bb6a)',
        paddingTop: 20,
        paddingBottom: 10,
        paddingRight:10,
    },
    
    menuButton: {
        display: 'flex',
        flexDirection: 'row',
        align: 'right',
        justify: 'flex-end',
    },

    heroUnit: {
        background: 'linear-gradient(to right bottom, #e8f5e9, #81c784, #e8f5e9)',
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 3}px 0`,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
        background: 'linear-gradient(to right top, #e8f5e9, #c8e6c9, #e8f5e9)',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
        height: '100%',
    },
    cardContent: {
        flexGrow: 1,
    },
    divider: {
        width: '100%',
        height: '100px',
        backgroundColor: '#c8e6c9',
    },

    footer: {
        backgroundColor: 'green',
        padding: theme.spacing.unit * 6,
    },
});

const cards = [
    {
        img: missyRustyPic,
        title: "Missy and Rusty",
        text: "Rusty is not a rescue, but he did rescue me. He came into our lives during a very sad time right after the loss of my Mom and our first Wire Fox Terrier. Rusty joined our family within a week and it was truly love at first site. Wires are so much fun and guaranteed to put a smile on your face and make you laugh. Rusty is a very sweet dog and loves to cuddle and curl up in Mommy or Daddy’s lap. I hope to always have a loving Wire Fox Terrier fur-child."
    },
    {
        img: lorisLabsPic,
        title: "Lori's  Labs",
        text: "I can be seen walking (or driving) my 3 labs to the park twice/day. We have 3 yr old puppies Bronco & Buster and a 10 yr old rescue from Ohio, Leo (with a titanium plate in back left knee). Occasionally we also have our 2 grand-dogs Jude (4) & Buddy (3). They all LOVE playing fetch, ANY water sports and going camping. Life is RUFF!!"
    },
    {
        img: taePoodlePic,
        title: "Tae and Kong",
        text: "Kong came into our lives 10 years ago, 2 months after our last dog Jjong  passed away. My mom decided not to have another pet because of the pain she goes through when a pet suffers or dies. I brought Kong (2 weeks old) over from my friend's house and my mom could not help but accept her right away. Thankfully, Kong is in a really healthy condition although she is turning 10.  She is one of the biggest parts of our family!"
    },
    {
        img: colinWheatenPic,
        title: "Colin and Keeva",
        text: "I got Keeva when I was in high school. She has been a loyal family member ever since. Even when I went away to college I had to come back at least once a week so that she did not get depressed."
    }
];


function About(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="sticky" className={classes.appBar}>
                <Grid
                    container
                    direction="row"
                    justify="center">
                    <Typography component="h1" variant="h2" display="inline-block" color="textPrimary">
                        Go! Play! Ruff!
                    </Typography>
                        <Grid justify="flex-end" // Add it here :)
                        container
                        spacing={16} 
                        grid direction="row">
                        <Grid item >
                        <CreateAccount />
                        </Grid>
                        <Grid item >
                        <SignIn />
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Go! Play! Ruff! is a website for dog lovers to find dog-friendly places to go, play a dog tile puzzle game and learn about the creators' dogs.
                        </Typography>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map((card, i) => (
                            <Grid item key={i} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.img}
                                            title={card.title}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography>
                                                {card.text}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <Divider />
            </main>
        </React.Fragment>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);