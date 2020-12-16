import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCurrency } from "../../redux/actions";
import {
  Wrapper,
  TitleWrapper,
  H1,
  Center,
  StyledCurrencyButton,
} from "../../styles/styledComponents";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ReceivedItemList from "./ReceivedItemList";
import ReceivedStoreList from "./ReceivedStoreList";

function Received() {
  const [tab, setTab] = useState("items");
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state);

  return (
    <Wrapper>
      <Center>
        <TitleWrapper>
          <H1>Received Items</H1>
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
      {tab === "items" && (
        <Tooltip arrow placement="top" title="Change Currency">
          <StyledCurrencyButton onClick={() => dispatch(toggleCurrency())}>
            {currency.current === "ILS" ? "₪" : "$"}
          </StyledCurrencyButton>
        </Tooltip>
      )}
      <br />
      {tab === "items" ? <ReceivedItemList /> : <ReceivedStoreList />}
    </Wrapper>
  );
}

export default Received;
