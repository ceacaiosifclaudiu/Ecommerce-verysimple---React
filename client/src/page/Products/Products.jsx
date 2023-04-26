import React from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import List from "./components/List/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const asc = 2;
  const desc = 2;

  const { id } = useParams();
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [sort, setShort] = React.useState("asc");
  const [selectedSubCategories, setSelectedSubCategories] = React.useState([]);

  const { data } = useFetch(`/sub-categories`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategories(
      isChecked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      {/* Left */}
      <div className="left">
        {/* Product Categories */}
        <div className="filterItem">
          <h2>Product Categories</h2>
          {/* Shoes */}

          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor="checkbox">{item.attributes.title}</label>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="inputRange"
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        {/* Sort by */}
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value={asc}
              name="price"
              onChange={(e) => setShort("asc")}
            />
            <label htmlFor="asc">Price (Lower first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value={desc}
              name="price"
              onChange={(e) => setShort("desc")}
            />
            <label htmlFor="desc">Price (Higher first)</label>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right">
        <List
          catId={id}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCategories}
        />
      </div>
    </div>
  );
  s;
};

export default Products;
