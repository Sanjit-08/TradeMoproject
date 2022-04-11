import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import data from "../products";

const Products = () => {
  console.log(data);
  const [pdata, setPdata] = useState(data.products);
  useEffect(() => {
    const filterdata = data.products.filter(
      (item) => item.category == "Footwear"
    );
    setPdata(filterdata);
    console.log("F", filterdata);
  }, []);
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
            ></ProductCard>
          );
        })}
    </div>
  );
};

export default Products;
