import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import data from "../products";
import { useSelector,useDispatch } from "react-redux";

const Products = () => {
  console.log(data);
  
  const pdata = useSelector((state)=>state.product.data);
  
  //   const filterdata = data.products.filter(
  //     (item) => item.category == "Footwear"
  //   );
  //   setPdata(filterdata);
  //   console.log("F", filterdata);
  // }, []);
  return (
    <div className="products">
      {pdata &&
        pdata.length > 0 &&
        pdata.map((item) => {
          return (
            <ProductCard
              name={item.name}
              price={item.price}
              originalprice={item.originalprice}
              desc={item.desc}
              category={item.category}
              imgurl={item.imgurl}
            ></ProductCard>
          );
        })}
        {pdata && pdata.length == 0 && 
         <h1 style={{fontSize:"4rem"}}>No Product found !!</h1>}
    </div>
  );
};

export default Products;
