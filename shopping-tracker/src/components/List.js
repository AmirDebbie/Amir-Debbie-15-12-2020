import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../redux/actions";
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

import CheckIcon from "@material-ui/icons/Check";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { capitalize, formatToIsraeliDate } from "../helpers";

function List() {
  const dispatch = useDispatch();
  const { shoppingList } = useSelector((state) => state);

  const receiveItem = (id) => {
    const list = shoppingList.map((item) => {
      if (item.id === id) {
        item.received = true;
      }
      return item;
    });
    dispatch(setList(list));
  };

  return (
    <Wrapper>
      <Center>
        <TitleWrapper>
          <H1>Shopping List</H1>
        </TitleWrapper>
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
            <li>
              <StyledDiv>
                <LocalMallIcon />
                <StyledSpan weight="bold">{capitalize(item.name)}</StyledSpan>
                <StyledSpan>{capitalize(item.store)}</StyledSpan>
                <StyledSpan>{item.priceInShekels}₪</StyledSpan>
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
