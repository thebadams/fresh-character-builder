import Input from "../islands/Input.tsx";
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
