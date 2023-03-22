import create from "zustand";

interface IBook {
  amount: number;
  author: string;
}

export const useBookStore = create<IBook>((set) => ({
  amount: 40,
  author: "vind",
  updateAmount: (newAmount: number) =>
    set((state) => ({
      ...state,
      amount: newAmount,
    })),
}));
