import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  IconButton  from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { logout } from './../../shared/utils/auth';

const DropdownMenu =()=> {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
       <IconButton onClick={handleMenuOpen} style={{color:"white"}}>
        <MoreVertIcon/>
       </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu;