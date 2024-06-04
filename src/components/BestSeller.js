import React, { useState } from "react";
import { products } from "../data/Data";
import Heading from "../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faBalanceScale, faEye } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const [menuItems, setMenuItems] = useState(products);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(products);
    } else {
      const newItems = products.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <div className="bg-white mt-16 text-center">
      <Heading
        title="Best Seller"
        description="SHOP THE NEW SELECTION OF NEW ARRIVALS AT OUR STORE. FILL OUT YOUR WISHLIST ITEM."
      />
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("all")}
        >
          All
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("DECOR")}
        >
          DECOR
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("KITCHEN")}
        >
          KITCHEN
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("LIVING ROOM")}
        >
          LIVING ROOM
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("SOFA")}
        >
          SOFA
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {menuItems.map((item, index) => (
          <div key={index} className="mx-auto max-w-xs relative m-4">
            <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group">
              <img
                src={item.img}
                title={item.name}
                alt={item.name}
                className="mx-auto h-full w-full hover:shadow-md transition-all duration-300 bg-cover"
              />
              <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-wrap flex-col p-2 mr-1 mt-1">
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to cart"
                    icon={faShoppingCart}
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to wishlist"
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="compare"
                    icon={faBalanceScale}
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="view"
                    icon={faEye}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-semibold uppercase">{item.name}</div>
              <div>${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
