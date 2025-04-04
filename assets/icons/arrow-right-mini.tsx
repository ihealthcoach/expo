import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

interface ArrowRightIconProps extends SvgProps {
  fill?: string;
  width?: number;
  height?: number;
}

const ArrowRightIcon = ({
  width,
  height,
  fill,
  ...props
}: ArrowRightIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 14 15" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.09998 7.50001C2.09998 7.21006 2.33503 6.97501 2.62498 6.97501L10.0715 6.97501L7.16109 4.20345C6.95209 4.00248 6.94557 3.67013 7.14654 3.46113C7.3475 3.25212 7.67985 3.24561 7.88886 3.44657L11.7389 7.12157C11.8418 7.22056 11.9 7.3572 11.9 7.50001C11.9 7.64282 11.8418 7.77947 11.7389 7.87845L7.88886 11.5534C7.67985 11.7544 7.3475 11.7479 7.14654 11.5389C6.94557 11.3299 6.95209 10.9975 7.16109 10.7966L10.0715 8.02501L2.62498 8.02501C2.33503 8.02501 2.09998 7.78996 2.09998 7.50001Z"
      fill={fill ?? "#fff"}
    />
  </Svg>
);

export default ArrowRightIcon;
