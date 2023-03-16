import create from "zustand";
import { AppTheme } from "~/utils/themeStore";

export const useTheme = create<{
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
}>((set) => ({
  appTheme: "forest",
  setAppTheme: (theme) => {
    return set({ appTheme: theme });
  },
}));
