import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Clock16Icon = (props: SvgProps) => (
  <Svg
    width={16} // Set the width of the SVG
    height={16} // Set the height of the SVG
    viewBox="0 0 16 16" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99998 14.4C11.5346 14.4 14.4 11.5346 14.4 7.99998C14.4 4.46535 11.5346 1.59998 7.99998 1.59998C4.46535 1.59998 1.59998 4.46535 1.59998 7.99998C1.59998 11.5346 4.46535 14.4 7.99998 14.4ZM8.74998 3.99998C8.74998 3.58576 8.41419 3.24998 7.99998 3.24998C7.58576 3.24998 7.24998 3.58576 7.24998 3.99998V7.99998C7.24998 8.41419 7.58576 8.74998 7.99998 8.74998H11.2C11.6142 8.74998 11.95 8.41419 11.95 7.99998C11.95 7.58576 11.6142 7.24998 11.2 7.24998H8.74998V3.99998Z"
      fill="#111827" // Set the fill color as specified
    />
  </Svg>
);

export default Clock16Icon;
