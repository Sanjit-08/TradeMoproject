import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import data from "../products";
import { useSelector,useDispatch } from "react-redux";

const Products = () => {
  
  
  const pdata = useSelector((state)=>state.product.data);
  
 
  return (
    <div className="products">
      {pdata &&
        pdata.length > 0 &&
        pdata.map((item,index) => {
          return (
            <ProductCard
              name={item.name}
              price={item.price}
              originalprice={item.originalprice}
              desc={item.desc}
              category={item.category}
              imgurl={item.imgurl}
              key={index}
            ></ProductCard>
          );
        })}
        {pdata && pdata.length == 0 && 
         <h1 style={{fontSize:"4rem"}}>No Product found !!</h1>}
    </div>
  );
};

export default Products;
