import React from 'react'
 
import { styled } from '@mui/material';

const Wrapper=styled("div")({
  height:'100%' ,
  width:'100%' ,
  display:'flex'

});

export const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar/>
      <FriendsSideBar/>
      <Messenger/>
      <AppBar/>
 
    </Wrapper>
  )
};
