// adicionar um item ao carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}
// deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index != -1) {
    userCart.splice(index, 1);
  }
}
// remover item do carrinho
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  if (indexFound == -1) {
    console.log("item nao encontrado");
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }
}

async function removeItemByIndex(userCart, index) {
  const deleteIndex = --index;
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}
// calcular total dos valores do carrinho
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log("Shopee Cart Resume\nTotal Value Cart - R$", result);
}

async function displayCart(userCart) {
  console.log("Shop CArt List");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1} - ${item.name}, R$${item.price}..${
        item.quantity
      }x | Subtotal - ${item.subtotal()}`
    );
  });
}

export { displayCart, addItem, deleteItem, removeItem, calculateTotal };
