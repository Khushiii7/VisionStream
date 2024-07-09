import React from 'react';
import './Header.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@mui/material/Button';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  return (
    <div className='Header'>
      <div className='HeaderLeft'>
        <MenuRoundedIcon />
      </div>
      <div className='Header_Input'>
        <div className='HeaderMiddle'>
          <input className='SearchInput' placeholder='Search' type='text' />
          <SearchIcon className='Header_SearchBtn' />
        </div>
        <MicIcon className='Header_Icons' /> 
      </div>
      <div className='HeaderRight'>
        <Button className='Header_LoginBtn'
          variant="outlined"
          startIcon={<LoginRoundedIcon />}
          sx={{ borderRadius: '20px', margin: '0 5px' }}
        >
          Login
        </Button>
        <Button className='Header_LogoutBtn'
          variant="outlined"
          startIcon={<LogoutIcon />}
          sx={{ borderRadius: '20px', margin: '0 5px' }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Header;
