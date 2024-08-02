import React from 'react';
import PropTypes from 'prop-types'; 
import './SidebarRow.css';
function SidebarRow({ Icon, title, path }) {
  return (
    <div className="sidebarrow">
      <Icon className="sidebarrow_icon" />
      <p className="sidebarrow_title">{title}</p>
    </div>
  );
}

// PropTypes validation
SidebarRow.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SidebarRow;
