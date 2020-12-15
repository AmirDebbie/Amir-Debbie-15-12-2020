import React from "react";
import { useSelector } from "react-redux";
import { capitalize, formatToIsraeliDate } from "../../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  ErrorDiv,
} from "../../styles/styledComponents";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";

function ReceivedItemList() {
  const { shoppingList, currency } = useSelector((state) => state);

  const getPrice = (priceInShekels) => {
    return currency.current === "ILS"
      ? priceInShekels
      : Math.round(priceInShekels / currency.dif);
  };
  return (
    <>
      {currency.error.length > 0 && (
        <ErrorDiv>
          <ErrorOutlinedIcon style={{ width: "23px", height: "23px" }} />
          &nbsp;
          {currency.error}
        </ErrorDiv>
      )}
      <br />
      <StyledUl>
        <li>
          <TableHeader repeatFormula="0.5fr 1.5fr 1fr 1fr 1.5fr">
            <LocalMallIcon />
            <StyledSpan weight="bold">Product</StyledSpan>
            <StyledSpan weight="bold">Store</StyledSpan>
            <StyledSpan weight="bold">Price</StyledSpan>
            <StyledSpan center weight="bold">
              Received Date
            </StyledSpan>
          </TableHeader>
        </li>
        {shoppingList
          .filter((item) => item.received)
          .sort((a, b) => a.receivedDate - b.receivedDate)
          .map((item) => (
            <li key={item.id}>
              <StyledDivForList repeatFormula="0.5fr 1.5fr 1fr 1fr 1.5fr">
                <LocalMallIcon />
                <StyledSpan weight="bold">{capitalize(item.name)}</StyledSpan>
                <StyledSpan>{capitalize(item.store)}</StyledSpan>
                <StyledSpan>
                  {getPrice(item.priceInShekels)}
                  {currency.current === "ILS" ? "₪" : "$"}
                </StyledSpan>
                <StyledSpan center>
                  {formatToIsraeliDate(item.receivedDate)}
                </StyledSpan>
              </StyledDivForList>
            </li>
          ))}
      </StyledUl>
    </>
  );
}

export default ReceivedItemList;
