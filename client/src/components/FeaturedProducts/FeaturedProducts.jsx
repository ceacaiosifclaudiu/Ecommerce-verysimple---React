import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1972112/pexels-photo-1972112.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1972113/pexels-photo-1972113.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1972114/pexels-photo-1972114.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1972116/pexels-photo-1972116.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const { data } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      {/* Top */}
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum rem
          praesentium iste molestias doloribus consequuntur, placeat reiciendis,
          autem omnis magnam delectus perferendis ipsa dolores, ab odit nulla
          cumque necessitatibus amet eaque reprehenderit culpa. Autem, iure
          modi! Saepe similique tempore ea.
        </p>
      </div>

      {/* Bottom */}
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
