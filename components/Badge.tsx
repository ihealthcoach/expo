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
  className?: string;
}

const Badge = ({
  className,
  text,
  iconBefore,
  iconAfter,
  hasBorder,
  isDark,
  isLight,
  isWhite,
}: BadgeProps) => {
  let badgeClassName = `flex-row items-center rounded-full px-4 py-3 
  ${hasBorder ? "border border-gray-900" : ""} 
  ${isDark ? "bg-gray-900" : ""} 
  ${isLight ? "bg-gray-200" : ""} 
  ${isWhite ? "bg-white" : ""} 
  ${className}`;

  let textClassName = `font-interMedium 
  ${isDark ? "text-white" : ""} 
  ${isLight ? "text-gray-900" : ""} 
  ${isWhite ? "text-gray-600" : ""}`;

  return (
    <View className={badgeClassName.trim()}>
      {iconBefore && <View className="mr-1">{iconBefore}</View>}
      <Text className={textClassName.trim()}>{text}</Text>
      {iconAfter && <View className="ml-1">{iconAfter}</View>}
    </View>
  );
};

export default Badge;
