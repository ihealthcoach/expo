import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ChatBubbleOvalLeftEllipsisOutlineIcon = (props: SvgProps) => (
  <Svg
    width={30} // Set the width of the SVG
    height={30} // Set the height of the SVG
    viewBox="0 0 30 30" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      d="M10.7812 15C10.7812 15.2589 10.5714 15.4688 10.3125 15.4688C10.0536 15.4688 9.84375 15.2589 9.84375 15C9.84375 14.7411 10.0536 14.5312 10.3125 14.5312C10.5714 14.5312 10.7812 14.7411 10.7812 15ZM10.7812 15H10.3125M15.4688 15C15.4688 15.2589 15.2589 15.4688 15 15.4688C14.7411 15.4688 14.5312 15.2589 14.5312 15C14.5312 14.7411 14.7411 14.5312 15 14.5312C15.2589 14.5312 15.4688 14.7411 15.4688 15ZM15.4688 15H15M20.1562 15C20.1562 15.2589 19.9464 15.4688 19.6875 15.4688C19.4286 15.4688 19.2188 15.2589 19.2188 15C19.2188 14.7411 19.4286 14.5312 19.6875 14.5312C19.9464 14.5312 20.1562 14.7411 20.1562 15ZM20.1562 15H19.6875M26.25 15C26.25 20.6954 21.2132 25.3125 15 25.3125C13.8907 25.3125 12.8188 25.1653 11.8065 24.8911C10.5877 25.7473 9.10251 26.25 7.5 26.25C7.25098 26.25 7.0047 26.2379 6.76208 26.2142C6.5625 26.1947 6.36475 26.1674 6.16974 26.1325C6.77415 25.4191 7.20346 24.5533 7.39236 23.601C7.50567 23.0297 7.22588 22.4749 6.80855 22.0686C4.91213 20.2227 3.75 17.7358 3.75 15C3.75 9.30456 8.7868 4.6875 15 4.6875C21.2132 4.6875 26.25 9.30456 26.25 15Z"
      stroke="#24292F" // Set the stroke color as specified
      strokeWidth={1.5} // Set the stroke width as specified
      strokeLinecap="round" // Set the stroke line cap as specified
      strokeLinejoin="round" // Set the stroke line join as specified
    />
  </Svg>
);

export default ChatBubbleOvalLeftEllipsisOutlineIcon;
