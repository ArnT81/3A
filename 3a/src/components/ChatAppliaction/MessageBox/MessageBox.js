import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import styles from '../MessageBox/messageBox.module.css'

const MessageBox = ({ onSendMessage: pushSendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <TextField
      className={styles.messageBox}
      label="Start chat"
      multiline
      onChange={evt => setMessage(evt.target.value)}
      onKeyDown={evt => {
        if (evt.key === "Enter") {
          evt.preventDefault();
          pushSendMessage(message);
          setMessage("");
        }
      }}
      rows="16"
      value={message}
    />
  );
};

export default MessageBox;