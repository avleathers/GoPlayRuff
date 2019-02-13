
// import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


// import Image from 'material-ui-image'
import React from 'react';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default class FormDialog extends React.Component {

    state = {
        open: false,
        users: []
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        axios.get("/users")
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
    };

    handleInputChange = event => {
        const{ name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        event.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        };

        axios.post("/post/users",  user )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    render() {
        return (
            <div>
                <Button variant="outlined" className="text-right" onClick={this.handleClickOpen}>
                    Create Account
        </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create an Account, please enter your First Name, Last Name, a User Name, and a Password.
            </DialogContentText>

            <form onSubmit={this.handleSubmit}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="First Name"
                    type="string"
                    name="firstName"
                    value={this.state.firstName}
                    onChange= {this.handleInputChange}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastNamedb"
                    label="Last Name"
                    type="string"
                    name="lastName"
                    value={this.state.lastName}
                    onChange= {this.handleInputChange}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="usernamedb"
                    label="User Name"
                    type="string"
                    name="username"
                    value={this.state.username}
                    onChange= {this.handleInputChange}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="passworddb"
                    label="password"
                    type="string"
                    name="password"
                    value={this.state.password}
                    onChange= {this.handleInputChange}
                    fullWidth
                    type="password"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="emaildb"
                    label="Email Adress"
                    name="email"
                    value={this.state.email}
                    onChange= {this.handleInputChange}
                    type="string"
                    fullWidth
                />

            </form>
            </DialogContent>

            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                    Create Account
        {/* Add code to send data to the database */}
                </Button>
            </DialogActions>
                </Dialog>
            </div>
        );
    }
}