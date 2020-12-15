import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import List from "./components/List";
import Received from "./components/Received";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/list">
          <List />
        </Route>
        <Route exact path="/received">
          <Received />
        </Route>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
