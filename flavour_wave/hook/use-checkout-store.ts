import { create } from "zustand";

type State = {
  driverNRC?: string;
  truckNumber?: string;
  dateToPickUp?: Date;
  truckCapacity?: string;
  address: {
    distance: string;
    userLocation: string;
  };
};

type Action = {
  onUpdateState: (newState: Partial<State>) => void;
  onAddedLocation: ({
    distance,
    userLocation,
  }: {
    distance: string;
    userLocation: string;
  }) => void;
  onRest: () => void;
};

const useCheckoutStore = create<State & Action>((set) => ({
  address: {
    distance: "",
    userLocation: "",
  },
  dateToPickUp: new Date(),
  driverNRC: "",
  truckCapacity: "",
  truckNumber: "",

  onUpdateState: (newState: Partial<State>) =>
    set((state) => ({ ...state, ...newState })),

  onAddedLocation: ({
    distance,
    userLocation,
  }: {
    distance: string;
    userLocation: string;
  }) =>
    set(() => ({
      address: {
        distance,
        userLocation,
      },
    })),
  onRest: () =>
    set((state) => ({
      address: {
        ...state.address,
        distance: "",
        userLocation: "",
      },
    })),
}));

export default useCheckoutStore;
