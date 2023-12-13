import { create } from "zustand";

type State = {
  address: {
    distance: string;
    userLocation: string;
  };
};

type Action = {
  onAddedLocation: ({
    distance,
    userLocation,
  }: {
    distance: string;
    userLocation: string;
  }) => void;
  onRest: () => void;
};

const useAddressUserStore = create<State & Action>((set) => ({
  address: {
    distance: "",
    userLocation: "",
  },
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
        ...state.address, // Keep the initial structure
        distance: "", // Reset distance to an empty string
        userLocation: "", // Reset userLocation to an empty string
      },
    })),
}));

export default useAddressUserStore;
