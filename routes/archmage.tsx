import { useState } from "preact/hooks";

export default function ArchmagePage() {
  const [currentCharacter, _setCurrentCharacter] = useState(
    {
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
    },
  );
  return (
    <>
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
    </>
  );
}
