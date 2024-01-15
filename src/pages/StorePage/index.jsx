import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import LandingPageItem from "components/LandingPageItem";

const StorePagePage = () => {
  const navigate = useNavigate();

  const landingPageItemPropList = [
    {},
    {
      productname: "Golden Penny Macaroni",
      userimage: "images/img_rectangle11_230x178.png",
      productprice: "#800",
    },
    {
      productname: "Golden Penny Twist",
      userimage: "images/img_rectangle11_1.png",
      productprice: "#900",
    },
    { productprice: "#300", userimage: "images/img_rectangle11_2.png" },
  ];
  const landingPageItemPropList1 = [
    {},
    {
      productname: "Golden Penny Macaroni",
      userimage: "images/img_rectangle11_230x178.png",
      productprice: "#800",
    },
    {
      productname: "Golden Penny Twist",
      userimage: "images/img_rectangle11_1.png",
      productprice: "#900",
    },
    { productprice: "#300", userimage: "images/img_rectangle11_2.png" },
  ];
  const landingPageItemPropList2 = [
    {},
    {
      productname: "Golden Penny Macaroni",
      userimage: "images/img_rectangle11_230x178.png",
      productprice: "#800",
    },
    {
      productname: "Golden Penny Twist",
      userimage: "images/img_rectangle11_1.png",
      productprice: "#900",
    },
    { productprice: "#300", userimage: "images/img_rectangle11_2.png" },
    {},
    {
      productname: "Golden Penny Macaroni",
      userimage: "images/img_rectangle11_230x178.png",
      productprice: "#800",
    },
    {
      productname: "Golden Penny Twist",
      userimage: "images/img_rectangle11_1.png",
      productprice: "#900",
    },
    { productprice: "#300", userimage: "images/img_rectangle11_2.png" },
    {},
    {
      productname: "Golden Penny Macaroni",
      userimage: "images/img_rectangle11_230x178.png",
      productprice: "#800",
    },
    {
      productname: "Golden Penny Twist",
      userimage: "images/img_rectangle11_1.png",
      productprice: "#900",
    },
    { productprice: "#300", userimage: "images/img_rectangle11_2.png" },
    {},
    {
      productname: "Golden Penny Macaroni",
      userimage: "images/img_rectangle11_230x178.png",
      productprice: "#800",
    },
    {
      productname: "Golden Penny Twist",
      userimage: "images/img_rectangle11_1.png",
      productprice: "#900",
    },
    { productprice: "#300", userimage: "images/img_rectangle11_2.png" },
  ];

  return (
    <>
      <div className="bg-light_green-50 flex flex-col font-poppins gap-[51px] items-center justify-end mx-auto pt-3 w-full">
        <Header className="flex flex-row md:gap-10 gap-[211px] items-center justify-center md:px-5 w-full" />
        <div className="font-bimini sm:h-[15340px] h-[5661px] md:h-[9625px] md:px-5 relative w-full">
          <Img
            className="absolute h-[344px] object-cover right-[0] top-[14%]"
            src="images/img_group11.png"
            alt="groupTen"
          />
          <Img
            className="absolute h-[344px] left-[0] object-cover top-[2%]"
            src="images/img_group11.png"
            alt="groupEleven"
          />
          <Img
            className="h-[408px] my-auto object-cover"
            src="images/img_group12.png"
            alt="groupTwelve"
          />
          <div className="absolute flex flex-col md:gap-10 gap-20 h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start pt-0.5 w-full">
                <Img
                  className="h-[625px] md:h-auto object-cover w-full"
                  src="images/img_rectangle68.png"
                  alt="rectangleSixtyEight"
                />
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[49px] text-blue_gray-900 w-auto"
                  size="txtBiminiBold49"
                >
                  Popular
                </Text>
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    {landingPageItemPropList.map((props, index) => (
                      <React.Fragment key={`LandingPageItem${index}`}>
                        <LandingPageItem
                          className="bg-white-A700 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-lg w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
              <div className="bg-green-600 flex flex-col items-center justify-start p-[42px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-12 items-start justify-start mb-[26px] w-auto md:w-full">
                  <Text
                    className="sm:text-[39px] md:text-[45px] text-[49px] text-white-A700 w-auto"
                    size="txtBiminiBold49WhiteA700"
                  >
                    Coker’s Delight
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                      orientation="horizontal"
                    >
                      {landingPageItemPropList1.map((props, index) => (
                        <React.Fragment key={`LandingPageItem${index}`}>
                          <LandingPageItem
                            className="bg-white-A700 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-lg w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start pb-[21px] sm:pl-5 pl-[21px] w-full">
                <div className="flex flex-col gap-12 items-start justify-start overflow-auto w-auto md:w-full">
                  <Text
                    className="sm:text-[39px] md:text-[45px] text-[49px] text-blue_gray-900 w-auto"
                    size="txtBiminiBold49"
                  >
                    Order By Categories
                  </Text>
                  <div className="flex md:flex-col flex-row gap-7 items-start justify-start w-auto md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-8 items-center justify-start w-auto">
                        <div className="bg-white-A700 flex flex-col h-[290px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[290px]">
                          <Img
                            className="h-[230px] md:h-auto object-cover w-[78%]"
                            src="images/img_rectangle11.png"
                            alt="rectangleEleven"
                          />
                        </div>
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                          size="txtBiminiNormal49Black900"
                        >
                          Pasta
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-auto">
                        <div className="bg-white-A700 flex flex-col h-[290px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[290px]">
                          <Img
                            className="h-[230px] md:h-auto object-cover w-[78%]"
                            src="images/img_rectangle11.png"
                            alt="rectangleEleven"
                          />
                        </div>
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                          size="txtBiminiNormal49Black900"
                        >
                          Beverages
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-auto">
                        <div className="bg-white-A700 flex flex-col h-[290px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[290px]">
                          <Img
                            className="h-[230px] md:h-auto object-cover w-[78%]"
                            src="images/img_rectangle11.png"
                            alt="rectangleEleven"
                          />
                        </div>
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                          size="txtBiminiNormal49Black900"
                        >
                          Cereals
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-auto">
                        <div className="bg-white-A700 flex flex-col h-[290px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[290px]">
                          <Img
                            className="h-[230px] md:h-auto object-cover w-[78%]"
                            src="images/img_rectangle11.png"
                            alt="rectangleEleven"
                          />
                        </div>
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                          size="txtBiminiNormal49Black900"
                        >
                          Soup
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-auto">
                        <div className="bg-white-A700 flex flex-col items-center justify-end p-[25px] sm:px-5 rounded-lg w-full">
                          <Img
                            className="h-[230px] md:h-auto object-cover w-[90%]"
                            src="images/img_rectangle11.png"
                            alt="rectangleEleven"
                          />
                        </div>
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                          size="txtBiminiNormal49Black900"
                        >
                          Packages
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-auto">
                        <div className="bg-white-A700 flex flex-col h-[290px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[290px]">
                          <Img
                            className="h-[230px] md:h-auto object-cover w-[78%]"
                            src="images/img_rectangle11.png"
                            alt="rectangleEleven"
                          />
                        </div>
                        <Text
                          className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                          size="txtBiminiNormal49Black900"
                        >
                          Swallow
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col gap-8 items-center justify-start w-auto">
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-[25px] sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-[230px] md:h-auto object-cover w-[90%]"
                          src="images/img_rectangle11.png"
                          alt="rectangleEleven"
                        />
                      </div>
                      <Text
                        className="sm:text-[39px] md:text-[45px] text-[49px] text-black-900 w-auto"
                        size="txtBiminiNormal49Black900"
                      >
                        Ingredients{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[49px] text-blue_gray-900 w-auto"
                  size="txtBiminiBold49"
                >
                  More To Love
                </Text>
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  {landingPageItemPropList2.map((props, index) => (
                    <React.Fragment key={`LandingPageItem${index}`}>
                      <LandingPageItem
                        className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 rounded-lg w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-col font-poppins gap-8 items-center justify-center pb-8 w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Img
                      className="h-44 md:h-auto object-cover w-[132px] sm:w-full"
                      src="images/img_micheal2061.png"
                      alt="micheal2061"
                    />
                    <Text
                      className="max-w-[325px] md:max-w-full text-blue_gray-900 text-xl"
                      size="txtPoppinsRegular20Bluegray900"
                    >
                      Lorem ipsum dolor sit amet tetur mattis vel dhc kd dkvd
                      mcorper in aliquam nisi ipsum.
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row font-bimini sm:gap-10 gap-[156px] items-start justify-between md:mt-0 mt-14 w-auto md:w-full">
                    <div className="flex flex-col gap-[33px] items-start justify-start w-auto">
                      <Text
                        className="sm:text-[35px] md:text-[37px] text-[39px] text-blue_gray-900 w-auto"
                        size="txtBiminiBold39"
                      >
                        Services
                      </Text>
                      <div className="flex flex-col font-poppins gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Online Order
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          24/7 Services
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Home Delivery
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[33px] items-start justify-start w-auto">
                      <Text
                        className="sm:text-[35px] md:text-[37px] text-[39px] text-blue_gray-900 w-auto"
                        size="txtBiminiBold39"
                      >
                        Quick Links
                      </Text>
                      <div className="flex flex-col font-poppins gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Home
                        </Text>
                        <Text
                          className="common-pointer text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                          onClick={() => navigate("/aboutusone")}
                        >
                          Company
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Blogs
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Reviews
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Order
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[35px] md:text-[37px] text-[39px] text-blue_gray-900 w-auto"
                        size="txtBiminiBold39"
                      >
                        About
                      </Text>
                      <div className="flex flex-col font-poppins gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Our Story
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Advantage{" "}
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Blogs
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-start w-auto">
                      <Text
                        className="sm:text-[35px] md:text-[37px] text-[39px] text-blue_gray-900 w-auto"
                        size="txtBiminiBold39"
                      >
                        Help
                      </Text>
                      <div className="flex flex-col font-poppins gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Contact
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtPoppinsRegular20Bluegray900"
                        >
                          Support{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-900 h-px w-full" />
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Kukeat
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    © 2023
                  </Text>
                  <Line className="bg-blue_gray-900 h-[17px] rounded-[1px] w-[3px]" />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular16"
                  >
                    All Rights Reserved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePagePage;
