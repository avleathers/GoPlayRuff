import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import CustomizedInputBase from '../CustomizedInputBase'

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


class Search extends Component {
  state = {  }
  render() {
    return (
        <div id="test"></div>

          <script>
            var myCallback = function() {
            if (document.readyState == 'complete') {
                  // Document is ready when CSE element is initialized.
                  // Render an element with both search box and search results in div with id 'test'.
                  google.search.cse.element.render(
                      {
                          div: "test",
                          tag: 'search'
                      });
              } else {
                  // Document is not ready yet, when CSE element is initialized.
                  google.setOnLoadCallback(function () {
                      // Render an element with both search box and search results in div with id 'test'.
                      google.search.cse.element.render(
                          {
                              div: "test",
                              tag: 'search'
                          });
                  }, true);
              }
            };
            
            // Insert it before the CSE code snippet so that cse.js can take the script
            // parameters, like parsetags, callbacks.
            window.__gcse = {
                  parsetags: 'explicit',
              callback: myCallback
            };
            
            (function() {
            var cx = '123:456'; // Insert your own Custom Search engine ID here
              var gcse = document.createElement('script'); gcse.type = 'text/javascript';
              gcse.async = true;
              gcse.src = 'https://cse.google.com/cse?cx=012027344973539597455:4rhv5aor7f8' + cx;
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
            })();
</script>

       // Custom search engine : https://cse.google.com/cse?cx=012027344973539597455:4rhv5aor7f8/

    )
  }
}


export default Search;