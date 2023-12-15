import { StateCreator, create } from "zustand";

export interface ShoppingCartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

type State = {
  products: ShoppingCartItem[];
  customer_id?: string;
};

type Action = {
  onQuantityInc: (itemId: number) => void;
  onQuantityDec: (itemId: number) => void;
  onAddItem: (item: ShoppingCartItem) => void;
  onAddCustomerId: (customer_id?: string) => void;
  onRemoveItem: (itemId: number) => void;
  onRest: () => void;
};

type MyPersist = (
  config: StateCreator<State & Action>,
  options: PersistOptions<State & Action>
) => StateCreator<State & Action>;

// export default useShoppingCartStore;
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";
const useShoppingCartStore = create<State & Action>(
  (persist as MyPersist)(
    (set, get) => ({
      // initial store data
      products: [],
      customer_id: "",

      // add new item
      onAddItem: (item: ShoppingCartItem) =>
        set((state) => ({
          products: [...state.products, item],
        })),

      onAddCustomerId: (customer_id?: string) =>
        set(() => ({
          customer_id,
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
    }),
    {
      name: "flavourWave_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useShoppingCartStore;
