import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import ButtonMUI from '../components/Button';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

// import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
// import indigo from '@material-ui/core/colors/indigo';
// import purple from '@material-ui/core/colors/purple';
// import red from '@material-ui/core/colors/red';

const Start = (props) => {
  const { user } = useSession();
  return (
    // <MuiThemeProvider  theme = { theme }>
    <div className={props.classes.affichage}>

      <Link to="/create" onClick={() => createGame(user)}>
        <ButtonMUI color="primary" title="Nouvelle partie"/>
      </Link>
      <Link to="/join">
        <ButtonMUI color="secondary" title="Rejoindre une partie"/>
      </Link>
    </div>
    // </MuiThemeProvider>
  );
}


const styles = {
  affichage : {
    margin: '20px',
    textAlign : 'center',
  }
}

// const Button1 = styled.button`
//   color : white;
  
//   ${props => `
//       background-color : ${props.disabled ? 'red': 'blue'};
//   `};
// `


// const Liens = styled.a`
//     color : blue;
//     font-size : 25px;
//     text-decoration : underline;
// `

// const styles = {
//   myLeftButton : {
//     backgroundColor: "blue",
//     color : 'white',
//     "&:hover":{backgroundColor: "indigo"}
//   }
// }

// const theme = createMuiTheme({
//   palette: {
//     primary: red,
//     secondary: indigo,
//   },
// });

export default withStyles(styles)(Start);


