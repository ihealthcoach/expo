import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const SortIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 7H21"
      stroke="#FCFEFE"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 12H18"
      stroke="#FCFEFE"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 17H14"
      stroke="#FCFEFE"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default SortIcon;
