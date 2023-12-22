import React, { useState } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";

import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { List, Box, Button, Typography } from "@mui/material";
// import context
import { useContext } from "react";
import { DataContext } from "../../../../Context/Context";
import { handleContext } from "../../../../Context/Context";
// import components
import DialogBox from "./DialogBox/DialogBox";

export default function MainListItems() {

  const { setRender } = useContext(DataContext);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const[open,setOpen]=useState(false);

  // alert(open)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => [
            handleListItemClick(event, 1),
            setRender("index"),
          ]}
          sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => [
            handleListItemClick(event, 2),
            setRender("accepted"),
          ]}
          sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Accepted" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => [
            handleListItemClick(event, 3),
            setRender("starred"),
          ]}
          sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => [handleListItemClick(event, 4)]}
          sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => [
            handleListItemClick(event, 5),
            setRender("commented"),
          ]}
          sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Commented" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => [
            handleListItemClick(event, 6),
            setRender("approved"),
          ]}
          sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Approved" />
        </ListItemButton>
        <Typography sx={{ marginTop: "10vh", alignItems: "center" }}>
          <Button onClick={()=>setOpen(!open)} variant="contained" size="large">
            Create
          </Button>
          <DialogBox  open={open} setOpen={setOpen}/>
        </Typography>
      </List>
    </Box>
  );
}
