import { useReducer } from "preact/hooks";
import Input from "../islands/Input.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";
import {
  ArchmageContext,
  defaultCharacter,
  useArchmageContext,
} from "../contexts/archmageContext.tsx";
import ProvideArchmageContext from "../contexts/archmageContext.tsx";
import CharacterDisplay from "../islands/CharacterDisplay.tsx";

export default function ArchmagePage() {
  // const [currentCharacter, dispatch] = useArchmageContext();
  return (
    <>
      <CharacterDisplay />
      <Input name="name" />
      <Input name="className" />
      <Input name="level" />
    </>
  );
}
