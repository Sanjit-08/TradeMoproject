import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import footwear from "../media/footwear1.jpg";
import home from "../media/bedsheet.jpg";
import fashion from "../media/fashion.png";
import grocery from "../media/grocery.jpg";
import mobile from "../media/mobile.jpg";

const ProductCard = ({ name, price, originalprice, desc, category,imgurl }) => {
  return (
    <>
      <Card className="productcard">
        <CardMedia
          component="img"
          height="200"
          image={
           imgurl
          }
          
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.secondary">
            {desc}
          </Typography>
          <Typography gutterBottom variant="h5">
            <div className="products__pricebox">
              <div class="products__discountedprice"> &#8377;{price}</div>
              <div class="products__originalprice"> &#8377;{originalprice}</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
