import { SET_LIST } from "../actionTypes";
import { v4 as uuidv4 } from "uuid";
const shoppingListMock = [
  {
    id: uuidv4(),
    name: "iPhone 11",
    store: "Apple Store",
    priceInShekels: 4000,
    deliveryDate: Date.now() + 4000000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Oneplus 8T",
    store: "ebay",
    priceInShekels: 2000,
    deliveryDate: Date.now() + 100000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Nintendo Switch",
    store: "Amazon",
    priceInShekels: 800,
    deliveryDate: Date.now() + 200000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
    name: "Headphones",
    store: "Amazon",
    priceInShekels: 750,
    deliveryDate: Date.now() + 300000000,
    received: false,
    receivedDate: null,
  },
  {
    id: uuidv4(),
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
