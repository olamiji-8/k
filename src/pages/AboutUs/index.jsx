import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row sm:gap-10 md:gap-10 gap-[171px] items-start justify-between mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[492px] bg-red-500_19 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[246px] top-[0]">
          <div className="md:h-[493px] h-[538px] relative w-full">
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
                src="images/img_rectangle13.png"
                alt="rectangleThirteen"
              />
            </div>
          </div>
          <div className="bg-red-500 h-[414px] mb-[30px] ml-12 mr-[31px] rounded-[207px] w-[413px]"></div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-[21px] items-start justify-start md:px-5 w-full">
          <Text
            className="max-w-[632px] md:max-w-full sm:text-[39px] md:text-[45px] text-[49px] text-blue_gray-900"
            size="txtBiminiNormal49Bluegray900"
          >
            An About Us Content For Kukeat (Cook n’ Eat)
          </Text>
          <Text
            className="max-w-[700px] md:max-w-full text-blue_gray-900 text-xl"
            size="txtPoppinsRegular20Bluegray900"
          >
            Lorem ipsum dolor sit amet consectetur. Elit porttitor suspendisse
            sed orci risus ipsum nulla ullamcorper. Senectus vel accumsan magna
            ut. Tincidunt rutrum adipiscing nulla eget. Lacinia sagittis risus
            at suspendisse libero purus. Vel magna quam imperdiet at quis.
            Viverra elementum eget et tellus sed. Elit eu ac tortor pellentesque
            erat ullamcorper feugiat ultricies.{" "}
          </Text>
          <Button
            className="common-pointer cursor-pointer font-poppins font-semibold leading-[normal] min-w-[238px] rounded-[39px] sm:text-[27px] md:text-[29px] text-[31px] text-center"
            onClick={() => navigate("/aboutusone")}
            color="red_500"
            size="md"
            variant="fill"
          >
            About Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
