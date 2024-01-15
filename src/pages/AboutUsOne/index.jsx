import React from "react";

import { Img, Line, List, Text } from "components";
import Header from "components/Header";

const AboutUsOnePage = () => {
  return (
    <>
      <div className="bg-light_green-50 flex flex-col font-poppins gap-12 items-center justify-end mx-auto pt-3 w-full">
        <Header className="flex flex-row md:gap-10 gap-[211px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-auto md:w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1416px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[233px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start w-auto md:w-full">
                <Text
                  className="max-w-[632px] md:max-w-full md:text-5xl text-[61px] text-blue_gray-900"
                  size="txtBiminiNormal61"
                >
                  An About Us Content For Kukeat (Cook n’ Eat)
                </Text>
                <Text
                  className="max-w-[691px] md:max-w-full text-blue_gray-900 text-xl"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. Elit porttitor
                  suspendisse sed orci risus ipsum nulla ullamcorper. Senectus
                  vel accumsan magna ut. Tincidunt rutrum adipiscing nulla eget.
                  Lacinia sagittis risus at suspendisse libero purus.{" "}
                </Text>
              </div>
              <div className="md:h-[493px] h-[538px] relative w-[35%] md:w-full">
                <div className="md:h-[493px] h-[538px] m-auto w-full">
                  <div className="md:h-[493px] h-[538px] m-auto w-full">
                    <div className="absolute bg-red-500_19 bottom-[0] h-[493px] inset-x-[0] mx-auto rounded-[246px] w-[492px]"></div>
                    <Img
                      className="absolute h-[417px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-3/5"
                      src="images/img_rectangle14.png"
                      alt="rectangleFourteen"
                    />
                  </div>
                  <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[81%]">
                    <Img
                      className="h-[408px] md:h-auto object-cover rounded-bl-[204px] rounded-br-[204px] w-full"
                      src="images/img_rectangle13_408x394.png"
                      alt="rectangleThirteen"
                    />
                  </div>
                </div>
                <div className="absolute bg-red-500 bottom-[6%] h-[414px] inset-x-[0] mx-auto rounded-[207px] w-[413px]"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[156px] items-center justify-between w-auto md:w-full">
              <Img
                className="h-[340px] sm:h-auto object-cover rounded-[17px] w-[569px] md:w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo"
              />
              <div className="flex flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="md:text-5xl text-[61px] text-blue_gray-900 w-auto"
                  size="txtBiminiNormal61"
                >
                  Our Brand Values
                </Text>
                <Text
                  className="max-w-[691px] md:max-w-full text-blue_gray-900 text-xl"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. Elit porttitor
                  suspendisse sed orci risus ipsum nulla ullamcorper. Senectus
                  vel accumsan magna ut. Tincidunt rutrum adipiscing nulla eget.
                  Lacinia sagittis risus at suspendisse libero purus.{" "}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[156px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="md:text-5xl text-[61px] text-blue_gray-900 w-auto"
                  size="txtBiminiNormal61"
                >
                  Why Choose Us
                </Text>
                <Text
                  className="max-w-[691px] md:max-w-full text-blue_gray-900 text-xl"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. Elit porttitor
                  suspendisse sed orci risus ipsum nulla ullamcorper. Senectus
                  vel accumsan magna ut. Tincidunt rutrum adipiscing nulla eget.
                  Lacinia sagittis risus at suspendisse libero purus.{" "}
                </Text>
              </div>
              <Img
                className="h-[340px] sm:h-auto object-cover rounded-[17px] w-[569px] md:w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo_One"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[156px] items-center justify-between w-auto md:w-full">
              <Img
                className="h-[340px] sm:h-auto object-cover rounded-[17px] w-[569px] md:w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo_Two"
              />
              <div className="flex flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="md:text-5xl text-[61px] text-blue_gray-900 w-auto"
                  size="txtBiminiNormal61"
                >
                  Our Story
                </Text>
                <Text
                  className="max-w-[691px] md:max-w-full text-blue_gray-900 text-xl"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  Lorem ipsum dolor sit amet consectetur. Elit porttitor
                  suspendisse sed orci risus ipsum nulla ullamcorper. Senectus
                  vel accumsan magna ut. Tincidunt rutrum adipiscing nulla eget.
                  Lacinia sagittis risus at suspendisse libero purus.{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-green-600 flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-12 items-center justify-start max-w-[1417px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col font-bimini items-start justify-start w-auto">
                    <Text
                      className="sm:text-[39px] md:text-[45px] text-[49px] text-white-A700 w-auto"
                      size="txtBiminiNormal49"
                    >
                      Blog
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[973px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtPoppinsRegular20"
                  >
                    Lorem ipsum dolor sit ame ctetur adipiscing elit ut aliquam,
                    purus sit amet luctus venenatis aliquam, purus sit amet
                    luctus venenatis aliquam, purus sit amet luctus{" "}
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-auto">
                  <Img
                    className="h-[253px] sm:h-auto object-cover rounded-[20px] w-[309px] md:w-full"
                    src="images/img_image.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-4 items-start justify-center py-6 w-auto">
                    <Text
                      className="leading-[30.00px] max-w-[326px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtBiminiBold25"
                    >
                      Follow This Formular For A Winning Fit Everytime
                    </Text>
                    <div className="flex flex-col font-poppins items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_iconscalender.svg"
                          alt="iconscalender"
                        />
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtPoppinsMedium12"
                        >
                          12 August 2023
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[337px] md:max-w-full text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Lorem ipsum dolor sit ame ctetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis....
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Read Article
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Img
                    className="h-[253px] sm:h-auto object-cover rounded-[20px] w-[309px] md:w-full"
                    src="images/img_image_253x309.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-4 items-start justify-center py-6 w-auto">
                    <Text
                      className="leading-[30.00px] max-w-[326px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtBiminiBold25"
                    >
                      Follow This Formular For A Winning Fit Everytime
                    </Text>
                    <div className="flex flex-col font-poppins items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_iconscalender.svg"
                          alt="iconscalender"
                        />
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtPoppinsMedium12"
                        >
                          12 August 2023
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[337px] md:max-w-full text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Lorem ipsum dolor sit ame ctetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis....
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Read Article
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Img
                    className="h-[253px] sm:h-auto object-cover rounded-[20px] w-[309px] md:w-full"
                    src="images/img_image_1.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-4 items-start justify-center py-6 w-auto">
                    <Text
                      className="leading-[30.00px] max-w-[326px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtBiminiBold25"
                    >
                      Follow This Formular For A Winning Fit Everytime
                    </Text>
                    <div className="flex flex-col font-poppins items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_iconscalender.svg"
                          alt="iconscalender"
                        />
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtPoppinsMedium12"
                        >
                          12 August 2023
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[337px] md:max-w-full text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Lorem ipsum dolor sit ame ctetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis....
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Read Article
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Img
                    className="h-[253px] sm:h-auto object-cover rounded-[20px] w-[309px] md:w-full"
                    src="images/img_image_2.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-4 items-start justify-center py-6 w-auto">
                    <Text
                      className="leading-[30.00px] max-w-[326px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtBiminiBold25"
                    >
                      Follow This Formular For A Winning Fit Everytime
                    </Text>
                    <div className="flex flex-col font-poppins items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_iconscalender.svg"
                          alt="iconscalender"
                        />
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtPoppinsMedium12"
                        >
                          12 August 2023
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[337px] md:max-w-full text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Lorem ipsum dolor sit ame ctetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis....
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Read Article
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center max-w-[1416px] mx-auto pb-8 md:px-5 w-full">
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
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsRegular20Bluegray900"
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
    </>
  );
};

export default AboutUsOnePage;
