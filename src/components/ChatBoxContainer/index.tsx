import React, { useEffect, useRef, useState, FC, useContext } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  where
} from "firebase/firestore";
import { db } from "../../firebase";
import InputBox from "./InputBox";
import ChatBox from './ChatBox';
import { MessageItem } from '@shared/types';
import { MeetingIdContext } from '../../shared/constants';

const ChatBoxContainer: FC = () => {
  const meetingContext = useContext(MeetingIdContext);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let q = query(
      collection(db, 'chats'), 
      where('meetingId', "==", meetingContext?.meetingId),
      orderBy('createdAt')
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: MessageItem[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id } as MessageItem);
      });

      setMessages(fetchedMessages);
      scrollBottomRef.current?.scrollIntoView({ block: 'end', behavior: "smooth" });
    });
     return () => {
      unsubscribe();
    };
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <ChatBox messages={messages} />
      </div>
      <span ref={scrollBottomRef}></span>
      <InputBox />
    </main>
  );
};

export default ChatBoxContainer;