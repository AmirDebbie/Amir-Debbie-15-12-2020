import { SET_LIST } from "../actionTypes";
import { v4 as uuidv4 } from "uuid";
const shoppingListMock = [
  {
    id: uuidv4(),
    name: "iPhone 11",
    store: "Apple Store",
    priceInUSD: 4000,
    deliveryDate: Date.now() + 4000000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Oneplus 8T",
    store: "ebay",
    priceInUSD: 2000,
    deliveryDate: Date.now() + 100000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Nintendo Switch",
    store: "Amazon",
    priceInUSD: 800,
    deliveryDate: Date.now() + 200000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Headphones",
    store: "Amazon",
    priceInUSD: 750,
    deliveryDate: Date.now() + 300000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy Note 10",
    store: "Amazon",
    priceInUSD: 2500,
    deliveryDate: Date.now() + 400000000,
    received: false,
    receivedDate: null,
  },
];

const shoppingListState = shoppingListMock;

export default function shoppingListReducer(state = shoppingListState, action) {
  switch (action.type) {
    case SET_LIST:
      return action.payload;
    default:
      return state;
  }
}
