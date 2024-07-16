import { View, Text } from "react-native";
import React from "react";

interface BadgeProps {
  text?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  hasBorder?: boolean;
  isActive?: boolean;
  className?: string;
}

const Badge = ({
  className,
  text,
  iconBefore,
  iconAfter,
  hasBorder,
  isActive,
}: BadgeProps) => {
  let badgeClassName = `flex-row justify-center grow rounded-full px-4 py-3 
  ${hasBorder ? "border border-gray-900" : ""} 
  ${isActive ? "bg-gray-900" : "bg-white"} 
  ${className}`;

  let textClassName = `font-interMedium 
  ${isActive ? "text-white" : "text-gray-600"}`;

  return (
    <View className={badgeClassName.trim()}>
      {iconBefore && <View className="mr-1">{iconBefore}</View>}
      <Text className={textClassName.trim()}>{text}</Text>
      {iconAfter && <View className="ml-1">{iconAfter}</View>}
    </View>
  );
};

export default Badge;
