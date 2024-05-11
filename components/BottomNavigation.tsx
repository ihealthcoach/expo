import * as React from "react";
import { View } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const BottomNavigation = ({ children }: { children: React.ReactNode }) => (
  <View className="relative items-center justify-center">
    <Svg width={390} height={110} viewBox="0 0 390 110" fill="none">
      <G clipPath="url(#clip0_303_5)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140.131 20C148.472 20 156.009 15.4305 162.665 10.4026C171.195 3.95862 182.762 0 195.5 0C208.238 0 219.805 3.95862 228.335 10.4026C234.991 15.4305 242.528 20 250.869 20H365C378.807 20 390 31.1929 390 45V85C390 98.8071 378.807 110 365 110H25C11.1929 110 0 98.8071 0 85V45C0 31.1929 11.1929 20 25 20H140.131Z"
          fill="#FCFEFE"
        />
        <Path d="M390 20H0V110H390V20Z" fill="#FCFEFE" />
        <Path
          d="M195 71C210.464 71 223 58.464 223 43C223 27.536 210.464 15 195 15C179.536 15 167 27.536 167 43C167 58.464 179.536 71 195 71Z"
          fill="#111827"
        />
        <Path
          d="M206.666 31.3334H183.333V54.6667H206.666V31.3334Z"
          fill="#111827"
        />
        <Path
          d="M195.875 36.875C195.875 36.3918 195.483 36 195 36C194.517 36 194.125 36.3918 194.125 36.875V42.125H188.875C188.392 42.125 188 42.5168 188 43C188 43.4832 188.392 43.875 188.875 43.875H194.125V49.125C194.125 49.6082 194.517 50 195 50C195.483 50 195.875 49.6082 195.875 49.125V43.875H201.125C201.608 43.875 202 43.4833 202 43C202 42.5168 201.608 42.125 201.125 42.125H195.875V36.875Z"
          fill="#FCFEFE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_303_5">
          <Rect width="390" height="110" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
    <View className="absolute">{children}</View>
  </View>
);

export default BottomNavigation;
