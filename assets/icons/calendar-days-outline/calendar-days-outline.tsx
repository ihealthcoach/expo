import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CalendarDaysOutlineIcon = (props: SvgProps) => (
  <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
    <Path
      d="M3.375 1.5V2.625M8.625 1.5V2.625M1.5 9.375V3.75C1.5 3.12868 2.00368 2.625 2.625 2.625H9.375C9.99632 2.625 10.5 3.12868 10.5 3.75V9.375M1.5 9.375C1.5 9.99632 2.00368 10.5 2.625 10.5H9.375C9.99632 10.5 10.5 9.99632 10.5 9.375M1.5 9.375V5.625C1.5 5.00368 2.00368 4.5 2.625 4.5H9.375C9.99632 4.5 10.5 5.00368 10.5 5.625V9.375M6 6.375H6.00375V6.37875H6V6.375ZM6 7.5H6.00375V7.50375H6V7.5ZM6 8.625H6.00375V8.62875H6V8.625ZM4.875 7.5H4.87875V7.50375H4.875V7.5ZM4.875 8.625H4.87875V8.62875H4.875V8.625ZM3.75 7.5H3.75375V7.50375H3.75V7.5ZM3.75 8.625H3.75375V8.62875H3.75V8.625ZM7.125 6.375H7.12875V6.37875H7.125V6.375ZM7.125 7.5H7.12875V7.50375H7.125V7.5ZM7.125 8.625H7.12875V8.62875H7.125V8.625ZM8.25 6.375H8.25375V6.37875H8.25V6.375ZM8.25 7.5H8.25375V7.50375H8.25V7.5Z"
      // stroke="#4B5563"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarDaysOutlineIcon;
