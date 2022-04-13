import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/productSlice";
import data from "../products";

const Sidebar = () => {
  const [pricevalue, setPriceValue] = useState([100, 1000]);
  const [category, setCategory] = useState("");
  const [showbackdrop, setShowBackDrop] = useState(false);
  const [pricelabel, setPriceLabel] = useState("");
  const dispatch = useDispatch();
  const handleCategoryChange = (value) => {
    setCategory(value);
    // let totaldata = data.products;
    // let filtervalue = value.charAt(0).toLowerCase() + value.slice(1);
    // let filterdata = totaldata.filter((item) => item.category == filtervalue);
    // dispatch((getProduct(filterdata)));
  };

  const marks = [
    {
      value: 100,
      label: "100",
    },
    {
      value: 1000,
      label: "1000",
    },
  ];

  function valuetext(value) {
    return value;
  }

  useEffect(() => {
    if (category == "" && pricevalue[0] == "100" && pricevalue[1] == "1000") {
      let totaldata = data.products;
      dispatch(getProduct({ filterdata: totaldata, arrayvalues: pricevalue }));
    }

    if (category == "" && (pricevalue[0] != "100" || pricevalue[1] != "1000")) {
      setShowBackDrop(true);
      setPriceLabel(`${pricevalue[0]}-${pricevalue[1]}`);
      let totaldata = data.products;
      let filterdata = totaldata.filter(
        (item) => item.price <= pricevalue[1] && item.price >= pricevalue[0]
      );
      dispatch(getProduct({ filterdata: filterdata, arrayvalues: pricevalue }));
      setShowBackDrop(false);
    }

    if (category !== "") {
      if (pricevalue[0] == "100" && pricevalue[1] == "1000") {
      } else {
        setPriceLabel(`${pricevalue[0]}-${pricevalue[1]}`);
      }

      let totaldata = data.products;
      let filtervalue = category.charAt(0).toLowerCase() + category.slice(1);
      let filterdata = totaldata.filter(
        (item) =>
          item.category == filtervalue &&
          item.price <= pricevalue[1] &&
          item.price >= pricevalue[0]
      );
      dispatch(getProduct({ filterdata: filterdata, arrayvalues: pricevalue }));
    }
    // else{
    //   let totaldata = data.products;
    //   dispatch((getProduct({filterdata:totaldata,arrayvalues:pricevalue})));
    // }
  }, [category, pricevalue]);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
    setCategory("");
  };

  const handlePriceDelete = () => {
    console.info("You clicked the delete icon.");
    setPriceLabel("");
    setPriceValue([100, 1000]);
  };

  const categories = ["Footwear", "Home", "Fashion", "Mobiles", "Furniture"];

  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "15%",
            boxSizing: "border-box",

            zIndex: 1,
            backgroundColor: "#fcbc41",
            paddingTop: 15,
            paddingLeft: 5,
            color: "white",

            "@media (max-width: 37.5em)": {
              width: "35%",
              paddingLeft: 2,
            },
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography gutterBottom variant="h3" color="black">
          Filter :
        </Typography>

        {category !== "" && (
          <Chip
            label={category}
            onDelete={handleDelete}
            sx={{ width: "80%", fontSize: "20px" }}
          />
        )}

        {pricelabel !== "" && (
          <Chip
            label={pricelabel}
            onDelete={handlePriceDelete}
            sx={{ width: "80%", marginTop: "15px", fontSize: "17px" }}
          />
        )}
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
              getAriaValueText={valuetext}
              width="60%"
              min={100}
              max={1000}
              step={50}
              marks={marks}
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </ListItem>

          <ListItem disablePadding sx={{ width: "85%", marginTop: "25px" }}>
            <ListItemText>
              <Typography variant="h4">Categories</Typography>
            </ListItemText>
          </ListItem>
        </List>

        {/* <List sx={{ marginTop: "10px" }}>
          {categories &&
            categories.length > 0 &&
            categories.map((item) => {
              return (
                <ListItem disablePadding sx={{ marginTop: "15px",cursor:"pointer"}}>
                  <Typography variant="h4" sx={{cursor:"pointer"}}>{item}</Typography>
                </ListItem>
              );
            })}
        </List> */}

        <ul className="sidebar__categorylist">
          {categories &&
            categories.length > 0 &&
            categories.map((item) => {
              return (
                <li
                  className="sidebar__categoryitems"
                  onClick={() => handleCategoryChange(item)}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </Drawer>
    </>
  );
};

export default Sidebar;
