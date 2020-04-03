// ceci est le code pour refaire le bouton dans la video material ui

import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import indigo from '@material-ui/core/colors/indigo';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const ButtonMUI = (props) => {
  console.log(props.color);
    return (
        <MuiThemeProvider theme = {theme}>
            <Button variant="contained" color={props.color}>
              {props.title}
            </Button>
        </MuiThemeProvider>
        )
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4e342e',
      dark: '#260e04',
      light: '#7b5e57',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ffa726',
      contrastText: '#000',
    },
  },
});

export default  ButtonMUI;