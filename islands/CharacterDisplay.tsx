import { currentCharacter } from "../states/archmage.state.ts";

export default function CharacterDisplay() {
  return (
    <>
      <p>{currentCharacter.value.name}</p>
      <p>{currentCharacter.value.className}</p>
      <p>{currentCharacter.value.level}</p>
    </>
  );
}
