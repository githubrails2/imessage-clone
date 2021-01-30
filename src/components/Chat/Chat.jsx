import React from "react";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          TO: <span className="chat__name">ChannelName</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">WE are the messages</div>
      <div className="chat__input">
        <form>
          <input type="text" placeholder="Enter a Message" />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
