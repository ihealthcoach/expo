import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const PlusCircleIcon = (props: SvgProps) => (
  <Svg
    width={24} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 24 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M12 9V15M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 12 3 7.02944 21 3 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlusCircleIcon;
