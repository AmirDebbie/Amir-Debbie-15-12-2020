import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../redux/actions";
import { capitalize, formatToIsraeliDate } from "../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  ListWrapper,
} from "../styles/styledComponents";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";

function StoreList() {
  const { shoppingList, currency } = useSelector((state) => state);
  const stores = useMemo(() => {
    const storesArr = shoppingList.map((item) => item.store);
    const storedObj = {};
    storesArr.forEach((store) => {
      storedObj[store] = storedObj[store] ? storedObj[store] + 1 : 1;
    });
    return storedObj;
  }, [shoppingList]);
  return (
    <>
      <br />
      <ListWrapper>
        <StyledUl>
          <li>
            <TableHeader repeatFormula="1fr 3fr 2fr">
              <ShoppingCartIcon />
              <StyledSpan weight="bold">Store</StyledSpan>
              <StyledSpan center weight="bold">
                Product Amount
              </StyledSpan>
            </TableHeader>
          </li>
          {Object.keys(stores).map((store) => (
            <li key={store}>
              <StyledDivForList repeatFormula="1fr 3fr 2fr">
                <ShoppingCartIcon />
                <StyledSpan weight="bold">{capitalize(store)}</StyledSpan>
                <StyledSpan center>{stores[store]}</StyledSpan>
              </StyledDivForList>
            </li>
          ))}
        </StyledUl>
      </ListWrapper>
    </>
  );
}

export default StoreList;
