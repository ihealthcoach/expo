import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ClockLinearVuesax = (props: SvgProps) => (
  <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
    <Path
      d="M11 6C11 8.76 8.76 11 6 11C3.24 11 1 8.76 1 6C1 3.24 3.24 1 6 1C8.76 1 11 3.24 11 6Z"
      // stroke="#9CA3AF"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.85494 7.58988L6.30494 6.66488C6.03494 6.50488 5.81494 6.11988 5.81494 5.80488V3.75488"
      // stroke="#9CA3AF"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ClockLinearVuesax;
