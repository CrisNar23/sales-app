import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import { Storefront } from "@material-ui/icons";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import NewOrder from "./components/NewOrder/NewOrder";

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button component={Link} to={"/"} aria-label="home">
            <Storefront className={classes.icon} />
          </Button>
          <Typography variant="h6">Sales App</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Orders />
        </Route>
        <Route path="/newOrder">
          <NewOrder />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
