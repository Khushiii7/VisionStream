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
      <NavLink to="/teacher/home" activeClassName="selected">
        <SidebarRow Icon={HomeIcon} title="Home" />
      </NavLink>
      <NavLink to="/teacher/upload" activeClassName="selected">
        <SidebarRow Icon={UploadIcon} title="Upload Videos" />
      </NavLink>
      <NavLink to="/teacher/profile" activeClassName="selected">
        <SidebarRow Icon={AccountCircleIcon} title="Profile" />
      </NavLink>
      <hr/>
    </div>
  );
}

export default TeacherSidebar;
