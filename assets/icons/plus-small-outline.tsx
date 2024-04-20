import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const PlusSmallIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4.375C10.3452 4.375 10.625 4.65482 10.625 5V9.375H15C15.3452 9.375 15.625 9.65482 15.625 10C15.625 10.3452 15.3452 10.625 15 10.625H10.625V15C10.625 15.3452 10.3452 15.625 10 15.625C9.65482 15.625 9.375 15.3452 9.375 15V10.625H5C4.65482 10.625 4.375 10.3452 4.375 10C4.375 9.65482 4.65482 9.375 5 9.375L9.375 9.375V5C9.375 4.65482 9.65482 4.375 10 4.375Z"
      fill="#FCFEFE"
    />
  </Svg>
);

export default PlusSmallIcon;
