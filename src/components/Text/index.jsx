import React from "react";

const sizeClasses = {
  txtBiminiBold25Bluegray900: "font-bimini font-bold",
  txtBiminiBold64: "font-bimini font-bold",
  txtBiminiNormal20Bluegray900: "font-bimini font-normal",
  txtBiminiBold20: "font-bimini font-bold",
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsLight13: "font-light font-poppins",
  txtBiminiBold25: "font-bimini font-bold",
  txtPoppinsRegular20Red500cc: "font-normal font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtBiminiBold49: "font-bimini font-bold",
  txtBiminiBold49WhiteA700: "font-bimini font-bold",
  txtBiminiBold36Red500: "font-bimini font-bold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular20Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtBiminiNormal20: "font-bimini font-normal",
  txtBiminiNormal49Black900: "font-bimini font-normal",
  txtBiminiNormal61: "font-bimini font-normal",
  txtMontserratBold7: "font-bold font-montserrat",
  txtBiminiNormal49Red500: "font-bimini font-normal",
  txtMontserratBold506: "font-bold font-montserrat",
  txtBiminiNormal49: "font-bimini font-normal",
  txtBiminiNormal28: "font-bimini font-normal",
  txtBiminiNormal25: "font-bimini font-normal",
  txtBiminiBold36: "font-bimini font-bold",
  txtBiminiBold39: "font-bimini font-bold",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtBiminiNormal49Bluegray900: "font-bimini font-normal",
  txtBiminiNormal35: "font-bimini font-normal",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtBiminiNormal31: "font-bimini font-normal",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtBiminiNormal16: "font-bimini font-normal",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtBiminiNormal36: "font-bimini font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
