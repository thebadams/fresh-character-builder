import { reducer } from "../routes/archmage.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";

interface IInputProps {
  name: string;
  currentCharacter: IArchmageCharacter;
}

export default function Input(props: IInputProps) {
  return (
    <>
      <input
        value={props.currentCharacter.name}
        type="text"
        name={props.name}
        id={props.name}
      />
    </>
  );
}
