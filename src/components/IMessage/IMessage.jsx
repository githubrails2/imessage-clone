import React from "react";
import "./IMessage.css";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
const IMessage = () => {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default IMessage;
