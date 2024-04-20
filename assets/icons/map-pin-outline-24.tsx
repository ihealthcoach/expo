import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const MapPinOutlineIcon = (props: SvgProps) => (
  <Svg
    width={25} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 25 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M15.3334 10.5C15.3334 12.1569 13.9902 13.5 12.3334 13.5C10.6765 13.5 9.33337 12.1569 9.33337 10.5C9.33337 8.84315 10.6765 7.5 12.3334 7.5C13.9902 7.5 15.3334 8.84315 15.3334 10.5Z"
      stroke="#6B7280" // Set the stroke color as specified
      strokeWidth="1.5" // Set the stroke width as specified
      strokeLinecap="round" // Set the stroke line cap as specified
      strokeLinejoin="round" // Set the stroke line join as specified
    />
    <Path
      d="M19.8334 10.5C19.8334 17.6421 12.3334 21.75 12.3334 21.75C12.3334 21.75 4.83337 17.6421 4.83337 10.5C4.83337 6.35786 8.19124 3 12.3334 3C16.4755 3 19.8334 6.35786 19.8334 10.5Z"
      stroke="#6B7280" // Set the stroke color as specified
      strokeWidth="1.5" // Set the stroke width as specified
      strokeLinecap="round" // Set the stroke line cap as specified
      strokeLinejoin="round" // Set the stroke line join as specified
    />
  </Svg>
);

export default MapPinOutlineIcon;
