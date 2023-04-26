import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      {/* 1 */}
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>

        {/* 2 */}
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        {/* 3 */}
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          {/* 4 */}
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Sale
                </Link>
              </button>
            </div>
          </div>

          {/* 5 */}
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
