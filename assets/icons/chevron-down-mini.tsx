import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const ChevronDownIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.18414 5.76711C4.423 5.53743 4.80282 5.54488 5.0325 5.78374L8 8.93395L10.9675 5.78374C11.1972 5.54488 11.577 5.53743 11.8159 5.76711C12.0547 5.99679 12.0622 6.37661 11.8325 6.61548L8.4325 10.2155C8.31938 10.3331 8.16321 10.3996 8 10.3996C7.83679 10.3996 7.68062 10.3331 7.5675 10.2155L4.1675 6.61548C3.93782 6.37661 3.94527 5.99679 4.18414 5.76711Z"
      fill="#111827"
    />
  </Svg>
);

export default ChevronDownIcon;
