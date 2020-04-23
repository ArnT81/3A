//this is component that handle the view of the message after entering (Enter button)
//and this will send message you type in
import React, { useState } from "react";
import styles from '../MessageBox/messageBox.module.css'
const MessageBox = ({ onSendMessage: pushSendMessage, }) => {
  const [message, setMessage] = useState("");

  return (
    <input
      placeholder="Start writing..."
      className={styles.messageBox}
      onChange={evt => setMessage(evt.target.value)}
      onKeyDown={evt => {
        if (evt.key === "Enter") {
          evt.preventDefault();
          pushSendMessage(message);
          setMessage('');
        }
      }}
      value={message}
    />
  );
};

export default MessageBox;