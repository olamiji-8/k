import React from "react";

import { Button, Img, Input, Text } from "components";

const ComponentsPage = () => {
  return (
    <>
      <div className="bg-light_green-50 flex flex-col font-bimini items-start justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start mb-[54px] w-[95%] md:w-full">
          <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[102px] p-[21px] sm:px-5 rounded-lg w-[19%] md:w-full">
              <div className="flex flex-col gap-1.5 items-center justify-start mb-3.5 w-full">
                <Img
                  className="h-[230px] md:h-auto object-cover w-[62%] sm:w-full"
                  src="images/img_rectangle11_2.png"
                  alt="rectangleEleven"
                />
                <div className="flex flex-col gap-8 items-center justify-center w-auto">
                  <div className="flex flex-col gap-8 items-center justify-start w-auto">
                    <Text
                      className="max-w-[181px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center"
                      size="txtBiminiNormal25"
                    >
                      Golden Penny Noodles
                    </Text>
                    <Text
                      className="max-w-[288px] md:max-w-full text-base text-blue_gray-900 text-center"
                      size="txtPoppinsLight16"
                    >
                      Lorem ipsum dolor sit amet tetur mattis vel dhc kd.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[50px] items-center justify-center w-auto">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                      size="txtBiminiBold25Bluegray900"
                    >
                      #600
                    </Text>
                    <Button
                      className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[156px] rounded-[23px] text-center text-xl"
                      color="red_500"
                      size="xs"
                      variant="outline"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[70px] justify-start w-4/5 md:w-full">
              <Text
                className="md:ml-[0] ml-[334px] md:text-5xl text-[64px] text-red-500"
                size="txtBiminiBold64"
              >
                Web Components{" "}
              </Text>
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-red-500"
                  size="txtBiminiNormal35"
                >
                  Nav Bar
                </Text>
                <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[211px] items-center justify-between w-auto md:w-full">
                  <Img
                    className="h-[119px] md:h-auto object-cover w-[120px] sm:w-full"
                    src="images/img_micheal2062.png"
                    alt="micheal2062"
                  />
                  <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-end w-auto md:w-full">
                    <Input
                      name="searchbar"
                      placeholder="Search Foodstuff"
                      className="leading-[normal] p-0 placeholder:text-red-500_cc text-left text-xl w-full"
                      wrapClassName="border border-red-500_cc border-solid flex w-auto md:w-full"
                      suffix={
                        <Img
                          className="mt-0.5 mb-px h-[26px] ml-[35px]"
                          src="images/img_search.svg"
                          alt="Search"
                        />
                      }
                    ></Input>
                    <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-red-500 sm:text-xl w-auto"
                        size="txtPoppinsBold24"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtPoppinsRegular24"
                      >
                        Store
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtPoppinsRegular24"
                      >
                        About Us
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtPoppinsRegular24"
                      >
                        Blog
                      </Text>
                    </div>
                    <div className="bg-red-500 flex flex-row gap-6 items-center justify-center sm:px-5 px-6 py-2 rounded-[30px] w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start w-[30%] md:w-full">
            <div className="flex flex-col gap-[17px] items-start justify-start w-[48%] sm:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-red-500"
                size="txtBiminiNormal35"
              >
                Shopping Button
              </Text>
              <div className="border border-dashed border-deep_purple-A200 flex flex-col font-poppins gap-[27px] items-center justify-start p-5 rounded-[5px] w-[90%] md:w-full">
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[156px] rounded-[23px] text-center text-xl"
                  color="red_500"
                  size="xs"
                  variant="outline"
                >
                  Add To Cart
                </Button>
                <Button
                  className="border border-red-500 border-solid cursor-pointer font-semibold leading-[normal] min-w-[182px] rounded-[23px] text-center text-xl"
                  color="red_500"
                  size="xs"
                  variant="fill"
                >
                  Added To Cart
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start w-[48%] sm:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-red-500"
                size="txtBiminiNormal35"
              >
                Menu Button
              </Text>
              <div className="border border-dashed border-deep_purple-A200 flex flex-col gap-7 items-center justify-start p-5 rounded-[5px] w-full">
                <Button
                  className="cursor-pointer leading-[normal] rounded-[31px] sm:text-[35px] md:text-[37px] text-[39px] text-center w-[212px]"
                  color="red_500"
                  size="xs"
                  variant="fill"
                >
                  Pasta
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] rounded-[31px] sm:text-[35px] md:text-[37px] text-[39px] text-center w-[212px]"
                  color="red_500_cc"
                  size="xs"
                  variant="outline"
                >
                  Pasta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
