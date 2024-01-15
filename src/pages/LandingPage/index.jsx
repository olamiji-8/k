import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import LandingPageItem from "components/LandingPageItem";

const LandingPagePage = () => {
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
      <div className="bg-light_green-50 flex flex-col font-poppins gap-8 items-center justify-end mx-auto pt-3 w-full">
        <Header className="flex flex-row md:gap-10 gap-[211px] items-center justify-center md:px-5 w-full" />
        <div className="flex font-bimini h-[4059px] md:h-[6323px] sm:h-[9135px] justify-end md:px-5 relative w-full">
          <Img
            className="absolute h-[344px] left-[0] object-cover top-[3%]"
            src="images/img_group11.png"
            alt="groupEleven"
          />
          <Img
            className="absolute h-[344px] object-cover right-[0] top-[20%]"
            src="images/img_group11.png"
            alt="groupTen"
          />
          <Img
            className="h-[408px] mb-[1027px] mt-auto object-cover"
            src="images/img_group12.png"
            alt="groupTwelve"
          />
          <div className="absolute flex flex-col md:gap-10 gap-20 h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[183px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="max-w-[533px] md:max-w-full md:text-5xl text-[61px] text-blue_gray-900"
                  size="txtBiminiNormal61"
                >
                  <span className="text-blue_gray-900 font-bimini text-left font-bold">
                    One{" "}
                  </span>
                  <span className="text-green-600 font-bimini text-left font-bold">
                    Stop Shop
                  </span>
                  <span className="text-blue_gray-900 font-bimini text-left font-bold">
                    {" "}
                    For Everything{" "}
                  </span>
                  <span className="text-red-500 font-bimini text-left font-bold">
                    Foodstuff
                  </span>
                  <span className="text-blue_gray-900 font-bimini text-left font-bold">
                    {" "}
                    at your{" "}
                  </span>
                  <span className="text-yellow-800 font-bimini text-left font-bold">
                    Convenience
                  </span>
                </Text>
                <Text
                  className="max-w-[533px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                  size="txtPoppinsRegular25"
                >
                  Lorem ipsum dolor sit amet tetur mattis vel dhc kd dkvd
                  mcorper in aliquam.
                </Text>
                <Button
                  className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[262px] rounded-[39px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
                  color="red_500"
                  size="md"
                  variant="fill"
                >
                  Order Now
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
                <div className="h-[608px] relative w-full">
                  <div className="absolute h-[608px] inset-[0] justify-center m-auto w-[88%] sm:w-full">
                    <div className="absolute bg-green-600 h-[576px] inset-[0] justify-center m-auto rounded-[50%] w-[576px]"></div>
                    <Img
                      className="absolute h-[608px] inset-[0] justify-center m-auto object-cover rounded-[313px] w-[99%]"
                      src="images/img_deliveryconcep.png"
                      alt="deliveryconcep"
                    />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[12%] flex flex-col items-center justify-start left-[0] rounded-lg w-auto">
                    <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                      <div className="flex flex-row font-bimini gap-4 items-center justify-start w-auto">
                        <Img
                          className="h-[34px] md:h-auto object-cover w-[34px]"
                          src="images/img_fooddelivery1.png"
                          alt="fooddeliveryOne"
                        />
                        <Text
                          className="text-black-900 text-xl w-auto"
                          size="txtBiminiNormal20"
                        >
                          Fast Delivery
                        </Text>
                      </div>
                      <Text
                        className="max-w-[167px] md:max-w-full text-[13px] text-blue_gray-400 tracking-[-0.33px]"
                        size="txtPoppinsRegular13"
                      >
                        Lorem ipsum dolor sitamet ttur tis velof fnhc fnhc.
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[0] rounded-lg top-[26%] w-auto">
                    <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                      <div className="flex flex-row font-bimini gap-4 items-center justify-start w-full">
                        <Img
                          className="h-[34px] md:h-auto object-cover w-[34px]"
                          src="images/img_fooddelivery1.png"
                          alt="fooddeliveryOne_One"
                        />
                        <Text
                          className="text-black-900 text-xl w-auto"
                          size="txtBiminiNormal20"
                        >
                          Best Quality
                        </Text>
                      </div>
                      <Text
                        className="max-w-[167px] md:max-w-full text-[13px] text-blue_gray-400 tracking-[-0.33px]"
                        size="txtPoppinsRegular13"
                      >
                        Lorem ipsum dolor sitamet ttur tis velof fnhc fnhc.
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[4%] p-2 rounded-lg top-[15%] w-[31%]">
                    <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                      <div className="flex flex-row font-bimini gap-4 items-center justify-start w-auto">
                        <Img
                          className="h-[34px] md:h-auto object-cover w-[34px]"
                          src="images/img_fooddelivery1_34x34.png"
                          alt="fooddeliveryOne_Two"
                        />
                        <Text
                          className="text-black-900 text-xl w-auto"
                          size="txtBiminiNormal20"
                        >
                          Convenience
                        </Text>
                      </div>
                      <Text
                        className="max-w-[170px] md:max-w-full text-[13px] text-blue_gray-400 tracking-[-0.33px]"
                        size="txtPoppinsRegular13"
                      >
                        Lorem ipsum dolor sitamet ttur tis velof fnhc fnhc.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[49px] text-blue_gray-900 w-auto"
                  size="txtBiminiBold49"
                >
                  Our Menu
                </Text>
                <div className="gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start w-auto md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] rounded-[31px] sm:text-[35px] md:text-[37px] text-[39px] text-center w-full"
                    color="red_500"
                    size="xs"
                    variant="fill"
                  >
                    Pasta
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] rounded-[31px] sm:text-[35px] md:text-[37px] text-[39px] text-center w-full"
                    color="red_500_cc"
                    size="xs"
                    variant="outline"
                  >
                    Groceries
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] rounded-[31px] sm:text-[35px] md:text-[37px] text-[39px] text-center w-full"
                    color="red_500_cc"
                    size="xs"
                    variant="outline"
                  >
                    Beverages
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] rounded-[31px] sm:text-[35px] md:text-[37px] text-[39px] text-center w-full"
                    color="red_500_cc"
                    size="xs"
                    variant="outline"
                  >
                    Groceries
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    {landingPageItemPropList.map((props, index) => (
                      <React.Fragment key={`LandingPageItem${index}`}>
                        <LandingPageItem
                          className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 rounded-lg w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-light_green-50 flex md:flex-col flex-row font-poppins md:gap-10 gap-[169px] items-center justify-between w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-center w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="max-w-[443px] md:max-w-full sm:text-[39px] md:text-[45px] text-[49px] text-blue_gray-900"
                      size="txtBiminiBold49"
                    >
                      <span className="text-blue_gray-900 font-bimini text-left font-normal">
                        Save{" "}
                      </span>
                      <span className="text-green-600 font-bimini text-left font-bold">
                        time
                      </span>
                      <span className="text-blue_gray-900 font-bimini text-left font-normal">
                        {" "}
                        &{" "}
                      </span>
                      <span className="text-red-500 font-bimini text-left font-bold">
                        money
                      </span>
                      <span className="text-blue_gray-900 font-bimini text-left font-normal">
                        {" "}
                        on Foodstuff
                      </span>
                    </Text>
                    <Text
                      className="max-w-[486px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                      size="txtPoppinsRegular25"
                    >
                      Lorem ipsum dolor sit amet tetur mttis vel dhc kd dkvd
                      mcorper in aliquam vd mcorper.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] rounded-[39px] sm:text-[27px] md:text-[29px] text-[31px] text-center w-[262px]"
                    color="red_500"
                    size="md"
                    variant="fill"
                  >
                    Check Store
                  </Button>
                </div>
                <div className="font-montserrat md:h-[300px] sm:h-[422px] h-[500px] p-[9px] relative rotate-[180deg] w-[500px] sm:w-full">
                  <div className="absolute md:h-[300px] h-[422px] inset-[0] justify-center m-auto w-[92%] sm:w-full">
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[95%]">
                      <div className="flex flex-col md:gap-10 gap-[332px] justify-start w-full">
                        <Img
                          className="h-[89px] md:ml-[0] ml-[213px]"
                          src="images/img_freepikbirdsinject31.svg"
                          alt="freepikbirdsinj"
                        />
                        <Img
                          className="h-px"
                          src="images/img_freepikfloorinject31.svg"
                          alt="freepikfloorinj"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[307px] items-start justify-start left-[0] p-9 sm:px-5 top-[7%] w-[59%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start mb-[150px] mt-[3px] p-[9px] w-[49%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group3.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start mb-[13px] mt-[3px] rotate-[180deg] w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[7px] text-blue_gray-900_01"
                              size="txtMontserratBold7"
                            >
                              DELIVERY ADDRESS
                            </Text>
                            <div className="flex flex-row items-start justify-evenly mt-1 w-[95%] md:w-full">
                              <Text
                                className="text-[5.06px] text-blue_gray-900_01"
                                size="txtMontserratBold506"
                              >
                                ADDRESS:
                              </Text>
                              <Img
                                className="h-px mt-0.5"
                                src="images/img_vector.svg"
                                alt="vector"
                              />
                            </div>
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[69%] md:w-full">
                              <Text
                                className="text-[5.06px] text-blue_gray-900_01"
                                size="txtMontserratBold506"
                              >
                                CITY:
                              </Text>
                              <Img
                                className="h-px"
                                src="images/img_vector.svg"
                                alt="vector_One"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start w-[73%] md:w-full">
                              <Text
                                className="text-[5.06px] text-blue_gray-900_01"
                                size="txtMontserratBold506"
                              >
                                COUNTRY:
                              </Text>
                              <Img
                                className="h-px ml-[3px] mt-[3px]"
                                src="images/img_vector.svg"
                                alt="vector_Two"
                              />
                            </div>
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <Text
                                className="text-[5.06px] text-blue_gray-900_01"
                                size="txtMontserratBold506"
                              >
                                POST CODE :
                              </Text>
                              <Img
                                className="h-px mt-[5px]"
                                src="images/img_vector.svg"
                                alt="vector_Three"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[53px] left-[15%] top-[14%]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Img
                    className="absolute bottom-[6%] h-[283px] right-[2%]"
                    src="images/img_group2.svg"
                    alt="freepikcharacte"
                  />
                </div>
              </div>
            </div>
            <div className="bg-green-600 flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-auto md:w-full">
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
                      Lorem ipsum dolor sit ame ctetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis aliquam, purus
                      sit amet luctus venenatis aliquam, purus sit amet luctus{" "}
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
                        Kitchen Alchemy: Culinary Experiments Unveiled
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
                        <>
                          Unleash your inner chef and dive into the world of
                          experimental cooking with &quot;Kitchen Alchemy.&quot;
                          Here, we push the boundaries of traditional recipes,
                          try out unique flavor combinations, and share the
                          successes (and the occasional mishaps) of our culinary
                          experiments. Join us in celebrating the joy of
                          fearless cooking!
                        </>
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
                        Sweet Escapes: A Dessert Adventure
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
                        <>
                          Indulge your sweet tooth and join us on a delectable
                          journey through the world of desserts! &quot;Sweet
                          Escapes&quot; is a haven for dessert enthusiasts. From
                          classic cakes to exotic pastries, we&#39;ll explore
                          the art of sweet-making, share irresistible recipes,
                          and discover the cultural stories behind these
                          delightful treats.
                        </>
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
                        className="leading-[30.00px] max-w-[267px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                        size="txtBiminiBold25"
                      >
                        Backyard Harvest Chronicles
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
                        <>
                          Get ready to transform your garden into a bountiful
                          paradise! &quot;Backyard Harvest Chronicles&quot; is
                          your companion in sustainable and homegrown living.
                          From planting seeds to savoring the harvest, we&#39;ll
                          share gardening tips, seasonal recipes, and stories of
                          the joys (and occasional challenges) of cultivating
                          your own food.
                        </>
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
                        className="leading-[30.00px] max-w-[244px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                        size="txtBiminiBold25"
                      >
                        Plant-Powered Paradise
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
                        <>
                          Welcome to a green and delicious haven!
                          &quot;Plant-Powered Paradise&quot; is your go-to guide
                          for exploring the wonders of plant-based eating.
                          Whether you&#39;re a seasoned vegan or just looking to
                          incorporate more veggies into your diet, join us as we
                          whip up mouthwatering recipes, share insightful tips,
                          and celebrate the beauty of cruelty-free cuisine.
                        </>
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
    </>
  );
};

export default LandingPagePage;
