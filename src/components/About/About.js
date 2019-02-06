import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import missyRustyPic from "./Assets/MissyRusty.jpg";
// import Image from 'material-ui-image'

const styles = theme => ({
    appBar: {
        position: 'sticky',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const cards = [
    {
        img: missyRustyPic,
        title: "Missy and Rusty",
        text: "Rusty is not a rescue, but he did rescue me. He came into our lives during a very sad time. My Mom had passed away 6 weeks earlier, and our first Wire Fox Terrier followed her 5 weeks later. We got Rusty within a week and it was truly love at first site for both of us. Wires are so much fun and guaranteed to put a smile on your face and make you laugh. They are determined little devils too, and can easily become fixated on things they want! Seeing a dog on TV always gets Rusty’s attention, and he lets us know it by becoming vocal! Rusty is wonderful with children and is very gentle with them. He is a very sweet dog and loves to cuddle and curl up in Mommy or Daddy’s lap. I have loved this breed since I first met “ George”, the Wire Fox Terrier who is the George store namesake and mascot, and I hope to always have a loving Wire Fox Terrier fur-child."
    },
    {
        img: missyRustyPic,
        title: "Lori's  Labs",
        text: "Text for Lori and her labrador retrievers story."
    },
    {
        img: missyRustyPic,
        title: "Tae and Poodle",
        text: "Text for Tae and his poodle's story."
    },
    {
        img: missyRustyPic,
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
                <Toolbar>
                    {/* <CameraIcon className={classes.icon} /> */}
                    <Typography variant="h6" color="inherit" noWrap>
                        About layout
          </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Go! Play! Ruff!
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Go! Play! Ruff! is a place where people who love dogs can find great dog-friendly resources, and play a fun dog puzzle game.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                  </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                  </Button>
                                </Grid>
                            </Grid>
                        </div>
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
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Go! Play! Ruff!
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                “Once you have had a wonderful dog, a life without one, is a life diminished.” Dean Koontz (author, Whispers)
        </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);