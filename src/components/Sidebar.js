import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

const Sidebar = () => {
  const [pricevalue, setPriceValue] = useState([0, 100]);

  const categories = [
    "Category1",
    "Category2",
    "Category3",
    "Category 4",
    "Category 5",
  ];

  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "15%",
            boxSizing: "border-box",

            zIndex: -1,
            backgroundColor: "#fcbc41",
            paddingTop: 15,
            paddingLeft: 5,
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h3">Filter</Typography>

        <List sx={{ fontSize: "25px", marginTop: "15px" }}>
          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="h4">Price</Typography>
            </ListItemText>
          </ListItem>

          <ListItem disablePadding sx={{ width: "85%", marginTop: "15px" }}>
            <Slider
              value={pricevalue}
              aria-label="Default"
              valueLabelDisplay="auto"
              width="60%"
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </ListItem>

          <ListItem disablePadding sx={{ width: "85%", marginTop: "25px" }}>
            <ListItemText>
              <Typography variant="h4">Categories</Typography>
            </ListItemText>
          </ListItem>
        </List>

        <List sx={{ marginTop: "10px" }}>
          {categories &&
            categories.length > 0 &&
            categories.map((item) => {
              return (
                <ListItem disablePadding sx={{ marginTop: "15px" }}>
                  <Typography variant="h4">{item}</Typography>
                </ListItem>
              );
            })}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
