import React from "react";

import { Button, Img, Text } from "components";

const StoreCTAPage = () => {
  return (
    <>
      <div className="bg-light_green-50 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[169px] items-center justify-start mx-auto md:px-10 px-12 sm:px-5 w-auto sm:w-full md:w-full">
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
              Lorem ipsum dolor sit amet tetur mttis vel dhc kd dkvd mcorper in
              aliquam vd mcorper.
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
              style={{ backgroundImage: "url('images/img_group2.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start mb-[150px] mt-[3px] p-[9px] w-[49%] md:w-full"
                style={{ backgroundImage: "url('images/img_group3.svg')" }}
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
    </>
  );
};

export default StoreCTAPage;
