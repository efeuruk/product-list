import React from 'react';
import { Header } from './components/Header';
import { MuiThemeProvider, createMuiTheme, createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import { Filter } from './components/Filter';
import { List } from './components/List';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#00796b"
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        flexWrap: "noWrap"
      },
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="xl">
        <Box className={classes.main}>
          <Filter />
          <List />
        </Box>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
