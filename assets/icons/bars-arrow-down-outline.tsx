import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const BarsArrowDownIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M2.5 3.75H14.375M2.5 7.5H10.625M2.5 11.25H10.625M14.375 7.5V17.5M14.375 17.5L11.25 14.375M14.375 17.5L17.5 14.375"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BarsArrowDownIcon;
