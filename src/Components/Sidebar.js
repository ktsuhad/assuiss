import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";

import assiduus_logo from "../Assets/assiduus-logo-dark.webp";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const LogoImage = styled("img")({
  height: 40,
});

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Accounts", icon: <AccountBalanceWalletIcon /> },
  { text: "Payroll", icon: <AttachMoneySharpIcon /> },
  { text: "Reports", icon: <DescriptionSharpIcon /> },
  { text: "Advisor", icon: <PersonIcon /> },
  { text: "Contacts", icon: <ContactsIcon /> },
];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          border: "none",
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <LogoImage src={assiduus_logo} alt="Logo" />
      </Toolbar>
      <List sx={{ marginTop: "20px"}}>
        {menuItems.map((menuItem, index) => (
          <Link
          key={index}
            to={`/${menuItem.text.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem
              disablePadding
              sx={{
                backgroundColor:
                  selectedItem === menuItem.text ? "#47b747" : "",
              }}
            >
              <ListItemButton onClick={() => handleItemClick(menuItem.text)}>
                <ListItemIcon
                  sx={{
                    color:
                      selectedItem === menuItem.text ? "#ffffff" : "#2e2e2e",
                  }}
                >
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color:
                      selectedItem === menuItem.text ? "#c5d4fa" : "#3c4148",
                          fontSize: "10px", 
                  }}
                  primary={menuItem.text}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
