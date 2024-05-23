import { create } from "zustand";

interface RadioButtonState {
  selectedSet: string | null;
  setSelectedSet: (set: string) => void;
}

const useRadioButtonStore = create<RadioButtonState>((set) => ({
  selectedSet: null,
  setSelectedSet: (value: string) => {
    // TODO: Delete console log
    // console.log(`Selected set: ${value}`);
    set({ selectedSet: value });
  },
}));

export default useRadioButtonStore;
