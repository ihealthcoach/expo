import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";

interface HeaderWithBackArrowProps {
  children: React.ReactNode;
  path?: string;
}

const HeaderWithBackArrow = ({ children, path }: HeaderWithBackArrowProps) => {
  const router = useRouter();
  return (
    <View className="mb-6 mt-4 flex-row items-center justify-between">
      {path ? (
        <Pressable onPress={() => router.push(path)}>
          <ArrowLeftIcon />
        </Pressable>
      ) : (
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon />
        </Pressable>
      )}
      {children}
    </View>
  );
};

export default HeaderWithBackArrow;
