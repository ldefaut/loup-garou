# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI : 
  Ce sont des composents react pour un développement web plus rapide et plus facile

- Comment importer `material-ui` dans un fichier ? 
  yarn add @material-ui/core

- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ? 
  En créant une capsule engoblobant toute l'application dans le theme provider

- A quoi sert `createMuiTheme` ? 
  Cela sert pour personnaliser les composants importés par Material UI

- A quoi correspond `palette` ? 
  C'est pour créer une palette de couleur, pour notre application

- Comment re-définir des propriétés ? 
  Avec l'attribut "overrides"

- A quoi vous fait penser `withStyle` ? 
  A un HOC. 

- Comment l'utiliser ? 
  On doit d'abord l'importer depuis material ui puis exporter l'application avec le withStyle. 

- Reproduire les deux boutons rouge et bleu présentées dans la vidéo. 
  ```javascript  
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
  ```

## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ? 
  Créer du CSS directement dans le JS

- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ? 
  Ils permettent de définir des règles d'interpolation de chaînes personnalisées pour pouvoir styliser nos composants

- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?
    
    sans tagged templates :
    `fn(['blablablabla'])`

    avec tagged templates :
    fn`blablablablabla`

- Comment utilise-t-on les props dans cette librarie ?   
```javascript
    ${props => `
        background-color : ${props.disabled ? 'red': 'blue'};
    `};
```
- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.
    ```javascript


    const Button = (props) => {
      const { user } = useSession();
      return (
        <MuiThemeProvider  theme = { theme }>
        <div>
          <Button1 disabled={true}>Bouton rouge</Button1>
          <Button1>Bouton bleu</Button1>
        </div>
        </MuiThemeProvider>
      );
    }
    
    const Button1 = styled.button`
      color : white;
      
      ${props => `
          background-color : ${props.disabled ? 'red': 'blue'};
      `};
    `
    
    ```

- Quelles sont les fonctions du contexte de styled-components ?
Le contexte de styled components permet la gestion de thèmes. Il permet aussi de combiner les compositions react classiques avec celles de Styled components

## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?
  
Bouton sous la forme d'une fonction : 
  ```javascript
  const Bouton = props => (
    <div>
      <button>Hello, {props.name}</button>
    </div>
  );
  ```
  Bouton sous la forme d'une classe :
  ```javascript
  class Bouton extends React.Component {
    renter {
      const { onClick, children } = this.props;
      return (<button onClick={onClick}> { children }</button>);
    }
  }
  ```

  Pour utiliser le state, au lieu d'utiliser setState on utilise les hooks:
  ```javascript
  const [val, setVal] = React.useState(false)
  ```
- Comment récupérer les props dans une fonction ?
  On spécifie les props en paramètre de la fonction pour y accéder.

- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
  - BrowserRouter: Il partage le routage pour les Routes.
  - UserProvider: Permet à l'application de retrouver les informations sur le joueur connecté
  - MasterGameProvider: Donne l'accès au Game Master pour qu'il sache les données du jeu et quele fonction utiliser.
  - GameProvider: appelle des fonctions sur des éléments du jeu.
  
- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
  - - Alivepage:  Affichage pour les joueurs vivant lorsque ce n'est pas à nous de jouer
  - CastPage: La page de vote pour les joueurs vivants
  - CodePage: La page pour rejoindre une partie
  - CreatePage: La page pour créer une partie
  - DeadPage: affichage pour une personne morte
  - EndPage: Affichage des gagnants à la fin de la partie
  - NightPage: Affichage pendant la periode de jeu "nuit"
  - ResultsPage: Les résultats du vote
  - SpellPage: La page spécifique au tour de jeu de la sorcière
  - StartPage: La page d'accueil

- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?
  Car le provider MasterGame est appelé continuellement, mais vu que la partie n'a pas commencée, le MasterGame est en chargement.

- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
  Il s'agit de la fonction `useGame()`

- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.o
  A chaque fois qu'on modifie une valeur, on stocke la nouvelle  valeur tapée dans le state. lorsqu'on submit on récupère cette valeur.

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
  il s'agit de l'objet Auth qui est fourni dans firebase. Ca  permet de garder en mémoire l'utilisateur connecté en générant un cookie. La fonction `useSession()` renvoie un context qui fournit l'objet utilisateur connecté à Firebase. Tout ca permet de ne pas avoir de backend pour le rafraichissement de la page, car tout est géré par FireBase.

- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
  La synchronisation a lieu dans `useUser`. On récupère identifie l'utilisateur, on vierifie si l'id est dans la base de donnée, s'il y est on le synchronise avec le firestore, sinon on lui crée un id.

- A votre avis, à quoi sert useEffect ?
  useEffect nous permet d’exprimer différentes sortes d’effets de bord après l’affichage d’un composant.

- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
  Cela permet d'arreter l'attente de la mise à jour de firebase. la fonction est appelée une fois que les actions du useEffect sont terminées.

- Décrire les trois valeurs de retour de `UseUser`.
  - `error` : permet de récuperer les informations dsur une erreur si elle apparait
  - `loading` : permet de savoir si l'information est en coursde chargement ou non.
  - `user` : les informations de l'utilisateur.

- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?
  - On peut identifier 2 collections : game et user
  - les `doc` correspondent aux données entrant dans la collection. Il y en a un par partie et 1 par utilisateur.


### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

