import { createContext } from "react";

export type AppContextValues = {
  highIntensity: number;
};

export const AppContext = createContext<AppContextValues>({
  highIntensity: 1,
});

export const AppProvider = AppContext.Provider;
