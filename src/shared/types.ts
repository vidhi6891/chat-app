import { Timestamp } from "firebase/firestore";

export interface MessageItem {
  id?: string;
  meetingId: string;
  uid: string;
  name: string;
  text: string;
  photoURL: string;
  createdAt: Timestamp;
}

export interface MessageProps{
  messages: MessageItem[];
}

export interface meetingContextType {
  meetingId: string | null;
  setMeetingId: Function;
  meetingType: string | null;
  setMeetingType: Function;
  meetingIdError: boolean;
  setMeetingIdError: Function;
}

