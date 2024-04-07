import React, { FC } from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MessageProps } from '@shared/types';

const ChatBox: FC<MessageProps> = ({ messages }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="messages-wrapper">
      {messages?.map((message) => {
        return(
        <div className={`chat-bubble ${message.uid === user?.uid ? "right" : ""}`}>
          <img
            className="chat-bubble__left"
            src={message.photoURL}
            alt="User Photo"
          />
          <div className="chat-bubble__right">
            <p className="user-name">{message.name}</p>
            <p className="user-message">{message.text}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default ChatBox;