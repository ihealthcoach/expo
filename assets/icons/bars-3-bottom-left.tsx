import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Bars3BottomLeftIcon = (props: SvgProps) => (
  <Svg
    width={30} // Adjusted to match original SVG width
    height={30} // Adjusted to match original SVG height
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 7.125C3 6.50368 3.50368 6 4.125 6H25.875C26.4963 6 27 6.50368 27 7.125C27 7.74632 26.4963 8.25 25.875 8.25H4.125C3.50368 8.25 3 7.74632 3 7.125ZM3 22.875C3 22.2537 3.50368 21.75 4.125 21.75H15.375C15.9963 21.75 16.5 22.2537 16.5 22.875C16.5 23.4963 15.9963 24 15.375 24H4.125C3.50368 24 3 23.4963 3 22.875Z"
      fill="#0F172A"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 15C3 14.3787 3.50368 13.875 4.125 13.875H25.875C26.4963 13.875 27 14.3787 27 15C27 15.6213 26.4963 16.125 25.875 16.125H4.125C3.50368 16.125 3 15.6213 3 15Z"
      fill="#0F172A"
    />
  </Svg>
);

export default Bars3BottomLeftIcon;
