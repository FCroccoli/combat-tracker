import { createContext, useState } from "react";
import { iFighter } from "../interfaces";

export interface iModalContextProps {
  children: React.ReactNode;
}

export interface iCombatContext {
  fightersList: Array<iFighter>;
  setFightersList: (fightersList: Array<iFighter>) => void;
}

export const CombatContext = createContext({} as iCombatContext);

export default function CombatProvider({ children }: iModalContextProps) {
  const [fightersList, setFightersList] = useState([
    { name: "John", ac: 19, maxHp: 17, initiative: 16, currentHp: 15 },
    { name: "Jack", ac: 16, maxHp: 20, initiative: 18, currentHp: 14 },
    { name: "Bill", ac: 14, maxHp: 18, initiative: 22, currentHp: 16 },
  ]);

  return (
    <CombatContext.Provider value={{ fightersList, setFightersList }}>
      {children}
    </CombatContext.Provider>
  );
}
