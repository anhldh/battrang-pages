import { create } from "zustand";
import type { PageId } from "../data/nav";

type NavState = {
  page: PageId;
  setPage: (page: PageId) => void;
};

export const useNavStore = create<NavState>()((set) => ({
  page: "overview",
  setPage: (page) => set({ page }),
}));
