export interface Message {
  author: string;
  message: string;
  customers: AUTHOR;
}

export interface Chat {
  id: string | number;
  name: string;
}

export enum AUTHOR {
  USER = "USER",
  BOT = "BOT время отправки",
}

export type Messages = Message[];
export type Chats = Chat[];
