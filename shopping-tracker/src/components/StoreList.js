import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../redux/actions";
import { capitalize, formatToIsraeliDate } from "../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDiv,
  ErrorDiv,
} from "../styles/styledComponents";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";

function StoreList() {
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
          <TableHeader>
            <ShoppingCartIcon />
            <StyledSpan weight="bold">Store</StyledSpan>
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
    </>
  );
}

export default StoreList;
