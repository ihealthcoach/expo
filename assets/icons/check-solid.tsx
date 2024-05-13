import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

interface CheckIconProps extends SvgProps {
  fill?: string;
}

const CheckIcon = (props: SvgProps) => (
  <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.5337 7.32457C32.0794 7.68836 32.2269 8.42564 31.8631 8.97133L17.6131 30.3463C17.4157 30.6423 17.096 30.8343 16.742 30.8693C16.388 30.9044 16.0369 30.7789 15.7853 30.5273L6.28531 21.0273C5.82156 20.5636 5.82156 19.8117 6.28531 19.3479C6.74906 18.8842 7.50094 18.8842 7.96469 19.3479L16.4404 27.8237L29.8869 7.65392C30.2507 7.10823 30.988 6.96077 31.5337 7.32457Z"
      fill={props.fill || "#111827"}
    />
  </Svg>
);

export default CheckIcon;
