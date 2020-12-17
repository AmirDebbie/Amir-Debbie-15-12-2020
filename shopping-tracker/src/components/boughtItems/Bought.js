import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCurrency } from "../../redux/actions";
import {
  Wrapper,
  TitleWrapper,
  H1,
  Center,
  StyledCurrencyButton,
} from "../../styles";
import { Button, Tooltip } from "@material-ui/core";
import ItemList from "./ItemList";
import StoreList from "./StoreList";
import AddItem from "./AddItem";
import ErrorBoundary from "../ErrorBoundary";

function Bought() {
  const [tab, setTab] = useState("items");
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state);

  return (
    <Wrapper>
      <Center>
        <TitleWrapper>
          <H1>Bought Items</H1>
        </TitleWrapper>
        <br />
        <Button
          id="itemsButton"
          style={{ marginRight: 5 }}
          variant="contained"
          color={tab === "items" ? "primary" : "default"}
          onClick={() => setTab("items")}
        >
          Item List
        </Button>
        <Button
          id="storesButton"
          style={{ marginLeft: 5 }}
          color={tab === "stores" ? "primary" : "default"}
          variant="contained"
          onClick={() => setTab("stores")}
        >
          Store List
        </Button>
      </Center>
      <Tooltip arrow placement="top" title="Change Currency">
        <StyledCurrencyButton onClick={() => dispatch(toggleCurrency())}>
          {currency.current === "ILS" ? "₪" : "$"}
        </StyledCurrencyButton>
      </Tooltip>
      <br />
      <AddItem />
      {tab === "items" ? (
        <ErrorBoundary>
          <ItemList />
        </ErrorBoundary>
      ) : (
        <ErrorBoundary>
          <StoreList />
        </ErrorBoundary>
      )}
    </Wrapper>
  );
}

export default Bought;
