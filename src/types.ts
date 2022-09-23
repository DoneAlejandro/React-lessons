export interface Message {
  author: string;
  message: string;
  customers: AUTHOR;
}

export interface Chat {
  id: string;
  name: string;
}

export enum AUTHOR {
  USER = "USER",
  BOT = "BOT время отправки",
}

export type Messages = Record<string, Message[]>;
export type Chats = Chat[];
