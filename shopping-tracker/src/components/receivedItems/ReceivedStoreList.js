import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { capitalize, getStoresObj } from "../../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  ListWrapper,
} from "../../styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StoreList = () => {
  const { shoppingList } = useSelector((state) => state);
  const stores = useMemo(() => {
    return getStoresObj(shoppingList, true);
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
            <li id={store.split(" ").join("")} key={store}>
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
};

export default StoreList;
