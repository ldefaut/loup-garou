import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const Footer = (props) => {
  console.log(props.color);
    return (
        <MuiThemeProvider theme = {theme}>
            <footer className={props.classes.footer}>
                <h1 className={props.classes.title}>
                    Footer du site
                </h1>
                <br/>
                <h3><a href="https://louisdefaut.fr/"  className={props.classes.subtitle}>Visitez mon site web ;)</a></h3>
            </footer>
        </MuiThemeProvider>
        )
}

const styles = {
  footer : {
    backgroundColor: "#260e04",
    color : 'white',
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    textAlign : 'center',
  },
  
  title: {
    margin:'0px',
    paddingTop: '10px',
    textAlign : 'center',
  },
  
  subtitle : {
    textDecoration :'none',
    textAlign : 'center',
    color : 'white',
    margin: '0px',
    "&:hover":{color: "#ff7961"}
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

export default withStyles(styles)(Footer);