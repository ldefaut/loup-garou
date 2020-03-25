import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import indigo from '@material-ui/core/colors/indigo';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const Start = (props) => {
  const { user } = useSession();
  return (
    <MuiThemeProvider  theme = { theme }>
    <div>
      <h1> C'est un site</h1>
      <Link to="/create" onClick={() => createGame(user)}> <Liens>Nouvelle partie</Liens>
      </Link>
      <Button1 disabled={true}>impossible</Button1>
      <Button1>possible</Button1>
      <br />
      <Link to="/join">
        Rejoindre une partie
      </Link>
    </div>
    </MuiThemeProvider>
  );
}

const Button1 = styled.button`
  color : white;
  
  ${props => `
      background-color : ${props.disabled ? 'red': 'green'};
      cursor : ${props.disabled ? 'not-allowed' : 'pointer'};
  `};
`


const Liens = styled.a`
    color : blue;
    font-size : 25px;
    text-decoration : underline;
`

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

export default  withStyles(styles)(Start);
