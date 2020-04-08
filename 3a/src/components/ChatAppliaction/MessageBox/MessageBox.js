import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import Wrapper from '../../wrapper/Wrapper'

const MessageBox = ({ onSendMessage: pushSendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <Wrapper>
      <h3>Chat</h3>
    <TextField
      style={{ background: 'white' }}
      fullWidth
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
      rows="4"
      value={message}
    />
    </Wrapper>
  );
};

export default MessageBox;
