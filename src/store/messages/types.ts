import { Message } from "src/types";
import { ADD_CHAT, ADD_MESSAGE } from "./actions";

export type MessageActions = AddChat | AddMessage;

export interface AddChat {
  type: typeof ADD_CHAT;
  chatName: string;
}

export interface AddMessage {
  type: typeof ADD_MESSAGE;
  chatName: string;
  newMessage: Message;
}
