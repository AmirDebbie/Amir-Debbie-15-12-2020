import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCurrency,
  requestCurrencySuccess,
  requestCurrencyFailure,
} from "../redux/actions";
import axios from "axios";
import {
  Wrapper,
  TitleWrapper,
  H1,
  Center,
  StyledCurrencyButton,
} from "../styles/styledComponents";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ItemList from "./ItemList";
import StoreList from "./StoreList";

function List() {
  const [tab, setTab] = useState("items");
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state);

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
    <Wrapper>
      <Center>
        <TitleWrapper>
          <H1>Bought Items</H1>
        </TitleWrapper>
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color={tab === "items" ? "primary" : "default"}
          onClick={() => setTab("items")}
        >
          Item List
        </Button>
        <Button
          style={{ marginLeft: 5 }}
          color={tab === "stores" ? "primary" : "default"}
          variant="contained"
          onClick={() => setTab("stores")}
        >
          Store List
        </Button>
      </Center>
      {tab === "items" && (
        <Tooltip arrow placement="top" title="Change Currency">
          <StyledCurrencyButton onClick={() => dispatch(toggleCurrency())}>
            {currency.current === "ILS" ? "₪" : "$"}
          </StyledCurrencyButton>
        </Tooltip>
      )}
      <br />
      {tab === "items" ? <ItemList /> : <StoreList />}
    </Wrapper>
  );
}

export default List;
