import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[119px] md:h-auto object-cover w-[120px]"
          src="images/img_micheal2062.png"
          alt="micheal2062"
        />
        <ul className="flex md:flex-col flex-row gap-20 md:hidden items-center justify-end w-auto common-row-list">
          <li>
            <div className="bg-light_green-50 border border-red-500_cc border-solid flex flex-row gap-[103px] items-center justify-start sm:px-5 px-6 py-2 rounded-lg">
              <Text
                className="hover:font-semibold text-red-500_cc text-xl w-auto"
                size="txtPoppinsRegular20Red500cc"
              >
                Search Foodstuff
              </Text>
              <Img
                className="h-[26px] w-[26px]"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
          </li>
          <li>
            <ul className="flex sm:flex-col flex-row gap-[37px] items-start justify-start sm:w-full">
              <li>
                <Text
                  className="hover:font-semibold text-2xl md:text-[22px] text-blue_gray-900 hover:text-red-500_cc sm:text-xl"
                  size="txtPoppinsRegular24"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-semibold text-2xl md:text-[22px] text-red-500 hover:text-red-500_cc sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Store
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-semibold text-2xl md:text-[22px] text-blue_gray-900 hover:text-red-500_cc sm:text-xl"
                  size="txtPoppinsRegular24"
                >
                  About Us
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-semibold text-2xl md:text-[22px] text-blue_gray-900 hover:text-red-500_cc sm:text-xl"
                  size="txtPoppinsRegular24"
                >
                  Blog
                </Text>
              </li>
            </ul>
          </li>
          <li>
            <div className="bg-red-500 flex flex-row gap-6 items-center justify-center sm:px-5 px-6 py-2 rounded-[30px]">
              <Text
                className="hover:font-semibold hover:text-red-500_cc text-white-A700 text-xl w-auto"
                size="txtPoppinsSemiBold20"
              >
                Cart
              </Text>
              <Img
                className="h-11 w-11"
                src="images/img_cart.svg"
                alt="cart_One"
              />
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
