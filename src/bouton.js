// ceci est le code pour refaire le bouton dans la video material ui

import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import indigo from '@material-ui/core/colors/indigo';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const bouton_Mui = (props) => {
    return (
        <MuiThemeProvider theme = {theme}>
            <Button variant="contained" color="primary">
                Bouton Rouge
            </Button>
            <Button variant="contained" className={props.classes.myLeftButton}>
                Bouton Bleu
            </Button>
        </MuiThemeProvider>
        )
}

const styles = {
  myLeftButton : {
    backgroundColor: "blue",
    color : 'white',
    "&:hover":{backgroundColor: "indigo"}
  }
}

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: indigo,
  },
});

export default  withStyles(styles)(bouton_Mui);