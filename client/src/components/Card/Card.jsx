import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        {/* Top - images */}
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>

        {/* Bottom - price/name */}
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
