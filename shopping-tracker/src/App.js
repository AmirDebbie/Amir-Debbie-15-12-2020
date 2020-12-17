import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCurrencySuccess,
  requestCurrencyFailure,
} from "./redux/actions";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { setInnerWidth } from "./redux/actions";
import { BoughtItemsPage, ReceivedItemsPage } from "./pages";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { getTheme, GlobalStyle } from "./styles";
import ErrorBoundary from "./components/ErrorBoundary";
import { CURRENCY_API_URL, CURRENCY_INTERVAL_TIME } from "./helpers";
function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const fetchCurrency = useCallback(async () => {
    try {
      const result = await fetch(CURRENCY_API_URL);
      const {
        rates: { ILS: dif },
      } = await result.json();
      dispatch(requestCurrencySuccess(dif));
    } catch (error) {
      dispatch(requestCurrencyFailure("Currency may not be up to date"));
    }
  }, [dispatch]);

  const setInnerWidthEventListener = useCallback(() => {
    dispatch(setInnerWidth(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", setInnerWidthEventListener);

    fetchCurrency();
    const currencyInterval = setInterval(fetchCurrency, CURRENCY_INTERVAL_TIME);

    return () => {
      clearInterval(currencyInterval);
      window.removeEventListener("resize", setInnerWidthEventListener);
    };
  }, [fetchCurrency, dispatch, setInnerWidthEventListener]);

  return (
    <HashRouter>
      <ThemeProvider theme={() => getTheme(theme)}>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path="/list">
            <ErrorBoundary>
              <BoughtItemsPage />
            </ErrorBoundary>
          </Route>
          <Route exact path="/received">
            <ErrorBoundary>
              <ReceivedItemsPage />
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
