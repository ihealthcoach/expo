import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface PlusIconProps extends SvgProps {
  fill?: string;
}

const PlusIcon = (props: PlusIconProps) => (
  <Svg
    width={20} // Adjusted to match the SVG's width
    height={20} // Set the height of the SVG
    viewBox="0 0 20 20" // Set the viewBox to match the SVG's dimensions
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M10.75 4.75C10.75 4.33579 10.4142 4 10 4C9.58579 4 9.25 4.33579 9.25 4.75V9.25H4.75C4.33579 9.25 4 9.58579 4 10C4 10.4142 4.33579 10.75 4.75 10.75L9.25 10.75V15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V10.75L15.25 10.75C15.6642 10.75 16 10.4142 16 10C16 9.58579 15.6642 9.25 15.25 9.25H10.75V4.75Z"
      fill={props.fill || "#000"} // Set the fill color
    />
  </Svg>
);

export default PlusIcon;
