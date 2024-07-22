import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

console.log("Welcome to Shopee Cart");

const MyCart = [];
const MyWhishList = [];

const item1 = await createItem("HotWheels Ferrari", 27.99, 2);
const item2 = await createItem("HotWheels Lamborgini", 29.99, 4);
const item3 = await createItem("HotWheels Mercedes", 26.99, 2);

await cartService.addItem(MyCart, item1);
await cartService.addItem(MyCart, item2);
await cartService.addItem(MyCart, item3);
await cartService.deleteItem(MyCart, item2.name);
await cartService.removeItem(MyCart, item1);

await cartService.displayCart(MyCart);

await cartService.calculateTotal(MyCart);
