import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const BellOutlineIcon = (props: SvgProps) => (
  <Svg
    width={30} // Set the width of the SVG
    height={30} // Set the height of the SVG
    viewBox="0 0 30 30" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M18.5711 21.3521C20.9393 21.0712 23.2229 20.5145 25.3889 19.7148C23.5929 17.7213 22.4998 15.082 22.4998 12.1875V11.3115C22.4999 11.291 22.5 11.2705 22.5 11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25L7.49975 12.1875C7.49975 15.082 6.40659 17.7213 4.6106 19.7148C6.77675 20.5145 9.06054 21.0713 11.4289 21.3522M18.5711 21.3521C17.4 21.491 16.2082 21.5625 14.9998 21.5625C13.7915 21.5625 12.5999 21.4911 11.4289 21.3522M18.5711 21.3521C18.6873 21.7139 18.75 22.0996 18.75 22.5C18.75 24.5711 17.0711 26.25 15 26.25C12.9289 26.25 11.25 24.5711 11.25 22.5C11.25 22.0996 11.3127 21.7139 11.4289 21.3522"
      stroke="#24292F" // Set the stroke color as specified
      strokeWidth={1.5} // Set the stroke width as specified
      strokeLinecap="round" // Set the stroke line cap as specified
      strokeLinejoin="round" // Set the stroke line join as specified
    />
  </Svg>
);

export default BellOutlineIcon;
