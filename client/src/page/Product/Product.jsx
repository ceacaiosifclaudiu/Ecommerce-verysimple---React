import React from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToWish } from "../../redux/favoriteReducer";

const Product = () => {
  const [selectedImg, setSelectedImg] = React.useState("img");
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();

  const { data } = useFetch(`/products/${id}?populate=*`);

  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.wishList.favorites);
  console.log(wishList);

  return (
    <div className="product">
      {/* Left */}
      <div className="left">
        <div className="images">
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setSelectedImg("img")}
          />
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              data?.attributes?.[selectedImg].data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>

      {/* Right */}
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>

        {/* Quantity buttons */}
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        {/* Add to cart button */}
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data?.id,
                title: data?.attributes?.title,
                desc: data?.attributes?.desc,
                price: data?.attributes?.price,
                img: data?.attributes?.img?.data?.attributes?.url,
                quantity,
              })
            )
          }
        >
          <ShoppingCartIcon /> ADD TO CART
        </button>

        <div className="links">
          <div
            className="item"
            onClick={() =>
              dispatch(
                addToWish({
                  id: data?.id,
                  title: data?.attributes?.title,
                  desc: data?.attributes?.desc,
                  price: data?.attributes?.price,
                  img: data?.attributes?.img?.data?.attributes?.url,
                })
              )
            }
          >
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Product;
