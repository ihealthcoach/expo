import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={25} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 25 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M9.82005 2.84004L4.43005 7.04004C3.53005 7.74004 2.80005 9.23004 2.80005 10.36V17.77C2.80005 20.09 4.69005 21.99 7.01005 21.99H18.59C20.91 21.99 22.8 20.09 22.8 17.78V10.5C22.8 9.29004 21.99 7.74004 21 7.05004L14.82 2.72004C13.42 1.74004 11.17 1.79004 9.82005 2.84004Z"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.8 17.99V14.99"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
