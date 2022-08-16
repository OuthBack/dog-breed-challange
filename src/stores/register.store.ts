import create from "zustand";

interface UseRegister {
  email: string;
  setEmail(state: string): void;
}

export const useRegister = create<UseRegister>((set) => ({
  email: "",
  setEmail: (newEmail: string) =>
    set((state) => ({ ...state, email: newEmail })),
}));
