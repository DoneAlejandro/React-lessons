import { Message } from "src/types";
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT, DELETE_MESSAGE } from "./actions";

export type MessageActions = AddChat | AddMessage | DeleteChat | DeleteMessage;

export interface AddChat {
  type: typeof ADD_CHAT;
  chatName: string;
}

export interface AddMessage {
  type: typeof ADD_MESSAGE;
  chatName: string;
  newMessage: Message;
}

export interface DeleteChat {
  type: typeof DELETE_CHAT;
  chatName: string;
}

export interface DeleteMessage {
  type: typeof DELETE_MESSAGE;
  chatName: string;
  newMessage: Message;
}
