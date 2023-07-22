import Input, { Value } from "../islands/Input.tsx";
import CharacterDisplay from "../islands/CharacterDisplay.tsx";

export default function ArchmagePage() {
  // const [currentCharacter, dispatch] = useArchmageContext();
  return (
    <>
      <CharacterDisplay />
      <Input name={Value.name} />
      <Input name={Value.className} />
      <Input name={Value.level} />
      <Input name={Value.description} />
      <Input name={Value.strength} />
      <Input name={Value.dexterity} />
      <Input name={Value.constitution} />
      <Input name={Value.intelligence} />
      <Input name={Value.wisdom} />
      <Input name={Value.charisma} />
    </>
  );
}
