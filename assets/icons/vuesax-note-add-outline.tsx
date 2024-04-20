import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const NoteAddIcon = (props: SvgProps) => (
  <Svg
    width={24} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 24 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M9.56 18.75C9.15 18.75 8.81 18.41 8.81 18V13C8.81 12.59 9.15 12.25 9.56 12.25C9.97 12.25 10.31 12.59 10.31 13V18C10.31 18.41 9.97 18.75 9.56 18.75Z"
      fill="#111827"
    />
    <Path
      d="M12 16.25H7C6.59 16.25 6.25 15.91 6.25 15.5C6.25 15.09 6.59 14.75 7 14.75H12C12.41 14.75 12.75 15.09 12.75 15.5C12.75 15.91 12.41 16.25 12 16.25Z"
      fill="#111827"
    />
    <Path
      d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
      fill="#111827"
    />
    <Path
      d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
      fill="#111827"
    />
    <Path
      d="M8.85002 22.8101C6.38002 22.8101 4.75002 22.2701 3.73002 21.1101C2.55002 19.7801 2.36001 17.7901 2.32001 16.0201L2.19002 9.85005C2.09002 5.12005 3.66002 3.15005 7.76002 2.84005L15.8 2.68005C15.82 2.68005 15.83 2.68005 15.84 2.68005C19.95 2.82005 21.59 4.72005 21.69 9.46005L21.81 15.6301C21.85 17.4001 21.73 19.4001 20.61 20.7701C19.59 22.0201 17.87 22.6301 15.2 22.6901L9.20001 22.8101C9.08001 22.8101 8.96002 22.8101 8.85002 22.8101ZM15.8 4.17005L7.83001 4.33005C5.03001 4.55005 3.60002 5.45005 3.69002 9.82005L3.82001 15.9901C3.86001 18.1101 4.17001 19.3501 4.85001 20.1201C5.61001 20.9801 6.98001 21.3601 9.18002 21.3101L15.18 21.1901C17.37 21.1501 18.73 20.7101 19.46 19.8201C20.11 19.0301 20.37 17.7801 20.32 15.6601L20.2 9.49005C20.1 5.13005 18.64 4.27005 15.8 4.17005Z"
      fill="#111827"
    />
  </Svg>
);

export default NoteAddIcon;
