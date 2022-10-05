import { nanoid } from "nanoid";
import { StoreOfState } from "src/store";

export const selectorMessage = (state: StoreOfState) => state.messages;
export const selectorChats = (state: StoreOfState) =>
  Object.keys(state.messages).map((chatName) => ({
    id: nanoid(),
    name: chatName,
  }));
