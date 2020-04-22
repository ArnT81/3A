import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";
/**
 * 
 * and here you have the styling in the messages that you send 
 */

const Messages = ({ messages }) => {
  const store = useContext(ThemeContext);

  return (
    <List>
      {messages.flatMap((message, index) => [
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar
              alt="profile picture"
              src={store.profilePicture.get}
            />
          </ListItemAvatar>
          <ListItemText style={{ color: "white", fontSize: "200" }} primary={message} />
        </ListItem>,
        <Divider
          component="li"
          key={"divider-" + index}
          variant="inset"
        />
      ])}
    </List>
  );
};

export default Messages;
