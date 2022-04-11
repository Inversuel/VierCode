import React, { useState } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });
  const [refreshKey, setRefreshKey] = useState(0);
  const [products, setProducts] = useState(props.products)

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
    if(name === "priceFrom"){
      setPrice({priceFrom: value, priceTo: price.priceTo})
    }
    if(name === "priceTo")
    {
      setPrice({priceFrom: price.priceFrom, priceTo: value})
    }
    filterProducts()
  };

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
    setColumns((prevState) => ({...prevState, [name]: checked}));
    setRefreshKey(refreshKey + 1);
  };

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
    let newProducts = props.products.filter(
      (item) => (item.price >= price.priceTo) && (item.price <= price.priceFrom)
    );
    setProducts(newProducts);
  };
  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={products} columns={columns} />
    </div>
  );
};

export default Search;
