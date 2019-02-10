import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CustomizedInputBase from '../CustomizedInputBase'
import Search from "../Search";
import axios from "axios";

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class Resources extends Component {
  state = {  }
  render() {
    return (
    
      <CustomizedInputBase/> //get location to search
      // <Search/> //Retrieve the server data based on Location from CustomizedInputbase

    );
  }
}
export default Resources;