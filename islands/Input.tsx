import { Dispatch } from "preact/hooks";
import { ArchmageContext } from "../contexts/archmageContext.tsx";
import IArchmageCharacter from "../types/IArchmageCharacter.ts";

interface IInputProps {
  name: string;
  currentCharacter: IArchmageCharacter;
}

export default function Input(props: IInputProps) {
  return (
    <>
      <ArchmageContext.Consumer>
        {([currentCharacter, dispatch]) => {
          return (
            <input
              value={currentCharacter.name}
              type="text"
              name={props.name}
              id={props.name}
              onChange={(e) =>
                dispatch
                  ? ({ type: "CHANGE_NAME", value: e.currentTarget.value })
                  : null}
            />
          );
        }}
      </ArchmageContext.Consumer>
    </>
  );
}
