import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCurrencySuccess,
  requestCurrencyFailure,
} from "./redux/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Bought from "./components/boughtItems/Bought";
import Received from "./components/receivedItems/Received";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();
  const fetchCurrency = useCallback(async () => {
    try {
      const {
        data: {
          rates: { ILS: dif },
        },
      } = await axios.get(
        "https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,ILS"
      );
      dispatch(requestCurrencySuccess(dif));
    } catch (error) {
      dispatch(requestCurrencyFailure("Currency may not be up to date"));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCurrency();
    const currencyInterval = setInterval(fetchCurrency, 10 * 1000);

    return () => clearInterval(currencyInterval);
  }, [fetchCurrency]);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/list">
          <Bought />
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
