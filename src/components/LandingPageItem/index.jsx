import React from "react";

import { Button, Img, Text } from "components";

const LandingPageItem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-center justify-start mb-3.5 w-full">
          <Img
            className="h-[230px] md:h-auto object-cover w-[62%] sm:w-full"
            alt="rectangleEleven"
            src={props?.userimage}
          />
          <div className="flex flex-col gap-8 items-center justify-center w-auto">
            <div className="flex flex-col gap-8 items-center justify-start w-auto">
              <Text
                className="max-w-[181px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center"
                size="txtBiminiNormal25"
              >
                {props?.productname}
              </Text>
              <Text
                className="max-w-[288px] md:max-w-full text-base text-blue_gray-900 text-center"
                size="txtPoppinsLight16"
              >
                {props?.productdescription}
              </Text>
            </div>
            <div className="flex flex-row gap-[50px] items-center justify-center w-auto">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 text-center w-auto"
                size="txtBiminiBold25Bluegray900"
              >
                {props?.productprice}
              </Text>
              <Button
                className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[156px] rounded-[23px] text-center text-xl"
                color="red_500"
                size="xs"
                variant="outline"
              >
                {props?.addtocartbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageItem.defaultProps = {
  userimage: "images/img_rectangle11.png",
  productname: "Golden Penny Noodles",
  productdescription: "Lorem ipsum dolor sit amet tetur mattis vel dhc kd.",
  productprice: "#600",
  addtocartbutton: "Add To Cart",
};

export default LandingPageItem;
