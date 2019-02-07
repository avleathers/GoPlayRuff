import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
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
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}