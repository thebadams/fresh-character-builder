export default interface IArchmageCharacter {
  name: string;
  class: string;
  level: number;
  description: string;
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  playerName: string;
}
