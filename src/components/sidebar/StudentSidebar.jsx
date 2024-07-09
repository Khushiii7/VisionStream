import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudentSidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';

function StudentSidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/student/home" activeclassname="selected" className="nav-link">
        <SidebarRow Icon={HomeIcon} title="Home" path="/student/home" />
      </NavLink>
      <NavLink to="/student/subscriptions" activeclassname="selected" className="nav-link">
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" path="/student/subscriptions" />
      </NavLink>
      <hr/>
      <NavLink to="/student/history" activeclassname="selected" className="nav-link">
        <SidebarRow Icon={HistoryIcon} title="History" path="/student/history" />
      </NavLink>
      <NavLink to="/student/likedvideos" activeclassname="selected" className="nav-link">
        <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" path="/student/likedvideos" />
      </NavLink>
      <NavLink to="/student/profile" activeclassname="selected" className="nav-link">
        <SidebarRow Icon={PersonIcon} title="Profile " path="/student/profile" />
      </NavLink>
      <hr />
    </div>
  );
}

export default StudentSidebar;
