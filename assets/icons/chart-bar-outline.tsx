import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ChartBarIcon = (props: SvgProps) => (
  <Svg
    width={25} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 25 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M3.40002 13.125C3.40002 12.5037 3.9037 12 4.52502 12H6.77502C7.39634 12 7.90002 12.5037 7.90002 13.125V19.875C7.90002 20.4963 7.39634 21 6.77502 21H4.52502C3.9037 21 3.40002 20.4963 3.40002 19.875V13.125Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.15 8.625C10.15 8.00368 10.6537 7.5 11.275 7.5H13.525C14.1463 7.5 14.65 8.00368 14.65 8.625V19.875C14.65 20.4963 14.1463 21 13.525 21H11.275C10.6537 21 10.15 20.4963 10.15 19.875V8.625Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.9 4.125C16.9 3.50368 17.4037 3 18.025 3H20.275C20.8963 3 21.4 3.50368 21.4 4.125V19.875C21.4 20.4963 20.8963 21 20.275 21H18.025C17.4037 21 16.9 20.4963 16.9 19.875V4.125Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChartBarIcon;
