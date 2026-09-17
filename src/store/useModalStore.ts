import { create } from "zustand";

/** Modal dùng chung, tạm thời phục vụ hai loại nội dung. */
export type ModalContent =
  | { kind: "video"; title: string; src: string }
  | { kind: "iframe"; title: string; src: string };

type ModalState = {
  content: ModalContent | null;
  open: (content: ModalContent) => void;
  close: () => void;
};

export const useModalStore = create<ModalState>()((set) => ({
  content: null,
  open: (content) => set({ content }),
  close: () => set({ content: null }),
}));
