import { abilityMods, currentCharacter } from "../states/archmage.state.ts";

export default function CharacterDisplay() {
  return (
    <>
      <p>{currentCharacter.value.name}</p>
      <p>{currentCharacter.value.className}</p>
      <p>{currentCharacter.value.level}</p>
      <p>{currentCharacter.value.description}</p>
      <p>
        {currentCharacter.value.abilities.value.strength} -{" "}
        {abilityMods.value.strength}
      </p>
      <p>
        {currentCharacter.value.abilities.value.dexterity} -{" "}
        {abilityMods.value.dexterity}
      </p>
      <p>
        {currentCharacter.value.abilities.value.constitution} -{" "}
        {abilityMods.value.constitution}
      </p>
      <p>
        {currentCharacter.value.abilities.value.intelligence} -{" "}
        {abilityMods.value.intelligence}
      </p>
      <p>
        {currentCharacter.value.abilities.value.wisdom} -{" "}
        {abilityMods.value.wisdom}
      </p>
      <p>
        {currentCharacter.value.abilities.value.charisma} -{" "}
        {abilityMods.value.charisma}
      </p>
    </>
  );
}
