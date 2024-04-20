import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CreditCardOutlineIcon = (props: SvgProps) => (
  <Svg
    width={24} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 24 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
      stroke="#111827" // Set the stroke color as specified
      strokeWidth={1.5} // Set the stroke width as specified
      strokeLinecap="round" // Set the strokeLinecap as specified
      strokeLinejoin="round" // Set the strokeLinejoin as specified
    />
  </Svg>
);

export default CreditCardOutlineIcon;
