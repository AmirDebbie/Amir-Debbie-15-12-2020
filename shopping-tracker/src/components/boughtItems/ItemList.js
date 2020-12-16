import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/actions";
import { capitalize, formatToIsraeliDate } from "../../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  ErrorDiv,
  ReceivedButton,
  Center,
  searchInputProps,
  searchInputLabelProps,
} from "../../styles";
import { Tooltip, TextField } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";

function ItemList() {
  const dispatch = useDispatch();
  const { shoppingList, currency, innerWidth, theme } = useSelector(
    (state) => state
  );
  const [filterInput, setFilterInput] = useState("");
  const [filteredList, setFilteredList] = useState(shoppingList);
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

  useEffect(() => {
    setFilteredList(shoppingList);
    setFilterInput("");
  }, [shoppingList]);

  const receiveItem = (id) => {
    const list = shoppingList.map((item) => {
      if (item.id === id) {
        item.received = true;
        item.receivedDate = Date.now();
      }
      return item;
    });
    dispatch(setList(list));
  };

  const getPrice = (priceInShekels) => {
    return currency.current === "ILS"
      ? priceInShekels
      : Math.round(priceInShekels / currency.dif);
  };
  return (
    <>
      <Center>
        <TextField
          variant="outlined"
          style={{ color: "blue" }}
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
          <TableHeader>
            {innerWidth > 768 && <LocalMallIcon />}
            <StyledSpan weight="bold">Product</StyledSpan>
            <StyledSpan weight="bold">Store</StyledSpan>
            <StyledSpan weight="bold">Price</StyledSpan>
            <StyledSpan center weight="bold">
              Expected Delivery Date
            </StyledSpan>
          </TableHeader>
        </li>
        {filteredList
          .filter((item) => !item.received)
          .sort((a, b) => a.deliveryDate - b.deliveryDate)
          .map((item, i) => (
            <li className="itemListItem" key={item.id}>
              <StyledDivForList>
                {innerWidth > 768 && <LocalMallIcon />}
                <StyledSpan weight="bold">{capitalize(item.name)}</StyledSpan>
                <StyledSpan>{capitalize(item.store)}</StyledSpan>
                <StyledSpan>
                  {getPrice(item.priceInShekels)}
                  {currency.current === "ILS" ? "₪" : "$"}
                </StyledSpan>
                <StyledSpan center>
                  {formatToIsraeliDate(item.deliveryDate)}
                </StyledSpan>
                <StyledSpan center>
                  <Tooltip title="Check item as received">
                    <ReceivedButton
                      id={`receiveButton${i}`}
                      onClick={() => receiveItem(item.id)}
                    >
                      ✓
                    </ReceivedButton>
                  </Tooltip>
                </StyledSpan>
              </StyledDivForList>
            </li>
          ))}
      </StyledUl>
    </>
  );
}

export default ItemList;
