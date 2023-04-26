import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// Redux
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
import Favorite from "./Favorite/Favorite";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openFavorite, setOpenFavorite] = React.useState(false);

  const products = useSelector((state) => state.cart.products);
  const favorite = useSelector((state) => state.wishList.favorites);

  const handleFavorite = () => {
    setOpenFavorite(!openFavorite);
    setOpen(false);
  };

  const handleCart = () => {
    setOpenFavorite(false);
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Left Side */}
        <div className="left">
          <div className="item">
            <Link to={"/products/1"}>Women</Link>
          </div>

          <div className="item">
            <Link to={"/products/2"}>Men</Link>
          </div>

          <div className="item">
            <Link to={"/products/3"}>Children</Link>
          </div>
        </div>

        {/* Center */}
        <div className="center">
          <Link to={"/"}>Ceaca</Link>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="icons">
            {/* <SearchIcon /> */}

            <div className="cartIcon" onClick={handleFavorite}>
              <FavoriteBorderOutlinedIcon />
              <span>{favorite?.length}</span>
            </div>

            <div className="cartIcon" onClick={handleCart}>
              <ShoppingCartOutlinedIcon />
              <span>{products?.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open ? <Cart /> : null}
      {openFavorite ? <Favorite /> : null}
    </div>
  );
};

export default Navbar;
