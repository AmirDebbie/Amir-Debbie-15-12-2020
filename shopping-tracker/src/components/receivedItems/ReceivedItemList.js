import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { capitalize, formatToIsraeliDate } from "../../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  ErrorDiv,
  Center,
  searchInputProps,
  searchInputLabelProps,
  TableFooter,
} from "../../styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";
import TextField from "@material-ui/core/TextField";

function ReceivedItemList() {
  const { shoppingList, currency, innerWidth, theme } = useSelector(
    (state) => state
  );
  const [filterInput, setFilterInput] = useState("");
  const [filteredList, setFilteredList] = useState(
    shoppingList.filter((item) => item.received)
  );

  const handleFilter = (e) => {
    const input = e.target.value;
    setFilterInput(input);

    const foundItems = [];
    for (let item of shoppingList) {
      let found = false;
      const arrOfItemsValues = [item.name, item.store];
      for (let value of arrOfItemsValues) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(input.toLowerCase())
        ) {
          found = true;
        }
      }
      if (found) {
        foundItems.push(item);
      }
    }
    setFilteredList(foundItems);
  };

  const getPrice = (priceInShekels) => {
    return currency.current === "ILS"
      ? priceInShekels
      : Math.round(priceInShekels / currency.dif);
  };

  const filteredListPriceSum = useMemo(() => {
    return filteredList.reduce((acc, item) => acc + item.priceInShekels, 0);
  }, [filteredList]);

  return (
    <>
      <Center>
        <TextField
          id="searchBar"
          variant="outlined"
          value={filterInput}
          label="Search"
          onChange={handleFilter}
          InputLabelProps={{
            style: searchInputLabelProps[theme],
          }}
          InputProps={{
            style: searchInputProps[theme],
          }}
        />
      </Center>
      {currency.error.length > 0 && (
        <>
          <br />
          <ErrorDiv>
            <ErrorOutlinedIcon style={{ width: "23px", height: "23px" }} />
            &nbsp;
            {currency.error}
          </ErrorDiv>
        </>
      )}
      <br />
      <StyledUl>
        <li>
          <TableHeader
            repeatFormula={
              innerWidth > 550
                ? "0.5fr 1.5fr 1fr 1fr 1.5fr"
                : "1.5fr 1fr 1fr 1.5fr"
            }
          >
            {innerWidth > 550 && <LocalMallIcon />}
            <StyledSpan weight="bold">Product</StyledSpan>
            <StyledSpan weight="bold">Store</StyledSpan>
            <StyledSpan weight="bold">Price</StyledSpan>
            <StyledSpan center weight="bold">
              Received Date
            </StyledSpan>
          </TableHeader>
        </li>
        {filteredList

          .sort((a, b) => a.receivedDate - b.receivedDate)
          .map((item) => (
            <li className="receivedListItem" key={item.id}>
              <StyledDivForList
                repeatFormula={
                  innerWidth > 550
                    ? "0.5fr 1.5fr 1fr 1fr 1.5fr"
                    : "1.5fr 1fr 1fr 1.5fr"
                }
              >
                {innerWidth > 550 && <LocalMallIcon />}
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
        <li>
          <TableFooter repeatFormula="0.5fr 3fr 3fr">
            {innerWidth > 768 && <LocalMallIcon />}
            <StyledSpan weight="bold">
              Amount of Products: {filteredList.length}
            </StyledSpan>
            <StyledSpan weight="bold">
              Sum of Prices: {getPrice(filteredListPriceSum)}
              {currency.current === "ILS" ? "₪" : "$"}
            </StyledSpan>
          </TableFooter>
        </li>
      </StyledUl>
    </>
  );
}

export default ReceivedItemList;
