// TODO: İçeriği ayrı bir componente taşı
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
      marginTop: theme.spacing(3)
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
