import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-light_green-50 flex flex-col items-center justify-start mx-auto md:px-10 px-12 sm:px-5 w-full">
        <Header className="flex flex-row font-poppins md:gap-10 gap-[211px] items-center justify-center w-full" />
        <Text
          className="mt-[114px] sm:text-[39px] md:text-[45px] text-[49px] text-red-500"
          size="txtBiminiNormal49Red500"
        >
          My Cart
        </Text>
        <List
          className="flex flex-col font-bimini gap-8 items-start max-w-[1120px] mt-[52px] mx-auto w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start rounded-[10px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-[31%] sm:w-full">
                  <Img
                    className="h-[103px] md:h-auto object-cover w-full"
                    src="images/img_rectangle11_103x120.png"
                    alt="rectangleEleven"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                    size="txtBiminiNormal25"
                  >
                    Golden Penny Noodles
                  </Text>
                  <Text
                    className="max-w-[247px] md:max-w-full text-blue_gray-900 text-sm"
                    size="txtPoppinsLight14"
                  >
                    Golden Penny Golden Penny odles Golden Penny Noodles
                  </Text>
                </div>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center w-auto"
                size="txtBiminiNormal28"
              >
                #600
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Button
                  className="flex items-center justify-center w-[50px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[66px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
                  shape="round"
                  color="black_900"
                  size="xs"
                  variant="outline"
                >
                  3
                </Button>
                <Button
                  className="flex h-[51px] items-center justify-center w-[51px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </Button>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500_cc w-auto"
                size="txtBiminiBold36"
              >
                #1800
              </Text>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Line className="bg-black-900 h-10 w-px" />
                <Img
                  className="h-8 w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start rounded-[10px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-[31%] sm:w-full">
                  <Img
                    className="h-[103px] md:h-auto object-cover w-full"
                    src="images/img_rectangle11_103x120.png"
                    alt="rectangleEleven"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                    size="txtBiminiNormal25"
                  >
                    Golden Penny Noodles
                  </Text>
                  <Text
                    className="max-w-[247px] md:max-w-full text-blue_gray-900 text-sm"
                    size="txtPoppinsLight14"
                  >
                    Golden Penny Golden Penny odles Golden Penny Noodles
                  </Text>
                </div>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center w-auto"
                size="txtBiminiNormal28"
              >
                #600
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Button
                  className="flex items-center justify-center w-[50px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[66px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
                  shape="round"
                  color="black_900"
                  size="xs"
                  variant="outline"
                >
                  3
                </Button>
                <Button
                  className="flex h-[51px] items-center justify-center w-[51px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </Button>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500_cc w-auto"
                size="txtBiminiBold36"
              >
                #1800
              </Text>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Line className="bg-black-900 h-10 w-px" />
                <Img
                  className="h-8 w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start rounded-[10px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-[31%] sm:w-full">
                  <Img
                    className="h-[103px] md:h-auto object-cover w-full"
                    src="images/img_rectangle11_103x120.png"
                    alt="rectangleEleven"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                    size="txtBiminiNormal25"
                  >
                    Golden Penny Noodles
                  </Text>
                  <Text
                    className="max-w-[247px] md:max-w-full text-blue_gray-900 text-sm"
                    size="txtPoppinsLight14"
                  >
                    Golden Penny Golden Penny odles Golden Penny Noodles
                  </Text>
                </div>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center w-auto"
                size="txtBiminiNormal28"
              >
                #600
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Button
                  className="flex items-center justify-center w-[50px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[66px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
                  shape="round"
                  color="black_900"
                  size="xs"
                  variant="outline"
                >
                  3
                </Button>
                <Button
                  className="flex h-[51px] items-center justify-center w-[51px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </Button>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500_cc w-auto"
                size="txtBiminiBold36"
              >
                #1800
              </Text>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Line className="bg-black-900 h-10 w-px" />
                <Img
                  className="h-8 w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start rounded-[10px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-[31%] sm:w-full">
                  <Img
                    className="h-[103px] md:h-auto object-cover w-full"
                    src="images/img_rectangle11_103x120.png"
                    alt="rectangleEleven"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                    size="txtBiminiNormal25"
                  >
                    Golden Penny Noodles
                  </Text>
                  <Text
                    className="max-w-[247px] md:max-w-full text-blue_gray-900 text-sm"
                    size="txtPoppinsLight14"
                  >
                    Golden Penny Golden Penny odles Golden Penny Noodles
                  </Text>
                </div>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center w-auto"
                size="txtBiminiNormal28"
              >
                #600
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Button
                  className="flex items-center justify-center w-[50px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[66px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
                  shape="round"
                  color="black_900"
                  size="xs"
                  variant="outline"
                >
                  3
                </Button>
                <Button
                  className="flex h-[51px] items-center justify-center w-[51px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </Button>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500_cc w-auto"
                size="txtBiminiBold36"
              >
                #1800
              </Text>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Line className="bg-black-900 h-10 w-px" />
                <Img
                  className="h-8 w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-2.5 items-start justify-start rounded-[10px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-[31%] sm:w-full">
                  <Img
                    className="h-[103px] md:h-auto object-cover w-full"
                    src="images/img_rectangle11_103x120.png"
                    alt="rectangleEleven"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                    size="txtBiminiNormal25"
                  >
                    Golden Penny Noodles
                  </Text>
                  <Text
                    className="max-w-[247px] md:max-w-full text-blue_gray-900 text-sm"
                    size="txtPoppinsLight14"
                  >
                    Golden Penny Golden Penny odles Golden Penny Noodles
                  </Text>
                </div>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center w-auto"
                size="txtBiminiNormal28"
              >
                #600
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Button
                  className="flex items-center justify-center w-[50px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[66px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
                  shape="round"
                  color="black_900"
                  size="xs"
                  variant="outline"
                >
                  3
                </Button>
                <Button
                  className="flex h-[51px] items-center justify-center w-[51px]"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </Button>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500_cc w-auto"
                size="txtBiminiBold36"
              >
                #1800
              </Text>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Line className="bg-black-900 h-10 w-px" />
                <Img
                  className="h-8 w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
            <Text
              className="text-base text-blue_gray-900"
              size="txtBiminiNormal16"
            >
              Price Details
            </Text>
          </div>
        </List>
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end max-w-[1120px] mt-[53px] mx-auto md:px-5 py-[31px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[19px] items-center justify-start w-[93%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtPoppinsRegular28"
                >
                  Sub-total
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-right"
                  size="txtPoppinsRegular28"
                >
                  #9000
                </Text>
              </div>
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtPoppinsRegular28"
                >
                  Discount
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-right"
                  size="txtPoppinsRegular28"
                >
                  5%
                </Text>
              </div>
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtPoppinsRegular28"
                >
                  Delivery
                </Text>
                <Text
                  className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-right"
                  size="txtPoppinsRegular28"
                >
                  FREE
                </Text>
              </div>
            </div>
            <Line className="bg-gray-400 h-px mt-[38px] w-full" />
            <div className="flex flex-row font-bimini md:gap-10 items-start justify-between mt-[34px] w-[93%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtBiminiNormal36"
              >
                Total Payable
              </Text>
              <Text
                className="mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
                size="txtBiminiBold36Red500"
              >
                #8550
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[247px] mt-16 rounded-[39px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
          color="red_500"
          size="md"
          variant="fill"
        >
          Checkout
        </Button>
        <Text
          className="mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-green-600"
          size="txtPoppinsSemiBold28"
        >
          Pay On Delivery
        </Text>
        <div className="flex flex-col font-poppins gap-8 items-center justify-center max-w-[1416px] mt-[49px] mx-auto pb-8 w-full">
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
                Lorem ipsum dolor sit amet tetur mattis vel dhc kd dkvd mcorper
                in aliquam nisi ipsum.
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
    </>
  );
};

export default CartPage;
