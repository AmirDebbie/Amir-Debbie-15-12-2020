import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCurrencySuccess,
  requestCurrencyFailure,
} from "./redux/actions";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { setInnerWidth } from "./redux/actions";
import Bought from "./components/boughtItems/Bought";
import Received from "./components/receivedItems/Received";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { getTheme, GlobalStyle } from "./styles";
import ErrorBoundary from "./components/ErrorBoundary";

const BASE_URL =
  "https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,ILS";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const fetchCurrency = useCallback(async () => {
    try {
      const result = await fetch(BASE_URL);
      const {
        rates: { ILS: dif },
      } = await result.json();
      dispatch(requestCurrencySuccess(dif));
    } catch (error) {
      dispatch(requestCurrencyFailure("Currency may not be up to date"));
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(setInnerWidth(window.innerWidth));
    });

    fetchCurrency();
    const currencyInterval = setInterval(fetchCurrency, 10 * 1000);

    return () => {
      clearInterval(currencyInterval);
    };
  }, [fetchCurrency, dispatch]);

  return (
    <HashRouter>
      <ThemeProvider theme={() => getTheme(theme)}>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path="/list">
            <ErrorBoundary>
              <Bought />
            </ErrorBoundary>
          </Route>
          <Route exact path="/received">
            <ErrorBoundary>
              <Received />
            </ErrorBoundary>
          </Route>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
