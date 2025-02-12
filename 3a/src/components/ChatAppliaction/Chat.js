import React from "react";
import useChat from "./_useChat";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

/** 
 * the messages logic is implemented here in this component and it will render it here
*/

const Chat = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div>
      <Messages messages={messages} />
      <MessageBox
        onSendMessage={message => {
          sendMessage({ message });
        }}
      />
    </div>
  );
};

export default Chat;
