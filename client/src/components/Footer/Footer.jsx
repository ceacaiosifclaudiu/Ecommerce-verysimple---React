import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        {/* 1 */}
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>

        {/* 2 */}
        {/* <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div> */}

        {/* 3 */}
        {/* <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            mollitia. Deserunt consectetur voluptatibus accusamus illum incidunt
            et sunt eius facere nihil maxime in nisi quis sint minus, modi id
            voluptas consequatur delectus inventore blanditiis non. Eveniet
            totam voluptas quod ex?
          </span>
        </div> */}

        {/* 4 */}
        {/* <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            soluta! Similique temporibus est, perferendis corporis eum nesciunt
            dicta dolores blanditiis autem consequuntur, ut vel quo, iste sed
            culpa libero. Atque magnam tenetur voluptatem corporis aut quae sunt
            cupiditate, aliquid soluta!
          </span>
        </div> */}
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Ceacastore</span>
          <span className="copyright">
            © Copyright 2023. All rights Reseverd
          </span>
        </div>
        <div className="right">PAYMENT</div>
      </div>
    </div>
  );
};

export default Footer;
