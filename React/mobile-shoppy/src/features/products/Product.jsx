import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

const Product = ({ item }) => {
  return (
    <Grid item xs={12} sm={4} md={3} lg={2} key={item.id}>
      <Card sx={{ minHeight: "400px", maxHeight: "400px" }}>
        <CardHeader subheader={item.brand} />
        <img className="img-fluid" src={item.thumbnail} alt={item.category} />
        <CardContent sx={{ textAlign: "left" }}>
          <Chip
            sx={{
              background: "#b62417",
              color: "white",
              fontSize: "12px",
              marginBottom: "5px",
            }}
            label={item.discountPercentage + "% off"}
            variant="filled"
          />{" "}
          {/* <span
            style={{
              color: "#b62417",
              fontSize: "11px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            deal of the day
          </span> */}
          <Typography
            component={"div"}
            className="dot-dot"
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
          <div
            className="Stars"
            style={{ "--rating": item.rating }}
            aria-label="Rating of this product is 2.3 out of 5."
          ></div>
          <div style={{ display: "flex" }}>
            <strong>${item.price}</strong>
          </div>
        </CardContent>
      </Card>
      {/* <h4>{item.brand}</h4>
              <p>{item.description}</p>
              <strong>${item.price}</strong>
              <div></div>
              <div>{item.stock}</div>
              <div>{item.discountPercentage}% off</div> */}
    </Grid>
  );
};

export default Product;
