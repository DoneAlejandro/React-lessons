import { Message } from "src/types";
import { AddChat, AddMessage } from "./types";
export const ADD_CHAT = "MESSAGES::ADD_CHAT";
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_CHAT = "MESSAGES::DELETE_CHAT";

export const addChat = (chatName: string): AddChat => ({
  type: ADD_CHAT,
  chatName,
});

export const AddMessage = (
  chatName: string,
  newMessage: Message
): AddMessage => ({
  type: ADD_MESSAGE,
  chatName,
  newMessage,
});
