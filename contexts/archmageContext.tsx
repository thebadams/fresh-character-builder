import { Dispatch, useContext, useReducer } from "preact/hooks";
import { ActionType, ArchmageReducer } from "../utils/ArchmageReducer.ts";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";
import { ComponentChildren, createContext } from "preact";

export const defaultCharacter: IArchmageCharacter = {
  name: "Valar the Oathsmith",
  class: "Paladin",
  level: 1,
  description:
    `A Tall Dwarf, with a long beard and hair of a dark brown color. Has emerald eyes that flash as he fights with his warhammer. Carries the symbol of the Zia, with many symbols denoting his devotion to Dusk`,
  abilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  playerName: "Brian Adams",
};

type ArchmageContextProps = {
  children: ComponentChildren;
};

export const ArchmageContext = createContext<
  [IArchmageCharacter, Dispatch<ActionType> | undefined]
>([defaultCharacter, undefined]);
export default function ProvideArchmageContext(props: ArchmageContextProps) {
  const [currentCharacter, dispatch] = useReducer(
    ArchmageReducer,
    defaultCharacter,
  );

  return (
    <ArchmageContext.Provider value={[currentCharacter, dispatch]} {...props} />
  );
}

export const useArchmageContext = () => {
  return useContext(ArchmageContext);
};
