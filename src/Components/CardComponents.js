import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardComponent(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="144"
          image={props.product.productImage}
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.productName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price:
            <Typography
              sx={{ marginLeft: 2 }}
              variant="body3"
              color="text.secondary"
            >
              ₹{props.product.productPrice}
            </Typography>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            MRP:
            <Typography
              variant="body3"
              sx={{ marginLeft: 2 }}
              color="text.secondary"
            >
              ₹{props.product.productMRP}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
