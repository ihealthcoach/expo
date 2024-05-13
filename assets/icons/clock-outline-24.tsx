import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface ClockOutline24IconProps extends SvgProps {
  stroke?: string;
  fill?: string;
}

const ClockOutline24Icon = (props: ClockOutline24IconProps) => (
  <Svg
    width={24} // Set the width of the SVG
    height={24} // Set the height of the SVG
    viewBox="0 0 24 24" // Set the viewBox to match the SVG's dimensions
    fill={props.fill ?? "none"} // Set the fill color as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M12 6V12H16.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={props.stroke ?? "#111827"} // Set the stroke color as specified
      strokeWidth="1.5" // Set the stroke width as specified
      strokeLinecap="round" // Set the stroke line cap as specified
      strokeLinejoin="round" // Set the stroke line join as specified
      fill={props.fill ?? "none"}
    />
  </Svg>
);

export default ClockOutline24Icon;
