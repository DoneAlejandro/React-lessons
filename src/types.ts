export interface Message {
  author: string;
  message: string;
}

export interface Chat {
  id: string | number;
  name: string;
}

export type Messages = Message[];
export type Chats = Chat[];
