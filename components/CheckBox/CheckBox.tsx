import { useState } from "react";
import { Pressable, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CheckBoxProps {
  checked?: boolean;
  stroke?: string;
  fill?: string;
  size?: number;
  // CheckBoxClassName?: string;
}

const CheckBox = ({
  checked,
  stroke,
  fill,
  size = 16,
  // CheckBoxClassName,
}: CheckBoxProps) => {
  return (
    <View
      className={`flex h-5 w-5 items-center justify-center rounded border-[1px] border-gray-300`}
    >
      {checked && (
        <View
          className={`flex h-5 w-5 items-center justify-center rounded border-[1px] border-gray-900 bg-gray-900`}
        >
          <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
            <Path
              d="M13.3636 3.32277C13.6272 3.5236 13.6781 3.90008 13.4773 4.16366L7.07725 12.5637C6.97232 12.7014 6.81301 12.7871 6.64026 12.7987C6.46751 12.8103 6.29816 12.7467 6.17573 12.6243L2.57573 9.0243C2.34142 8.78998 2.34142 8.41008 2.57573 8.17577C2.81004 7.94145 3.18994 7.94145 3.42426 8.17577L6.5388 11.2903L12.5227 3.43641C12.7236 3.17282 13.1 3.12195 13.3636 3.32277Z"
              stroke={stroke || "#FCFEFE"}
              fill={fill || "#FCFEFE"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      )}
    </View>
  );
};

export default CheckBox;
