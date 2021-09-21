import React from "react";
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-700 text-white py-6">
      <div className="w-10/12 mx-auto">
        <a href="https://www.shopify.com/">
          {" "}
          <div className="text-lg flex items-center gap-2">
            <span>
              <FaShopify
                color="#bae26a"
                className="w-6 h-6 md:w-8 p-1 shadow-xl animate-bounce md:h-8 object-fit bg-white rounded-full"
              />
            </span>
            <span> Shopify Careers</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
