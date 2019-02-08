import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';


// Form Dialog from Material UI was used to create this file.

axios.post("/users", {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  email: ''
});

class CreateAccount extends React.Component {
  state = {
    open: false,
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //  MISSY:  New code to get the value and name of the input which triggered the create

  handleInputCreate = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
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
              To create an Account, please enter your first name, last name, a user name, a password, and your email address.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastName"
              label="Last Name"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="User Name"
              type="string"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            {/* MISSY: added code to send data to the database */}
            <Button onClick={this.handleClose} color="primary">
              Create Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

axios.post("/users", {
  firstName: 'this.firstName',
  lastName: 'this.lastName',
  username: 'this.username',
  password: 'this.password',
  email: 'this.email'
});

export default CreateAccount;