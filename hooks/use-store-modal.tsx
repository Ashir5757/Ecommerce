import { create } from "zustand";

interface userStoreModalStore {

    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;

};

export const useStoreModal = create<userStoreModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));