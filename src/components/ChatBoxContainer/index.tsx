import React, { useEffect, useRef, useState, FC } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../firebase";
import InputBox from "./InputBox";
import ChatBox from './ChatBox';
import { MessageItem } from '@shared/types';

const ChatBoxContainer: FC = () => {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      orderBy("createdAt")
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