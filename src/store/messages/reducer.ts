import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT, DELETE_MESSAGE } from "./actions";
import { Reducer } from "redux";
import { AUTHOR, Messages } from "src/types";
import { MessageActions } from "./types";

const initialState: Messages = {
  first: [{ author: "Алексей", message: "Привет!", customers: AUTHOR.USER }],
  second: [{ author: "Петя", message: "Всем привет", customers: AUTHOR.USER }],
};

export const messageReducer: Reducer<Messages, MessageActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [...state[action.chatName], action.newMessage],
      };
    }
    case DELETE_CHAT: {
      const messages = { ...state };
      delete messages[action.chatName];
      return messages;
    }
    case DELETE_MESSAGE: {
      const stateMessage = { ...state };
      delete stateMessage[action.newMessage.message];
      return stateMessage;
    }
    default:
      return state;
  }
};
