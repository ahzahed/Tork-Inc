import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Test from "./Test";
import Error from "./Error";
import Live from "./Live";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Test />
        </Route>
        <Route path="/live" exact>
          <Live />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
