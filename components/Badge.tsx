import { View, Text } from "react-native";
import React from "react";

interface BadgeProps {
  text?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  hasBorder?: boolean;
  isDark?: boolean;
  isLight?: boolean;
  isWhite?: boolean;
}

const Badge = ({
  text,
  iconBefore,
  iconAfter,
  hasBorder,
  isDark,
  isLight,
  isWhite,
}: BadgeProps) => {
  let badgeClassName = "flex-row items-center rounded-full px-4 py-3";
  let textClassName = "font-interMedium";

  if (hasBorder) {
    badgeClassName += " border-[1px] border-gray-900";
  }
  if (isDark) {
    badgeClassName += " bg-gray-900";
    textClassName += " text-white";
  }
  if (isLight) {
    badgeClassName += " bg-gray-200";
    textClassName += " text-gray-900";
  }
  if (isWhite) {
    badgeClassName += " bg-white";
    textClassName += " text-gray-600";
  }

  return (
    <View className={badgeClassName}>
      {iconBefore && <View className="mr-1">{iconBefore}</View>}
      <Text className={textClassName}>{text}</Text>
      {iconAfter && <View className="ml-1">{iconAfter}</View>}
    </View>
  );
};

export default Badge;
