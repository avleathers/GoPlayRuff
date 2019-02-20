import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {
        background: 'linear-gradient(to left bottom, #66bb6a,#2e7d32, #66bb6a)',
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
                Built by dog lovers to spend more time with their dogs!
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