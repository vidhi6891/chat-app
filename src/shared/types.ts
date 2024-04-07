import { Timestamp } from "firebase/firestore";

export interface MessageItem {
  id?: string;
  uid: string;
  name: string;
  text: string;
  photoURL: string;
  createdAt: Timestamp;
}

export interface MessageProps{
  messages: MessageItem[];
}

