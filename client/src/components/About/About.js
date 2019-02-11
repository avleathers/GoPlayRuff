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
        background: '#66bb6a',
        paddingTop: 50,
    },
    
    menuButton: {
        display: 'flex',
        flexDirection: 'row',
        align: 'right',
        justify: 'flex-end',
    },

    heroUnit: {
        background: '#c8e6c9',
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
        background: '#e0e0e0',
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
        text: "The 2 brown labs are my grand-dogs. Jude and Buddy. Leo is a 10 year old rescue from Ohio, is the guy with his tongue out.  He has a new titanium plated in his knee.  Bronco is the lab on my left and his brother buster to my right scratching."
    },
    {
        img: taePoodlePic,
        title: "Tae and Kong",
        text: "Text for Tae and his poodle's story."
    },
    {
        img: colinWheatenPic,
        title: "Colin and Keeva",
        text: "Text for Colin and Keeva's story."
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
                            Go! Play! Ruff! is a place where people who love dogs can find great dog-friendly resources, and play a fun dog puzzle game.
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