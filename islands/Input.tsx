import { Dispatch } from "preact/hooks";
import { ArchmageContext } from "../contexts/archmageContext.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";
import { currentCharacter, name } from "../states/archmage.state.ts";
import { Signal } from "@preact/signals";
import { PageProps } from "$fresh/server.ts";

interface IInputProps {
  name: string;
}

export enum Value {
  name = "name",
  className = "className",
  level = "level",
  description = "description",
  strength = "strength",
  dexterity = "dexterity",
  constitution = "constitution",
  intelligence = "intelligence",
  wisdom = "wisdom",
  charisma = "charisma",
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
    case Value.description:
      value = currentCharacter.value.description;
      type = "text";
      break;
    case Value.strength:
      value = currentCharacter.value.abilities.value.strength;
      type = "number";
      break;
    case Value.dexterity:
      value = currentCharacter.value.abilities.value.dexterity;
      type = "number";
      break;
    case Value.constitution:
      value = currentCharacter.value.abilities.value.constitution;
      type = "number";
      break;
    case Value.intelligence:
      value = currentCharacter.value.abilities.value.intelligence;
      type = "number";
      break;
    case Value.wisdom:
      value = currentCharacter.value.abilities.value.wisdom;
      type = "number";
      break;
    case Value.charisma:
      value = currentCharacter.value.abilities.value.charisma;
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
            console.log(
              "Value is Default. Erroneous Implementation In Input.tsx",
            );
            return;
          }
          value.value = e.currentTarget.value;
        }}
      />
    </>
  );
}
