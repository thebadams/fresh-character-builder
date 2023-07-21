import { Dispatch } from "preact/hooks";
import { ArchmageContext } from "../contexts/archmageContext.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";
import { currentCharacter, name } from "../states/archmage.state.ts";
import { Signal } from "@preact/signals";

interface IInputProps {
  name: string;
}

enum Value {
  name = "name",
  className = "className",
  level = "level",
}
export default function Input(props: IInputProps) {
  let value: Signal<string | number> | "Default";
  let type: "text" | "number";
  switch (props.name) {
    case Value.name:
      value = currentCharacter.value.name;
      type = "text";
      break;
    case Value.className:
      value = currentCharacter.value.className;
      type = "text";
      break;

    case Value.level:
      value = currentCharacter.value.level;
      type = "number";
      break;
    default:
      value = "Default";
      type = "text";
      break;
  }
  return (
    <>
      <input
        type={type}
        name={props.name}
        id={props.name}
        value={value}
        onInput={(e) => {
          if (value === "Default") {
            return;
          }
          value.value = e.currentTarget.value;
        }}
      />
    </>
  );
}
