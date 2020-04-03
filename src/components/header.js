import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';


const Header = (props) => {
  console.log(props.color);
    return (
        <MuiThemeProvider theme = {theme} className={props.classes.header}>
            <header className={props.classes.header}>
                <h1 className={props.classes.title}>
                    Site du Loup Garou
                </h1>
            </header>
        </MuiThemeProvider>
        )
}

const styles = {
  header : {
    backgroundColor: "#260e04",
    color : 'white',
  },
  
  title: {
    margin:'0px',
    padding: '50px',
    textAlign : 'center',
  }
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

export default withStyles(styles)(Header);