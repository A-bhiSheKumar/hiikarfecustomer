import { createContext } from "react";

/* ================= TYPES ================= */
export type Location = {
  address: string;
  lat: number;
  lng: number;
};

export type LocationContextType = {
  location: Location | null;
  setLocation: (loc: Location) => void;
};

/* ================= CONTEXT ================= */
export const LocationContext =
  createContext<LocationContextType | null>(null);
