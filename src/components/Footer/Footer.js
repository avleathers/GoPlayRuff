import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {
        backgroundColor: '#66bb6a',
        padding: theme.spacing.unit * 6,
    },
});

function Footer(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
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

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);