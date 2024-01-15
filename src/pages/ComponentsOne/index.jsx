import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, PagerIndicator, Text } from "components";

const ComponentsOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-light_green-50 flex flex-col font-bimini items-start justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[25px] justify-start mb-32 w-[68%] md:w-full">
          <Text
            className="md:ml-[0] ml-[396px] md:text-5xl text-[64px] text-red-500"
            size="txtBiminiBold64"
          >
            Mobile Components{" "}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[27%] md:w-full">
              <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[18px] items-center justify-start w-[96%] md:w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-[71%] sm:w-full"
                      src="images/img_rectangle11_230x178.png"
                      alt="rectangleEleven"
                    />
                    <div className="flex flex-col gap-6 items-center justify-center w-auto">
                      <div className="flex flex-col gap-6 items-center justify-start w-auto">
                        <Text
                          className="max-w-[181px] md:max-w-full text-blue_gray-900 text-center text-xl"
                          size="txtBiminiNormal20Bluegray900"
                        >
                          Golden Penny Macaroni
                        </Text>
                        <Text
                          className="max-w-[213px] md:max-w-full text-[13px] text-blue_gray-900 text-center"
                          size="txtPoppinsLight13"
                        >
                          Lorem ipsum dolor sit amet tetur mattis vel dhc kd.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-center w-auto">
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtBiminiBold20"
                        >
                          #800
                        </Text>
                        <Button
                          className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[132px] rounded-[18px] text-base text-center"
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
                <Text
                  className="sm:text-[27px] md:text-[29px] text-[31px] text-red-500"
                  size="txtBiminiNormal31"
                >
                  Shopping Button
                </Text>
              </div>
              <div className="border border-dashed border-deep_purple-A200 flex flex-col font-poppins gap-[21px] items-center justify-start p-5 rounded-[5px] w-[76%] md:w-full">
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[132px] rounded-[18px] text-base text-center"
                  color="red_500"
                  size="xs"
                  variant="outline"
                >
                  Add To Cart
                </Button>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[153px] rounded-[18px] text-base text-center"
                  color="red_500"
                  size="xs"
                  variant="fill"
                >
                  Added To Cart
                </Button>
              </div>
            </div>
            <div className="border border-dashed border-deep_purple-A200 flex md:flex-1 flex-col md:gap-10 gap-[109px] items-start justify-start ml-20 md:ml-[0] md:mt-0 mt-[15px] p-5 rounded-[5px] w-[49%] md:w-full">
              <div className="flex flex-row gap-[293px] items-center justify-between w-auto sm:w-full">
                <Img
                  className="h-[72px] md:h-auto object-cover w-[73px]"
                  src="images/img_micheal2062.png"
                  alt="micheal2062"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_megaphone.svg"
                  alt="megaphone"
                />
              </div>
              <div className="bg-light_green-50 flex flex-col gap-[41px] items-start justify-start p-3 w-full">
                <div className="flex flex-row gap-[249px] items-center justify-between ml-2.5 md:ml-[0] w-auto sm:w-full">
                  <Img
                    className="h-[92px] md:h-auto object-cover w-[93px]"
                    src="images/img_micheal2062.png"
                    alt="micheal2062_One"
                  />
                  <Img
                    className="h-11 w-11"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-col gap-9 items-start justify-start mb-12 ml-2.5 md:ml-[0] w-auto">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 w-auto"
                    size="txtBiminiNormal25"
                  >
                    Home
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 w-auto"
                    size="txtBiminiNormal25"
                  >
                    Store
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 w-auto"
                    size="txtBiminiNormal25"
                  >
                    About Us
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 w-auto"
                    size="txtBiminiNormal25"
                  >
                    Blog
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[141px] rounded-[23px]"
                    onClick={() => navigate("/cart")}
                    rightIcon={
                      <Img
                        className="h-6 ml-6"
                        src="images/img_cart.svg"
                        alt="cart"
                      />
                    }
                    color="red_500"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-poppins font-semibold leading-[normal] text-left text-xl">
                      Cart
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[41px] items-end justify-start ml-10 md:ml-[0] md:mt-0 mt-[22px] w-[13%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200 flex flex-col items-center justify-start p-[15px] rounded-[5px] w-[92%] md:w-full">
                <PagerIndicator
                  className="flex gap-1 h-[18px] items-center justify-center w-[72px]"
                  count={4}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-red-500_cc w-[18px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-blue_gray-100 w-3.5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <PagerIndicator
                  className="flex gap-1 h-[18px] items-center justify-center mt-[13px] w-[72px]"
                  count={4}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-red-500_cc w-[18px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-blue_gray-100 w-3.5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <PagerIndicator
                  className="flex gap-1 h-[18px] items-center justify-center mt-2 w-[72px]"
                  count={4}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-red-500_cc w-[18px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-blue_gray-100 w-3.5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <PagerIndicator
                  className="flex gap-1 h-[18px] items-center justify-center mb-[5px] mt-2 w-[72px]"
                  count={4}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-red-500_cc w-[18px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-blue_gray-100 w-3.5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
              <div className="border border-dashed border-deep_purple-A200 flex flex-row items-center justify-start mr-[5px] p-5 rounded-[5px] w-[96%] md:w-full">
                <div className="bg-blue_gray-100 h-3.5 my-0.5 rounded-[50%] w-3.5"></div>
                <Img
                  className="h-2.5 ml-[11px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <div className="bg-red-500_cc h-[18px] ml-2 rounded-[50%] w-[18px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsOnePage;
