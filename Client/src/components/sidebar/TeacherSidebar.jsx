import React from 'react';
import { NavLink } from 'react-router-dom';
import './TeacherSidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import UploadIcon from '@mui/icons-material/Upload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TeacherSidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/teacher/home" activeclassname="selected">
        <SidebarRow Icon={HomeIcon} title="Home" path="/teacher/home" />
      </NavLink>
      <NavLink to="/teacher/upload" activeclassname="selected">
        <SidebarRow Icon={UploadIcon} title="Upload Videos" path="/teacher/upload" />
      </NavLink>
      <NavLink to="/teacher/profile" activeclassname="selected">
        <SidebarRow Icon={AccountCircleIcon} title="Profile" path="/teacher/profile" />
      </NavLink>
      <hr />
    </div>
  );
}

export default TeacherSidebar;
