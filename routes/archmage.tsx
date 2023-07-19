import { useReducer } from "preact/hooks";
import Input from "../islands/Input.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";
import {
  ArchmageContext,
  currentCharacter as CharacterState,
  defaultCharacter,
} from "../contexts/archmageContext.tsx";

const [character, setCharacter] = CharacterState;
export default function ArchmagePage() {
  //const [currentCharacter, dispatch] = reducerValues;
  return (
    <>
      <ArchmageContext.Provider value={[character, setCharacter]}>
        <p>NAME: {character.name}</p>
        <p>CLASS: {character.class}</p>
        <p>LEVEL: {character.level}</p>
        <p>ABILITIES</p>
        <ul>
          <li>STRENGTH: {character.abilities.strength}</li>
          <li>DEXTERITY: {character.abilities.dexterity}</li>
          <li>CONSTITUTION: {character.abilities.constitution}</li>
          <li>INTELLIGENCE: {character.abilities.intelligence}</li>
          <li>WISDOM: {character.abilities.wisdom}</li>
          <li>CHARISMA: {character.abilities.charisma}</li>
        </ul>
        <p>DESCRIPTION: {character.description}</p>
        <p>PLAYER NAME: {character.playerName}</p>

        <div>
          {/* <Input character={character} name="name" /> */}
        </div>
      </ArchmageContext.Provider>
    </>
  );
}
