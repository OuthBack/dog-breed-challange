import create from "zustand";

type DogType = "chihuahua" | "husky" | "pug" | "labrador";

interface UseDogs {
  dogs: string[];
  setDogs(state: string[]): void;
  dogType: DogType;
  setDogType(state: string): void;
  selectedDogUrl: string;
  setSelectedDogUrl(state: string): void;
}

export const useDogs = create<UseDogs>((set) => ({
  dogs: [],
  setDogs: (newDogs: string[]) => set((state) => ({ ...state, dogs: newDogs })),
  dogType: "chihuahua",
  setDogType: (newDogType: DogType) =>
    set((state) => ({ ...state, dogType: newDogType })),
  selectedDogUrl: "",
  setSelectedDogUrl: (newSelectedDog: string) =>
    set((state) => ({ ...state, selectedDogUrl: newSelectedDog })),
}));
