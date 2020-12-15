import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setList,
  toggleCurrency,
  requestCurrencySuccess,
  requestCurrencyFailure,
} from "../redux/actions";
import { capitalize, formatToIsraeliDate } from "../helpers";
import axios from "axios";
import {
  Wrapper,
  TitleWrapper,
  H1,
  Center,
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDiv,
} from "../styles/styledComponents";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function List() {
  const dispatch = useDispatch();
  const { shoppingList, currency } = useSelector((state) => state);

  const receiveItem = (id) => {
    const list = shoppingList.map((item) => {
      if (item.id === id) {
        item.received = true;
      }
      return item;
    });
    dispatch(setList(list));
  };

  const fetchCurrency = async () => {
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
  };

  useEffect(() => {
    const currencyInterval = setInterval(fetchCurrency, 10 * 1000);

    return () => clearInterval(currencyInterval);
  }, []);

  const getPrice = (priceInShekels) => {
    return currency.current === "ILS"
      ? priceInShekels
      : Math.round(priceInShekels / currency.dif);
  };

  return (
    <Wrapper>
      <Center>
        <TitleWrapper>
          <H1>Shopping List</H1>
        </TitleWrapper>
        <Button variant="contained" onClick={() => dispatch(toggleCurrency())}>
          {currency.current}
        </Button>
      </Center>
      <StyledUl>
        <li>
          <TableHeader>
            <ShoppingCartIcon />
            <StyledSpan weight="bold">Product</StyledSpan>
            <StyledSpan weight="bold">Store</StyledSpan>
            <StyledSpan weight="bold">Price</StyledSpan>
            <StyledSpan weight="bold">Expected Delivery Date</StyledSpan>
          </TableHeader>
        </li>
        {shoppingList
          .filter((item) => !item.received)
          .map((item) => (
            <li key={item.id}>
              <StyledDiv>
                <LocalMallIcon />
                <StyledSpan weight="bold">{capitalize(item.name)}</StyledSpan>
                <StyledSpan>{capitalize(item.store)}</StyledSpan>
                <StyledSpan>
                  {getPrice(item.priceInShekels)}
                  {currency.current === "ILS" ? "₪" : "$"}
                </StyledSpan>
                <StyledSpan>
                  {formatToIsraeliDate(item.deliveryDate)}
                </StyledSpan>
                <StyledSpan>
                  <Tooltip title="Check item as received">
                    <IconButton
                      style={{
                        height: 35,
                        width: 35,
                        backgroundColor: "rgba(0,140,0, 0.5)",
                        color: "white",
                      }}
                      onClick={() => receiveItem(item.id)}
                    >
                      <CheckIcon />
                    </IconButton>
                  </Tooltip>
                </StyledSpan>
              </StyledDiv>
            </li>
          ))}
      </StyledUl>
    </Wrapper>
  );
}

export default List;
