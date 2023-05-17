import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetProductList } from "./ProductSlice";
import Grid from "@mui/material/Grid";
import Product from "./Product";

function ProductList() {
  const productList = useSelector((state) => state.productList.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProductList());
    console.log(productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {productList.products &&
          productList.products.map((item, key) => (
            <Product key={item.id} item={item} />
          ))}
      </Grid>
    </div>
  );
}

export default ProductList;
