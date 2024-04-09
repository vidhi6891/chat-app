import React, { FC, useState, useContext } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { MeetingIdContext } from '../../shared/constants';

const InputBox: FC = () => {
  const meetingContext = useContext(MeetingIdContext);
  const [message, setMessage] = useState("");

  const user = auth.currentUser;
  const sendMessage = async (event: any) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    setMessage("");
    if(user) {
    const { uid, displayName, photoURL } = user;
      await addDoc(collection(db, "chats"), {
        "text": message,
        "name": displayName,
        "photoURL": photoURL,
        "createdAt": serverTimestamp(),
        "meetingId": meetingContext?.meetingId,
        uid,
      });
    }
  };
  
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type your message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default InputBox;