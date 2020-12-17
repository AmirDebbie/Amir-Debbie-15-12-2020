import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/actions";
import { capitalize, formatToIsraeliDate } from "../../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  APIErrorDiv,
  ReceivedButton,
  Center,
  searchInputProps,
  searchInputLabelProps,
  TableFooter,
} from "../../styles";
import { Tooltip, TextField } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";
import Swal from "sweetalert2";

function ItemList() {
  const dispatch = useDispatch();
  const { shoppingList, currency, innerWidth, theme } = useSelector(
    (state) => state
  );
  const [filterInput, setFilterInput] = useState("");
  const [filteredList, setFilteredList] = useState(
    shoppingList.filter((item) => !item.received)
  );
  const handleFilter = (e) => {
    const input = e.target.value;
    setFilterInput(input);

    const foundItems = [];
    const boughtItems = shoppingList.filter((item) => !item.received);
    for (let item of boughtItems) {
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
    setFilteredList(shoppingList.filter((item) => !item.received));
    setFilterInput("");
  }, [shoppingList]);

  const receiveItem = (id) => {
    const selectedItem = shoppingList.find((item) => item.id === id);
    Swal.fire({
      title: `Set ${selectedItem.name} As Received?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        const list = shoppingList.map((item) => {
          if (item.id === id) {
            item.received = true;
            item.receivedDate = Date.now();
          }
          return item;
        });
        dispatch(setList(list));
      }
    });
  };

  const getPrice = (priceInUSD) => {
    return currency.current === "USD"
      ? priceInUSD
      : Math.round(priceInUSD * currency.dif);
  };

  const filteredListPriceSum = useMemo(() => {
    return filteredList.reduce((acc, item) => acc + item.priceInUSD, 0);
  }, [filteredList]);

  return (
    <>
      <Center>
        <TextField
          id="searchBar"
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
          <APIErrorDiv>
            <ErrorOutlinedIcon style={{ width: "23px", height: "23px" }} />
            &nbsp;
            {currency.error}
          </APIErrorDiv>
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
          .sort((a, b) => a.deliveryDate - b.deliveryDate)
          .map((item, i) => (
            <li className="itemListItem" key={item.id}>
              <StyledDivForList>
                {innerWidth > 768 && <LocalMallIcon />}
                <StyledSpan weight="bold">{capitalize(item.name)}</StyledSpan>
                <StyledSpan>{capitalize(item.store)}</StyledSpan>
                <StyledSpan>
                  {getPrice(item.priceInUSD)}
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

export default ItemList;
