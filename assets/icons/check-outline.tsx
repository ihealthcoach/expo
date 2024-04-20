import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CheckOutlineIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M3.75 10.625L8.75 15.625L16.25 4.375"
      stroke="#FCFEFE"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckOutlineIcon;
