import { ShoppingCartItem } from "@/hook/use-shopping-cart-store";

// Function to store data in session storage
export function storeData(key: string, data: Array<any>) {
  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  localStorage.setItem(key, jsonData);
}

// Function to retrieve data from session storage
export function getData(key: string): ShoppingCartItem[] | null {
  const jsonData = localStorage.getItem(key);
  return jsonData ? JSON.parse(jsonData) : null;
}

// Function to update data in session storage
export function updateData(key: string, newData: Record<string, any>) {
  const existingData = getData(key);
  if (existingData) {
    const updatedData = [...existingData, newData];
    storeData(key, updatedData);
    return updatedData;
  }
  return null;
}

// Function to update the quantity of a specific item in local storage
export function updateQuantityInLocalStorage(
  key: string,
  itemId: number,
  newQuantity: number
) {
  const cartItems = getData(key);
  if (cartItems) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    storeData(key, updatedCartItems);
    return updatedCartItems;
  }
  return null;
}

// Function to delete data from session storage
export function deleteData(key: string) {
  localStorage.removeItem(key);
}
