import { useReducer } from "preact/hooks";
import Input from "../islands/Input.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";
import {
  ArchmageContext,
  defaultCharacter,
  useArchmageContext,
} from "../contexts/archmageContext.tsx";
import ProvideArchmageContext from "../contexts/archmageContext.tsx";

export default function ArchmagePage() {
  const [currentCharacter, dispatch] = useArchmageContext();
  return (
    <>
      <ProvideArchmageContext>
        <p>NAME: {currentCharacter.name}</p>
        <p>CLASS: {currentCharacter.class}</p>
        <p>LEVEL: {currentCharacter.level}</p>
        <p>ABILITIES</p>
        <ul>
          <li>STRENGTH: {currentCharacter.abilities.strength}</li>
          <li>DEXTERITY: {currentCharacter.abilities.dexterity}</li>
          <li>CONSTITUTION: {currentCharacter.abilities.constitution}</li>
          <li>INTELLIGENCE: {currentCharacter.abilities.intelligence}</li>
          <li>WISDOM: {currentCharacter.abilities.wisdom}</li>
          <li>CHARISMA: {currentCharacter.abilities.charisma}</li>
        </ul>
        <p>DESCRIPTION: {currentCharacter.description}</p>
        <p>PLAYER NAME: {currentCharacter.playerName}</p>

        <div>
          <Input currentCharacter={currentCharacter} name="name" />
        </div>
      </ProvideArchmageContext>
    </>
  );
}
