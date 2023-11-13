import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
const ImageBgIH = ({ width, height, ...props }) => (
  <Svg
    className="absolute left-0 top-0 -z-50 h-full w-full"
    width={width}
    height={height}
    {...props}
  >
    <Defs>
      <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#81f5e2" stopOpacity={1} />
        <Stop offset="100%" stopColor="#4ae7c1" stopOpacity={1} />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
  </Svg>
);
export default ImageBgIH;
