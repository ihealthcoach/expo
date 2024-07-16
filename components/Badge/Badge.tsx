import { View, Text } from "react-native";
import React from "react";

interface BadgeProps {
  text?: string;
  icon?: React.ReactNode;
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
  icon,
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
  ${isDark ? "text-white-ih" : ""} 
  ${isLight ? "text-gray-900" : ""} 
  ${isWhite ? "text-gray-600" : ""}`;

  if (icon) {
    return <View className={badgeClassName.trim()}>{icon}</View>;
  }

  if (iconBefore) {
    return (
      <View className={badgeClassName.trim()}>
        {iconBefore && <View className="mr-1">{iconBefore}</View>}
        <Text className={textClassName.trim()}>{text}</Text>
      </View>
    );
  }

  if (iconAfter) {
    return (
      <View className={badgeClassName.trim()}>
        <Text className={textClassName.trim()}>{text}</Text>
        {iconAfter && <View className="ml-1">{iconAfter}</View>}
      </View>
    );
  }

  // If only text is passed
  return (
    <View className={badgeClassName.trim()}>
      <Text className={textClassName.trim()}>{text}</Text>
    </View>
  );
};

export default Badge;
