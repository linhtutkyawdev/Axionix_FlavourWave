import { create } from "zustand";

export interface ShoppingCartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

type State = {
  products: ShoppingCartItem[];
};

type Action = {
  onQuantityInc: (itemId: number) => void;
  onQuantityDec: (itemId: number) => void;
  onAddItem: (item: ShoppingCartItem) => void;
  onRemoveItem: (itemId: number) => void;
  onRest: () => void;
};

const useShoppingCartStore = create<State & Action>((set) => ({
  // initial store data
  products: [],

  // add new item
  onAddItem: (item: ShoppingCartItem) =>
    set((state) => ({
      products: [...state.products, item],
    })),

  // remove item
  onRemoveItem: (itemId: number) =>
    set((state) => ({
      products: state.products.filter((item) => item.id !== itemId),
    })),

  // decrement quantity of product and remove item if quantity becomes 0
  onQuantityDec: (itemId: number) =>
    set((state) => ({
      products: state.products
        .map((item) =>
          item.id === itemId
            ? item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : { ...item, quantity: 0 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  // decrement quantity of product
  onQuantityInc: (itemId: number) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // reset products
  onRest: () => set(() => ({ products: [] })),
}));

export default useShoppingCartStore;
