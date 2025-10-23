import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';

export default function Header(){ return (
  <header className="flex items-center justify-between px-8 py-6 bg-transparent">
    <div className="flex items-center gap-4 w-1/2 ">
      <div className="flex items-center bg-white rounded-md px-3 py-2 shadow-sm header-search">
        <SearchIcon fontSize="small" />
        <input placeholder="Search Order ID, SKU, Tracking, Case..." className="ml-3 outline-none w-full text-sm" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative"><NotificationsNoneIcon /><span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span></div>
      <div className="text-sm text-gray-500">EN</div>
      <Avatar sx={{bgcolor:'#3991a7'}}>A</Avatar>
      <div className="text-right text-sm"><div className="font-medium">Awesome Store</div><div className="text-xs text-gray-400">Client</div></div>
    </div>
  </header>
);}
