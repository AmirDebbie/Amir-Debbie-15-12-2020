import { SET_LIST } from "../actionTypes";
import { uuid } from "uuidv4";

const shoppingListMock = [
  {
    id: uuid(),
    name: "iPhone 11",
    store: "Apple Store",
    priceInShekels: 4000,
    deliveryDate: Date.now() + 4000000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuid(),
    name: "Oneplus 8T",
    store: "ebay",
    priceInShekels: 2000,
    deliveryDate: Date.now() + 100000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuid(),
    name: "Nintendo Switch",
    store: "Amazon",
    priceInShekels: 800,
    deliveryDate: Date.now() + 200000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuid(),
    name: "Headphones",
    store: "Amazon",
    priceInShekels: 750,
    deliveryDate: Date.now() + 300000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuid(),
    name: "Samsung Galaxy Note 10",
    store: "Amazon",
    priceInShekels: 2500,
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
