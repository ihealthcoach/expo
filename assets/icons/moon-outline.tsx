import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const MoonOutlineIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.7519 15.0019C20.597 15.4839 19.3296 15.75 18 15.75C12.6152 15.75 8.25 11.3848 8.25 5.99999C8.25 4.67039 8.51614 3.40296 8.99806 2.24805C5.47566 3.71785 3 7.19481 3 11.25C3 16.6348 7.36522 21 12.75 21C16.8052 21 20.2821 18.5243 21.7519 15.0019Z"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MoonOutlineIcon;
