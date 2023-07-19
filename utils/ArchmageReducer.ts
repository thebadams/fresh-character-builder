import IArchmageCharacter from "../types/IArchmageCharacter.ts";

export type ActionType = {
  type: "CHANGE_NAME";
  value: string;
};

export const ArchmageReducer = (
  state: IArchmageCharacter,
  action: ActionType,
) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.value,
      };
    default:
      return state;
  }
};
