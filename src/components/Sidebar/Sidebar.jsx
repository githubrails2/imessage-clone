import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined, Search } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat/SidebarChat";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="" className="sidebar__avatar" />
        <div className="sidebar__input">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar_inputButton">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
