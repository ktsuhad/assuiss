import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Badge } from "@mui/material";

const inputBaseStyle = {
  border: "2px solid #f6f7f9",
  backgroundColor: "#f6f7f9",
  borderRadius: "8px",
};

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: "none", backgroundColor: "#ffffff", height:'64px' }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            gap: "5px",
          }}
        >
          <InputBase
            sx={{ ...inputBaseStyle }}
            startAdornment={
              <IconButton size="small">
                <SearchIcon sx={{ color: "#6c7176" }} />
              </IconButton>
            }
          />
          <Badge
            color="success"
            overlap="circular"
            badgeContent=" "
            variant="dot"
          >
            <NotificationsIcon sx={{color:"#101820"}} />
          </Badge>
          <IconButton size="large">
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large">
            <ArrowDropDownIcon sx={{color:"#101820"}}/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
