import React from "react";
import "./Favorite.scss";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { removeWish, resetWishLit } from "../../../redux/favoriteReducer";

const Favorite = () => {
  const favorite = useSelector((state) => state.wishList.favorites);
  const dispatch = useDispatch();

  console.log(favorite);

  return (
    <div className="favorite">
      <h1>Products in your WishList</h1>
      {favorite.length === 0 ? (
        <h4>You dont like nothing?</h4>
      ) : (
        favorite.map((item) => (
          <div className="favoriteContiner">
            <div className="left">
              <img
                src={import.meta.env.VITE_API_UPLOAD_URL + item.img}
                alt=""
              />
            </div>
            <div className="right">
              <h4>{item.title}</h4>

              <DeleteOutlinedIcon
                className="delete"
                onClick={() => {
                  dispatch(removeWish(item.id));
                }}
              />
            </div>
          </div>
        ))
      )}

      {favorite.length === 0 ? null : (
        <span
          onClick={() => {
            dispatch(resetWishLit());
          }}
        >
          Reset Wishlit
        </span>
      )}
    </div>
  );
};

export default Favorite;
