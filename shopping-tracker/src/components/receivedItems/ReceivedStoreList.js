import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { capitalize, getStoresObj, getPrice } from "../../helpers";
import {
  TableHeader,
  StyledUl,
  StyledSpan,
  StyledDivForList,
  ListWrapper,
} from "../../styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StoreList = () => {
  const { shoppingList, currency } = useSelector((state) => state);

  const stores = useMemo(() => {
    return getStoresObj(shoppingList, true);
  }, [shoppingList]);

  return (
    <>
      <br />
      <ListWrapper>
        <StyledUl>
          <li>
            <TableHeader repeatFormula="1fr 2fr 2fr 2fr">
              <ShoppingCartIcon />
              <StyledSpan weight="bold">Store</StyledSpan>
              <StyledSpan center weight="bold">
                Product Amount
              </StyledSpan>
              <StyledSpan center weight="bold">
                Total Price
              </StyledSpan>
            </TableHeader>
          </li>
          {Object.keys(stores).map((store) => (
            <li id={store.split(" ").join("")} key={store}>
              <StyledDivForList repeatFormula="1fr 2fr 2fr 2fr">
                <ShoppingCartIcon />
                <StyledSpan
                  id={`${store.split(" ").join("")}Name`}
                  weight="bold"
                >
                  {capitalize(store)}
                </StyledSpan>
                <StyledSpan id={`${store.split(" ").join("")}Amount`} center>
                  {stores[store].amount}
                </StyledSpan>
                <StyledSpan id={`${store.split(" ").join("")}Price`} center>
                  {currency.current === "ILS" ? "₪" : "$"}
                  {getPrice(stores[store].price, currency)}
                </StyledSpan>
              </StyledDivForList>
            </li>
          ))}
        </StyledUl>
      </ListWrapper>
    </>
  );
};

export default StoreList;
