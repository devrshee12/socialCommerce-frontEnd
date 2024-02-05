import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("User logged out");
  }
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position:"fixed", zIndex:"100"}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader >
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            SocialCommerce
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cart" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Cart</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/login" activeClassName="activeClicked" onClick={handleLogout}>
              <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
{/* 
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;