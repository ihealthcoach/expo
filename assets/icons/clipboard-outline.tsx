import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface ClipboardIconProps extends SvgProps {
  stroke?: string;
  fill?: string;
}

const ClipboardIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill={props.fill ?? "none"}
    {...props}
  >
    <Path
      d="M13.0548 3.23991C12.8326 2.45227 12.1087 1.875 11.25 1.875H8.75C7.89128 1.875 7.16739 2.45227 6.94522 3.23991M13.0548 3.23991C13.1005 3.40209 13.125 3.57318 13.125 3.75V3.75C13.125 4.09518 12.8452 4.375 12.5 4.375H7.5C7.15482 4.375 6.875 4.09518 6.875 3.75V3.75C6.875 3.57318 6.89947 3.40209 6.94522 3.23991M13.0548 3.23991C13.5933 3.28057 14.1288 3.3319 14.6611 3.39367C15.5783 3.50011 16.25 4.29083 16.25 5.21416V16.25C16.25 17.2855 15.4105 18.125 14.375 18.125H5.625C4.58947 18.125 3.75 17.2855 3.75 16.25V5.21416C3.75 4.29083 4.42173 3.50011 5.3389 3.39367C5.87122 3.3319 6.40673 3.28057 6.94522 3.23991"
      stroke={props.stroke ?? "#111827"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ClipboardIcon;
