import { useContext } from "react";
import { LocationContext, type LocationContextType } from "./location-context";


export const useLocation = (): LocationContextType => {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used inside LocationProvider");
  }
  return ctx;
};
